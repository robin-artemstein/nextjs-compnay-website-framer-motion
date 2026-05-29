# The Next.js company website

The website is built with the following tech stack combination.

- Next.js app router for UI and interaction design
- TypeScript for static typing
- Tailwind for UI styling 
- Motion (Formerly know as Framer Motion) for animation
- next-transition-router for adding animated transitions between pages using Next.js App Router and Framer Motion.

## Push to GitHub repository
```
git init
git add .
git commit -m "The Nth commit on date."
git remote rm origin
git branch -M main
git remote add origin git@github.com:robin-artemstein/nextjs-company-website-framer-motion.git
git push -u origin main
```

## Installation

Install Bun first

https://bun.sh

Then install dependencies:
```
bun install
bun dev
```
## Project structure
```
nextjs-compnay-website-framer-motion/
├.
├── app                 // Pages
│   ├── about
│   │   └── page.tsx    // About page
│   ├── contact
│   │   └── page.tsx    // Contact page
│   ├── pricing         
│   │   └── page.tsx
│   └── services
│   |   └── page.tsx    // Service page
│   ├── layout.tsx      // This is where to apply the Providers.tsx
|   ├── globals.css     // Global CSS for Tailwnd
|   └── page.tsx        // Homepage
├── components
│   ├── Footer.tsx      // Footer
│   ├── Navbar.tsx      // Navigation bar
│   └── Providers.tsx   // Animaion provider
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
└── tsconfig.json
```
