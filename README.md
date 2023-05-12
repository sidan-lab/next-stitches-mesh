# Next-Stitches-Mesh Boilerplate

- This is a NextJs 13 boilerplate, for guide or specs requirement please refer to the bottom of README.

# Collaboration Convention

## General Convention

- Functional Components: Prefer functional components over class-based components for all. Default exporting each component in a separate file (using snippet of `rafce`)
- Functions: Prefer arrow functions over other declaration alternatives.

## Static Content

- Iterative Content: All iterative content (those would pass in `map` function) should be stored in `@assets/StaticContent`
- Non Iterative Content: Can either be stored in `@assets/StaticContent` or hardcoded inside each components.

## UI Component Variants

- Util Variants: All repeated usable variants against wide range of components are constructed and exported in `@src/components/style`
- Standardized Variants: Only standardized variants (use more than once)
- Non Standardized Variants: Variants which would be used only once should be declared at the beginning inside each functional components.

## Styles

- Vertical Margin / Padding: Always prefer using `top` against `bottom`
- Responsive: Always use mobile version as default, responsive on tablet or desktop width
- Responsive: It is always preferred to adopt tailwind-like utils functions to handle responsive UI at `@src/styles/tokens/utils`. If that CSS element is none existing yet, create one to proceed.

## Cardano Transactions

- All Cardano transactions would be built inside `@src/mesh`, which take `BrowserWallet` and other required information as parameters, and returning a `signedTx`. This design is for pending signed transaction for further checking before sending to the network.

# nextjs-boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
