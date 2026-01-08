# Repository Guidelines

## Project Structure & Module Organization
- `app/`: App Router pages; `page.tsx` is the homepage; feature routes `members/[slug]`, `news/[id]`, `publications`, `recruitment` include loading states.
- `components/ui`: shadcn-style Radix wrappers; `components/news` domain UI; `components/theme-provider.tsx` handles theming.
- `hooks/` houses shared React hooks; `lib/` holds utilities/types; `styles/` contains global Tailwind layers; `public/` stores static assets; configs live in `tailwind.config.ts`, `next.config.mjs`, `middleware.ts`.
- Path alias `@/*` resolves to the repo root (see `tsconfig.json`).

## Build, Test, and Development Commands
- `pnpm dev` (defaults to port 3001) starts the Next.js dev server using `.env.local` (`NEXT_PUBLIC_APP_URL`).
- `pnpm build` compiles the production bundle; `pnpm start` serves the built app.
- `pnpm lint` runs Next/ESLint and TypeScript checks; fix all issues before committing.

## Coding Style & Naming Conventions
- TypeScript with strict mode; prefer server components for data fetching; add `"use client"` only when hooks/state are required.
- Components/classes PascalCase; utilities/hooks camelCase; route files lowercase/kebab-case.
- Keep Tailwind classes readable (layout -> spacing -> color -> state); compose with `clsx`/`tailwind-merge`.
- Follow shadcn/ui patterns for forms/dialogs; preserve Radix accessibility props (e.g., `aria-*`, `asChild`).
- Avoid inline magic numbers; extract shared constants into `lib/`.

## Testing Guidelines
- No automated tests yet; minimum checks: `pnpm lint`, homepage data cards load, news detail renders, publications and recruitment pages paginate without errors.
- When adding tests, favor lightweight React/Next component tests with mocked fetches; keep fixtures under `__tests__/` or `__mocks__/`.

## Commit & Pull Request Guidelines
- History favors short, single-line summaries; keep messages imperative/present tense (e.g., `Add recruitment timeline`, `Fix news date formatting`). Use scope prefixes (`feat:`, `fix:`, `chore:`) when they clarify intent.
- PRs should include what changed and why, screenshots/GIFs for UI updates, commands run (lint/build), any env/config/data migration notes, and linked issues/tasks.

## Security & Configuration Tips
- Keep secrets in `.env.local`; never commit env files. Default base URL is `http://localhost:3001` via `NEXT_PUBLIC_APP_URL`.
- Review new API/data fetches for caching and error handling; avoid logging sensitive payloads.
- Place reusable images in `public/`; avoid committing large datasets or credentials.
