#!/usr/bin/env python3
import os
import re

# Read data.js
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all file paths from data.js
file_pattern = r"file:\s*'([^']+)'"
data_paths = re.findall(file_pattern, content)

print(f"=== PDF Path Verification ===\n")
print(f"Total paths in data.js: {len(data_paths)}\n")

missing = []
found = []

for path in data_paths:
    if os.path.exists(path):
        found.append(path)
    else:
        missing.append(path)
        
print(f"✓ Found: {len(found)}")
print(f"✗ Missing: {len(missing)}\n")

if missing:
    print("Missing files:")
    print("=" * 80)
    for i, path in enumerate(missing, 1):
        print(f"\n{i}. {path}")
        
        # Try to find similar files
        dir_path = os.path.dirname(path)
        filename = os.path.basename(path)
        
        if os.path.exists(dir_path):
            actual_files = os.listdir(dir_path)
            # Find similar filenames (case-insensitive)
            similar = [f for f in actual_files if f.lower() == filename.lower() and f != filename]
            if similar:
                print(f"   → Similar file found: {similar[0]}")
                print(f"   → Full path: {os.path.join(dir_path, similar[0])}")
        else:
            print(f"   → Directory doesn't exist: {dir_path}")

print("\n" + "=" * 80)
print(f"\nSummary: {len(missing)} files need to be fixed in data.js")
