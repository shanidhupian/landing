#!/usr/bin/env node

/**
 * Image Download Script for Shani Dhupian Website
 * 
 * This script helps download images from IndiaMART pages.
 * 
 * Usage:
 *   1. Install dependencies: npm install puppeteer
 *   2. Run: node scripts/download-images.js
 * 
 * Or manually download images from:
 * - https://www.indiamart.com/shani-dhupian/products.html
 * - https://www.indiamart.com/shani-dhupian/photos.html
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Image URLs structure (you'll need to update these with actual URLs)
// Note: IndiaMART images are in WebP format
const imageUrls = {
  products: {
    'cotton-fabric.webp': '', // Add URL here (WebP format)
    'lycra-fabric.webp': '',  // Add URL here (WebP format)
    'bakery-box.webp': '',    // Add URL here (WebP format)
  },
  hero: {
    'hero-bg.webp': '',       // Add URL here (WebP format)
    'hero-main.webp': '',     // Add URL here (WebP format)
  },
  about: {
    'about-us.webp': '',      // Add URL here (WebP format)
    'business-info.webp': '', // Add URL here (WebP format)
  }
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded: ${filepath}`);
          resolve(filepath);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'images');
  
  // Ensure directories exist
  ['products', 'hero', 'about'].forEach(dir => {
    const dirPath = path.join(baseDir, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });

  console.log('Starting image downloads...\n');

  for (const [category, images] of Object.entries(imageUrls)) {
    const categoryDir = path.join(baseDir, category);
    
    for (const [filename, url] of Object.entries(images)) {
      if (!url) {
        console.log(`⚠ Skipping ${filename} - no URL provided`);
        continue;
      }

      const filepath = path.join(categoryDir, filename);
      
      try {
        await downloadImage(url, filepath);
      } catch (error) {
        console.error(`✗ Error downloading ${filename}:`, error.message);
      }
    }
  }

  console.log('\nDownload complete!');
}

// Run if executed directly
if (require.main === module) {
  downloadAllImages().catch(console.error);
}

module.exports = { downloadImage, downloadAllImages };
