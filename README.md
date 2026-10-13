# Codetopia Labs

Website for Codetopia Labs, the research and engineering division of [Codetopia](https://codetopia.org).

Built with React, TypeScript, React Router and Vite.

## Develop

```sh
pnpm install
pnpm dev
```

`pnpm build` type-checks and builds to `dist/`. `pnpm lint` runs oxlint.

## Content

- Projects: `src/data/projects.ts`. Each project has a status (`research`, `experiment`, `building`, `live`, `archived`), the year it reached that status, and an optional URL.
- Notes: `src/data/posts.ts`. The newest post goes first; it is also shown as "New" on the home page.
- Contact email: `email` in `src/data/projects.ts`.
