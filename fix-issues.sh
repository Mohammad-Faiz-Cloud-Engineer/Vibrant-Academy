#!/bin/bash

echo "=== Fixing PDF Loading Issues ==="
echo ""

# Issue 1: Fix trailing space in directory name
echo "1. Fixing directory with trailing space..."
if [ -d "Vibrant Academy Modules/Class 11th/Chemistry/Physical Chemistry " ]; then
    mv "Vibrant Academy Modules/Class 11th/Chemistry/Physical Chemistry " "Vibrant Academy Modules/Class 11th/Chemistry/Physical Chemistry"
    echo "   ✓ Renamed 'Physical Chemistry ' to 'Physical Chemistry'"
else
    echo "   ✓ Directory already fixed or doesn't exist"
fi

echo ""
echo "2. Verifying all PDF files exist..."

# Count total PDFs
total_pdfs=$(find "Vibrant Academy Modules" -name "*.pdf" -type f | wc -l)
echo "   ✓ Found $total_pdfs PDF files"

echo ""
echo "=== Fix Complete ==="
echo ""
echo "Next steps:"
echo "1. Update data.js to remove trailing space from paths"
echo "2. Test the application"
