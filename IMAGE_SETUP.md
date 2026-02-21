# Image Setup Guide

This guide explains how to add images to your Shani Dhupian website.

## Image Structure

The website expects images in the following locations:

```
public/
└── images/
    ├── hero/
    │   ├── hero-bg.jpg      # Background image for hero section
    │   └── hero-main.jpg     # Main hero image (optional)
    ├── products/
    │   ├── cotton-fabric.jpg    # Cotton fabric product image
    │   ├── lycra-fabric.jpg     # Lycra fabric product image
    │   └── bakery-box.jpg        # Bakery box product image
    └── about/
        ├── about-us.jpg          # About section image
        └── business-info.jpg     # Business information image
```

## How to Add Images

### Option 1: Download from IndiaMART (Recommended)

**Step 1: Open the Photos Page**
- Visit: https://www.indiamart.com/shani-dhupian/photos.html
- This page contains all product images

**Step 2: Download Images Using Browser DevTools**
1. Press **F12** to open Developer Tools
2. Go to the **Network** tab
3. Filter by **Img** (to show only images)
4. Refresh the page (F5)
5. You'll see all image URLs loading
6. Right-click on each image → "Open in new tab"
7. Right-click the image → "Save image as..."
8. Save with the correct filename (see mapping below)

**Step 3: Alternative - Right-Click Method**
1. Visit: https://www.indiamart.com/shani-dhupian/photos.html
2. Right-click directly on product images on the page
3. Select "Save image as..."
4. Save to the correct directory with correct filename

**Image Mapping (WebP format):**
- **Mono Banglory Fabric** images → Save as `cotton-fabric.webp` → `public/images/products/`
- **Lycra Fabric** images → Save as `lycra-fabric.webp` → `public/images/products/`
- **Mono Beglory Sillk** images → Save as `bakery-box.webp` → `public/images/products/`
- Best wide image → Save as `hero-bg.webp` → `public/images/hero/`
- Best showcase image → Save as `hero-main.webp` → `public/images/hero/`
- Business/facility image → Save as `about-us.webp` → `public/images/about/`
- Any relevant image → Save as `business-info.webp` → `public/images/about/`

**Note:** IndiaMART images are in WebP format. Save them with `.webp` extension.

**See detailed guide:** `scripts/manual-download-guide.md`

### Option 2: Use Your Own Images

1. Take photos of your products
2. Optimize images (recommended size: 800x600px or larger)
3. Save with the exact filenames listed above
4. Place in the correct directories

### Option 3: Use Placeholder Images

The website will automatically show placeholder graphics if images are missing. You can add real images later.

## Image Requirements

### Recommended Specifications:

- **Format**: WebP (from IndiaMART), JPG, or PNG
- **Size**: 800x600px minimum (larger is fine)
- **File Size**: Under 500KB per image (WebP is already optimized)
- **Aspect Ratio**: 
  - Products: 4:3 or 16:9
  - Hero: 16:9
  - About: 3:2 or 16:9

**Note:** IndiaMART provides images in WebP format, which is already optimized for web. Use `.webp` extension when saving.

## Image Optimization Tools

Before adding images, optimize them for web:

- **Online Tools**: 
  - TinyPNG (https://tinypng.com/)
  - Squoosh (https://squoosh.app/)
  - ImageOptim (Mac app)

- **Command Line**:
  ```bash
  # Using ImageMagick (if installed)
  convert input.jpg -resize 1200x800 -quality 85 output.jpg
  ```

## Quick Start

1. Create the directories (already done):
   ```bash
   mkdir -p public/images/{hero,products,about}
   ```

2. Add your images to the directories

3. Use exact filenames (WebP format):
   - `/public/images/products/cotton-fabric.webp`
   - `/public/images/products/lycra-fabric.webp`
   - `/public/images/products/bakery-box.webp`
   - `/public/images/hero/hero-bg.webp`
   - `/public/images/hero/hero-main.webp`
   - `/public/images/about/about-us.webp`
   - `/public/images/about/business-info.webp`

4. Restart the development server to see changes

## Testing

After adding images:
1. Restart your dev server: `npm run dev`
2. Check each section:
   - Hero section (top of page)
   - Products section
   - About section
3. If images don't appear, check:
   - Filename spelling (case-sensitive)
   - File location (must be in `public/images/`)
   - File format (JPG or PNG)

## Notes

- Images are automatically optimized by Next.js
- Missing images will show placeholder graphics
- All images should be related to your business/products
- Use high-quality, professional photos when possible
