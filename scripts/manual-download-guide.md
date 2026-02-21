# Manual Image Download Guide

Since images are on IndiaMART pages, here's how to download them manually:

## Method 1: Browser Developer Tools (Recommended)

### Step 1: Open the Photos Page
1. Go to: https://www.indiamart.com/shani-dhupian/photos.html
2. Open browser Developer Tools (F12 or Right-click → Inspect)

### Step 2: Find Image URLs
1. Go to the **Network** tab
2. Filter by **Img** (images)
3. Refresh the page (F5)
4. You'll see all image URLs loading

### Step 3: Download Images
1. Right-click on each image in the Network tab
2. Select "Open in new tab"
3. Right-click the image → "Save image as..."
4. Save with the correct filename:

**Product Images** (save to `public/images/products/`):
- `cotton-fabric.webp` - Use Mono Banglory Fabric images (WebP format)
- `lycra-fabric.webp` - Use Lycra Fabric images (WebP format)
- `bakery-box.webp` - Use Mono Beglory Sillk images (WebP format)

**Hero Images** (save to `public/images/hero/`):
- `hero-bg.webp` - Use a wide product/fabric image (WebP format)
- `hero-main.webp` - Use best product showcase image (WebP format)

**About Images** (save to `public/images/about/`):
- `about-us.webp` - Use business/facility image (WebP format)
- `business-info.webp` - Use any relevant business image (WebP format)

**Important:** IndiaMART images are in WebP format. Save them with `.webp` extension.

## Method 2: Right-Click on Page Images

1. Visit: https://www.indiamart.com/shani-dhupian/photos.html
2. Right-click on product images directly on the page
3. Select "Save image as..."
4. Save to the correct directory with correct filename

## Method 3: Using Browser Extensions

### Chrome Extension: "Image Downloader"
1. Install "Image Downloader" extension
2. Visit the photos page
3. Click the extension icon
4. Select images to download
5. Download and rename files appropriately

## Image Mapping Guide

Based on the photos page, here's what to download:

| Website Image | Save As | Location |
|--------------|---------|----------|
| Mono Banglory Fabric (multiple) | `cotton-fabric.webp` | `public/images/products/` |
| Lycra Fabric images | `lycra-fabric.webp` | `public/images/products/` |
| Mono Beglory Sillk | `bakery-box.webp` | `public/images/products/` |
| Best wide image | `hero-bg.webp` | `public/images/hero/` |
| Best showcase image | `hero-main.webp` | `public/images/hero/` |
| Business/facility image | `about-us.webp` | `public/images/about/` |
| Any relevant image | `business-info.webp` | `public/images/about/` |

**Note:** All images from IndiaMART are in WebP format. Use `.webp` extension.

## Quick Steps Summary

1. **Visit**: https://www.indiamart.com/shani-dhupian/photos.html
2. **Open DevTools**: Press F12
3. **Go to Network tab** → Filter: Img
4. **Refresh page** to see all images
5. **Download each image** and save with correct filename
6. **Place in correct folders**:
   - Product images → `public/images/products/`
   - Hero images → `public/images/hero/`
   - About images → `public/images/about/`
7. **Restart dev server**: `npm run dev`

## Tips

- Choose high-quality images (WebP format is already optimized)
- Use the best-looking product images
- For hero images, choose wide/landscape orientation
- Make sure filenames match exactly (case-sensitive)
- **Important:** Save images with `.webp` extension (IndiaMART format)
- After adding images, restart the dev server

## Verification

After downloading:
1. Check file exists: `ls public/images/products/`
2. Restart server: `npm run dev`
3. Visit: http://localhost:3000
4. Check each section displays images correctly
