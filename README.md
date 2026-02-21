# Shani Dhupian - Business Website

A modern, responsive static website for Shani Dhupian - a leading wholesaler and distributor of cotton fabric, lycra fabric, and bakery boxes in Surat, Gujarat.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Static Site Generation** - Optimized for performance

## Features

- ✅ Fully responsive design (mobile-first)
- ✅ Modern, professional UI/UX
- ✅ SEO optimized with meta tags
- ✅ Accessible components (WCAG compliant)
- ✅ Fast loading with static generation
- ✅ Smooth scrolling navigation
- ✅ Clean component architecture

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This will generate a static site in the `out` directory that can be deployed to any static hosting service.

## Project Structure

```
shani-dhupian/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Products.tsx     # Products showcase
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact information
│   └── Footer.tsx       # Footer
├── data/
│   └── business.ts      # Business data and products
├── types/
│   └── index.ts         # TypeScript interfaces
└── public/              # Static assets (images, etc.)
```

## Business Information

- **Name**: Shani Dhupian
- **Location**: Surat, Gujarat
- **Established**: 2009
- **GST**: 24AMWPR2708L1ZF
- **Products**: Cotton Fabric, Lycra Fabric, Bakery Boxes

## Deployment

The site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `out` directory.

## License

Private - All rights reserved.
