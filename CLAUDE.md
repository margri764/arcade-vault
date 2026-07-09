# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical: modified Next.js

`AGENTS.md` (imported above) warns that this Next.js has breaking changes vs. what you likely know. **Before writing any Next.js/React code, read the relevant guide under `node_modules/next/dist/docs/`** — App Router docs live in `01-app/`. Do not rely on training-data assumptions about APIs, file conventions, or config.

## Commands

```bash
npm run dev     # start dev server (http://localhost:3000)
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint (flat config, eslint.config.mjs)
```

No test runner is configured yet.

## Project

Arcade Vault — a platform to play games online and compete for the highest score (see `README.md`, in Spanish). The repo is currently a fresh scaffold; feature work has not started.

Development follows **Spec Driven Design** using the `/spec` and `/spec-impl` skills (from `Klerith/fernando-skills`). Write/refine a spec before implementing.

## Stack & conventions

- **Next.js 16 App Router** — routes and UI live in `app/`. `app/layout.tsx` is the root layout (loads Geist fonts + `globals.css`); `app/page.tsx` is the home page.
- **React 19**, **TypeScript** in `strict` mode.
- **Tailwind CSS v4** — configured entirely in CSS via `@import "tailwindcss"` and the `@theme` block in `app/globals.css`. There is no `tailwind.config.js`; add theme tokens (colors, fonts) in `globals.css`.
- **Path alias**: `@/*` maps to the repo root (e.g. `import x from "@/app/..."`), per `tsconfig.json`.
