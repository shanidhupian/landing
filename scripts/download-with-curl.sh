#!/bin/bash

# Image Download Script using curl
# 
# Usage:
#   1. Find image URLs from https://www.indiamart.com/shani-dhupian/photos.html
#   2. Update the URLs below
#   3. Run: bash scripts/download-with-curl.sh

# Create directories
mkdir -p public/images/products
mkdir -p public/images/hero
mkdir -p public/images/about

# Product Images
# Replace these URLs with actual image URLs from IndiaMART
COTTON_FABRIC_URL=""
LYCRA_FABRIC_URL=""
BAKERY_BOX_URL=""

# Hero Images
HERO_BG_URL=""
HERO_MAIN_URL=""

# About Images
ABOUT_US_URL=""
BUSINESS_INFO_URL=""

echo "Downloading images..."

# Download product images (WebP format)
if [ ! -z "$COTTON_FABRIC_URL" ]; then
    curl -L "$COTTON_FABRIC_URL" -o public/images/products/cotton-fabric.webp
    echo "Downloaded cotton-fabric.webp"
fi

if [ ! -z "$LYCRA_FABRIC_URL" ]; then
    curl -L "$LYCRA_FABRIC_URL" -o public/images/products/lycra-fabric.webp
    echo "Downloaded lycra-fabric.webp"
fi

if [ ! -z "$BAKERY_BOX_URL" ]; then
    curl -L "$BAKERY_BOX_URL" -o public/images/products/bakery-box.webp
    echo "Downloaded bakery-box.webp"
fi

# Download hero images (WebP format)
if [ ! -z "$HERO_BG_URL" ]; then
    curl -L "$HERO_BG_URL" -o public/images/hero/hero-bg.webp
    echo "Downloaded hero-bg.webp"
fi

if [ ! -z "$HERO_MAIN_URL" ]; then
    curl -L "$HERO_MAIN_URL" -o public/images/hero/hero-main.webp
    echo "Downloaded hero-main.webp"
fi

# Download about images (WebP format)
if [ ! -z "$ABOUT_US_URL" ]; then
    curl -L "$ABOUT_US_URL" -o public/images/about/about-us.webp
    echo "Downloaded about-us.webp"
fi

if [ ! -z "$BUSINESS_INFO_URL" ]; then
    curl -L "$BUSINESS_INFO_URL" -o public/images/about/business-info.webp
    echo "Downloaded business-info.webp"
fi

echo "Done! Check public/images/ directory"
