'use strict';

const CACHE_NAME = 'vibrant-academy-v1.9.0';
const RUNTIME_CACHE = 'vibrant-academy-runtime';
const CACHE_VERSION = '1.9.0';

// Core assets to cache on install
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    './config.js',
    './data.js',
    './app.js',
    './music-data.js',
    './music-app.js',
    './icon/logo.png',
    './manifest.json'
];

/**
 * Install event - cache core assets
 */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
                return self.skipWaiting();
            })
    );
});

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                return self.clients.claim();
            })
    );
});

/**
 * Fetch event - network-first strategy with cache fallback for no-cache policy
 */
self.addEventListener('fetch', (event) => {
    const { request } = event;

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip non-http(s) requests
    if (!request.url.startsWith('http')) {
        return;
    }

    const url = new URL(request.url);
    const isOwnOrigin = url.origin === self.location.origin;
    const isFontOrResource = request.url.includes('fonts.googleapis.com') ||
                             request.url.includes('fonts.gstatic.com');

    // Skip cross-origin requests (except fonts and external resources)
    if (!isOwnOrigin && !isFontOrResource) {
        return;
    }

    // Network-first strategy for no-cache compliance
    event.respondWith(
        fetch(request, {
            cache: 'no-store',
            headers: new Headers({
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            })
        })
            .then((response) => {
                // Only cache valid responses
                if (!response || response.status !== 200 || response.type === 'opaque') {
                    return response;
                }

                // Clone response for caching
                const responseToCache = response.clone();

                // Cache the response for offline fallback only
                caches.open(RUNTIME_CACHE)
                    .then((cache) => {
                        cache.put(request, responseToCache);
                    })
                    .catch(() => {
                        // Silently fail cache operations
                    });

                return response;
            })
            .catch(() => {
                // Network failed, try cache as fallback
                return caches.match(request)
                    .then((cachedResponse) => {
                        if (cachedResponse) {
                            return cachedResponse;
                        }

                        // No cache available, return offline response
                        return new Response(
                            JSON.stringify({
                                error: 'Offline',
                                message: 'You are offline and this content is not cached',
                                timestamp: new Date().toISOString()
                            }),
                            {
                                status: 503,
                                statusText: 'Service Unavailable',
                                headers: new Headers({
                                    'Content-Type': 'application/json',
                                    'Cache-Control': 'no-cache, no-store, must-revalidate'
                                })
                            }
                        );
                    });
            })
    );
});

/**
 * Message event - handle messages from clients
 */
self.addEventListener('message', (event) => {
    if (!event.data) {
        return;
    }

    switch (event.data.type) {
        case 'SKIP_WAITING':
            self.skipWaiting();
            break;

        case 'CLEAR_CACHE':
            event.waitUntil(
                caches.keys()
                    .then((cacheNames) => {
                        return Promise.all(
                            cacheNames.map((cacheName) => caches.delete(cacheName))
                        );
                    })
                    .then(() => {
                        return self.clients.matchAll();
                    })
                    .then((clients) => {
                        clients.forEach((client) => {
                            client.postMessage({
                                type: 'CACHE_CLEARED',
                                timestamp: new Date().toISOString()
                            });
                        });
                    })
            );
            break;

        case 'GET_VERSION':
            event.waitUntil(
                self.clients.matchAll().then((clients) => {
                    clients.forEach((client) => {
                        client.postMessage({
                            type: 'VERSION_INFO',
                            version: CACHE_VERSION,
                            cacheName: CACHE_NAME
                        });
                    });
                })
            );
            break;

        default:
            break;
    }
});
