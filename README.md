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

## Environment

Copy `.env.example` to `.env` and set `MONGODB_URI` before running the server. The auth API routes rely on this variable at runtime. During build the code is safe to build without the env set.

```bash
cp .env.example .env
# edit .env and set MONGODB_URI
```

## Tests

Unit and integration tests are powered by Vitest and Testing Library. Run:

```bash
npm test
```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## CI / Vercel deployment notes

This repository includes a GitHub Actions workflow (`.github/workflows/deploy-vercel.yml`) that can deploy to Vercel when you push to `main`.

Required GitHub repository secrets to enable automatic deploys:
- `VERCEL_TOKEN` - your Vercel personal token
- `VERCEL_PROJECT_ID` - the Vercel project id
- `VERCEL_ORG_ID` - the Vercel organization id

Required runtime environment variables (set in Vercel or your environment):
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - secret used to sign JWT session tokens
- `SESSION_SAMESITE` (optional) - cookie SameSite behavior: `lax` (default), `strict`, or `none`

To deploy manually, build locally and upload the `.next` output and `public` folder, or connect this repository to Vercel and set the secrets above.

## Netlify deployment notes

You can also deploy this app to Netlify using the official Next.js plugin. A sample `netlify.toml` and GitHub Actions workflow (`.github/workflows/deploy-netlify.yml`) are included.

Required Netlify-related secrets when using the provided GitHub Action:
- `NETLIFY_AUTH_TOKEN` - your Netlify personal access token
- `NETLIFY_SITE_ID` - the target Netlify site id

Netlify requires the `@netlify/plugin-nextjs` plugin which is referenced in `netlify.toml`.
