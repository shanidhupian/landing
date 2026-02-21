# Quick Image Download Guide

## Fastest Method: Browser DevTools

### Step-by-Step:

1. **Open Photos Page**
   ```
   https://www.indiamart.com/shani-dhupian/photos.html
   ```

2. **Open Developer Tools**
   - Press `F12` (or Right-click → Inspect)

3. **Go to Network Tab**
   - Click "Network" tab
   - Filter by "Img" (images only)

4. **Refresh Page**
   - Press `F5` to reload
   - You'll see all images loading

5. **Download Each Image**
   - Right-click on image URL → "Open in new tab"
   - Right-click image → "Save image as..."
   - Save with correct filename to correct folder

## Image Files to Download

**Note:** Images from IndiaMART are in **WebP format** (.webp extension)

### Product Images (`public/images/products/`)

| What to Download | Save As |
|-----------------|---------|
| Mono Banglory Fabric (best image) | `cotton-fabric.webp` |
| Lycra Fabric (best image) | `lycra-fabric.webp` |
| Mono Beglory Sillk | `bakery-box.webp` |

### Hero Images (`public/images/hero/`)

| What to Download | Save As |
|-----------------|---------|
| Best wide/landscape product image | `hero-bg.webp` |
| Best showcase/product image | `hero-main.webp` |

### About Images (`public/images/about/`)

| What to Download | Save As |
|-----------------|---------|
| Business/facility image | `about-us.webp` |
| Any relevant business image | `business-info.webp` |

## Quick Checklist

- [ ] Downloaded `cotton-fabric.webp` → `public/images/products/`
- [ ] Downloaded `lycra-fabric.webp` → `public/images/products/`
- [ ] Downloaded `bakery-box.webp` → `public/images/products/`
- [ ] Downloaded `hero-bg.webp` → `public/images/hero/`
- [ ] Downloaded `hero-main.webp` → `public/images/hero/`
- [ ] Downloaded `about-us.webp` → `public/images/about/`
- [ ] Downloaded `business-info.webp` → `public/images/about/`
- [ ] Restarted dev server: `npm run dev`
- [ ] Checked website: http://localhost:3000

## After Downloading

1. **Verify files exist:**
   ```bash
   ls public/images/products/
   ls public/images/hero/
   ls public/images/about/
   ```

2. **Restart dev server:**
   ```bash
   npm run dev
   ```

3. **Check website:**
   - Visit http://localhost:3000
   - Scroll through sections
   - Images should appear automatically

## Troubleshooting

**Images not showing?**
- Check filename spelling (must match exactly)
- Check file location (must be in `public/images/`)
- Restart dev server after adding images
- Clear browser cache (Ctrl+Shift+R)

**Need help?**
- See `scripts/manual-download-guide.md` for detailed instructions
- See `IMAGE_SETUP.md` for full documentation
