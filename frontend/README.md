# Forces Hub Pakistan

A React (Vite) frontend guide to joining the Pakistan Army, Navy and Air Force —
eligibility, entry schemes, initial test prep, physical standards, past-paper
subject breakdowns, and a full ISSB walkthrough.

## Tech stack

- React 19 + Vite
- React Router (client-side routing)
- Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional local check of the production build
```

The production files are written to `dist/`. Deploy that folder to any
static host (Vercel, Netlify, GitHub Pages, cPanel, etc.).

## Project structure

```
src/
  components/   Navbar, Footer, Seal (stamp graphic), section/card/table pieces
  data/         Written content for each service, ISSB and the initial test
  pages/        Home, Army, Navy, AirForce (via BranchTemplate), ISSB,
                InitialTest, PastPapers
  App.jsx       Route definitions
  index.css     Tailwind import + design tokens (colors, fonts)
```

## Editing content

All the actual guide text lives in `src/data/*.js` as plain JavaScript
objects — update ages, education requirements, or add new entry schemes
there without touching any component code.

## A note on accuracy

Recruitment ages, quotas and syllabi are revised with every new
advertisement. Treat the figures in this project as a planning reference
and verify against the official portals before relying on them:

- https://www.joinpakarmy.gov.pk
- https://www.joinpaknavy.gov.pk
- https://www.joinpaf.gov.pk
