# Collins Rotich — Portfolio

Personal portfolio site, deployed to [crotich.com](https://crotich.com).

## Tech stack

Vite + React + TypeScript + Tailwind CSS, matching the same design-token
system (light/dark theme via CSS custom properties) used on the sibling
site, [nse-tracker.crotich.com](https://nse-tracker.crotich.com).

## Development

```bash
npm install
npm run dev
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds
the site and deploys it to GitHub Pages. `public/CNAME` points the custom
domain (`crotich.com`) at this deployment.
