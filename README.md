This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed
on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited
in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated
as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Improvements I would suggest, but not required in the assignment:

- individual alert on fields if not filled in
- list of dimensions added (done)
- use of forms library, like Formik
- use library for table formatting, like Antd
- favicon with Timberhub logo
- auto fill for input fields
- search option for dropdown fields
- consistency in paddings and margins. For example, margin-bottom on "Create Product" page sections titles (Sawn
  Timber, Specifications, Dimensions) are all different (13, 17, 19px). I've used the same value everywhere (16).
- CreateForm should be used both for editing and adding a new item
- reformatting code in CreateForm.tsx where categories are defined for mapping. I am not very happy with my solution, as
  there is a lot of repetitive code. But I've left it at is due to time constraints.
- one-line css classes (like colorBrandGreen) that may be used in other parts of the app should be stored into another
  css file
- 