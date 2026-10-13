# Codetopia Labs

Website for Codetopia Labs, the research and engineering division of [Codetopia](https://codetopia.org).

Built with React, TypeScript, React Router and Vite.

## Develop

```sh
pnpm install
pnpm dev
```

`pnpm build` type-checks and builds to `dist/`. `pnpm lint` runs oxlint.

## Deploy

Hosted on Vercel. `vercel.json` rewrites every path to `index.html` so links like `/projects` work when opened directly. Link previews use `public/og.png` and the Open Graph tags in `index.html`, which assume the site lives at `https://labs.codetopia.org`.

## Content

- Projects: `src/data/projects.ts`. Each project has a status (`research`, `experiment`, `building`, `live`, `archived`), the year it reached that status, and an optional URL.
- Notes: `src/data/posts.ts`. The newest post goes first; it is also shown as "New" on the home page.
- Contact email: `email` in `src/data/projects.ts`.
