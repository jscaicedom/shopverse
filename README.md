This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ShopVerse | React (Next.js) E-commerce Product Listing Page with Server Side Rendering

e-commerce product listing page using Next.js, Redux, Typescript
and Tailwind CSS.

JSON API : https://dummyjson.com/products

## Main Features:
-List of the products in a grid layout. Each
product card includes:
○ Product image
○ Product name
○ Product description (truncate to 100 characters)
○ Price 
○ Rating 

-infinite scroll.

-search bar to filter products by title. The search is case-insensitive and update
the product listing in real-time as the user types.

-sorting for the products (by price, title or rating).

-the ability to add and remove products to a shopping cart and display the total number of items and the
total price in a fixed header


## To get startet

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
