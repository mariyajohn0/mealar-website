# Mealar — Static React site

This is a small Vite + React static site scaffold that matches the Mealar app theme and navigation.

Structure
- index.html — entry
- src/ — React source files
-- src/pages — Home, Contact, Privacy
- src/components — Header and Footer

Quick start

1) from the `static-site-react` folder:

```powershell
cd static-site-react
npm install
npm run dev

# open http://localhost:3000
```

- Notes about assets
- Pages reference `/assets/logo.svg` and `/assets/logo_mealar_transparent.svg` for branding and include App Store / Play Store badge images (`/assets/app-store-badge.svg` and `/assets/play-store-badge.svg`). To use different logos/badges either:
  - Replace the image tags in `src/components/Header.jsx` and `src/pages/Home.jsx` with your preferred path, or
  - Swap the badge/svg files in `public/assets/` with optimized assets you prepare.

Deployment
- Build: `npm run build`
- Serve `dist/` on any static hosting (Netlify, Vercel, GitHub Pages, S3, etc.).

Replace placeholder store/social links and legal content before publishing.

Account deletion & privacy
- Privacy Policy and Account Deletion now have their own pages:
  - Privacy: /privacy
  - Account deletion: /delete-account
These pages are reachable via the header and footer links and are full URLs (not modals).
