# Quiz App (frontend)

## Setup

1. Install dependencies:

\`\`\`bash
cd frontend
npm install
\`\`\`

2. Run development server:

\`\`\`bash
npm run dev
# open http://localhost:5173
\`\`\`

3. Build for production:

\`\`\`bash
npm run build
npm run preview   # optional local preview of the built site
\`\`\`

4. Vercel deployment notes:
- Ensure `vercel.json` (if present) is located in the deployed folder (here: `frontend/vercel.json`).
- Build command: `npm run build`, Output directory: `dist`.
- Static assets: either import images from `src/assets` or place them in `public/` and reference them with root paths like `/favicon.svg` or `/group-1.png` (do NOT include `/public` in the URL).

## Tech stack

- React (functional components + hooks)
- Vite (dev server and build)
- Tailwind CSS (via CDN in `index.html`)
- Plain CSS / inline styles for component-specific styling

## Key features implemented

- Full-screen responsive quiz UI
- Multi-question flow with navigation and per-question selection
- Segmented progress bar with animated current-segment fill
- Submit flow computing score (25 points per correct answer)
- Animated score page that "rolls" up to the final percentage
- Restart functionality to retake the quiz
- Assets served from `public/` and/or imported from `src/assets`
- Vercel `vercel.json` SPA rewrite to prevent client-side-route 404s

## Assumptions

- You're deploying the `frontend` folder (so `frontend/vercel.json` and `frontend/package.json` must be used by Vercel)
- Node >= 16 is available during build
- Image filenames should avoid spaces/parentheses for reliability; URL-encode or rename if kept
- The project uses `main` as the primary branch (adjust commands if different)

## Time spent (estimate)

Approximately 3–4 hours implementing the UI, score page, and deployment fixes.

---