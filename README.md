This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

This site is automatically deployed to GitHub Pages at [https://laibrez.github.io](https://laibrez.github.io) when changes are pushed to the `main` branch.

### GitHub Pages Deployment

The site uses GitHub Actions for automatic deployment:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds the site with `npm run build`
3. The static files are deployed to GitHub Pages
4. The site is available at https://laibrez.github.io

### Manual Build

To build the site locally for testing:

```bash
npm run build
```

This will generate static files in the `out/` directory.

### GitHub Pages Configuration

To enable GitHub Pages deployment, ensure that in your repository settings:

1. Go to Settings > Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. The workflow will automatically deploy on push to main
