#!/bin/bash
# Quick start script for development

echo "🥬 Qoffa Smart - Development Server"
echo "Starting local server..."

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "Using Python 3..."
    cd /home/abdellah/Bureau/qoffa-smart
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Using Python 2..."
    cd /home/abdellah/Bureau/qoffa-smart
    python -m SimpleHTTPServer 8000
else
    echo "Python not found. Please install Python or open index.html directly in your browser."
fi
