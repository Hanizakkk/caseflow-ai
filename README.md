# CaseFlow AI (React)

A chatbot that answers questions about Hania Zaki's projects, powered by Groq (Llama 3.3 70B), grounded strictly in the case data in `src/data/cases.js`. The Groq API key lives only on a separate backend server (`caseflow-backend`) — it never appears in this frontend's code, git history, or built output. If the backend is unreachable, the chatbot falls back to local keyword-matched answers automatically.

## Backend (required for real AI answers)
This frontend calls a separate serverless backend that holds the Groq key privately — see `caseflow-vercel/README.md` in the backend project for deploy steps (free on Vercel, no billing details required). Set your deployed function's URL in `src/lib/chatApi.js` (`BACKEND_URL`) before building/deploying this frontend.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL it prints (something like `http://localhost:5173/caseflow-ai/`).

## Deploy to GitHub Pages

**Before deploying:** open `vite.config.js` and `package.json`, and replace `caseflow-ai` / `YOUR-GITHUB-USERNAME` with your actual repo name and GitHub username. The `base` path in `vite.config.js` must exactly match your repo name or the deployed site will load a blank page.

### Option A — automatic (recommended)
This repo includes `.github/workflows/deploy.yml`. Once pushed to GitHub:
1. Repo → **Settings → Pages** → Source: **GitHub Actions**.
2. Push to `main`. The workflow builds and deploys automatically.
3. Your live URL appears in the Pages settings screen and in the workflow run summary.

### Option B — manual
```bash
npm run deploy
```
This builds the app and pushes `dist/` to a `gh-pages` branch. Then in **Settings → Pages**, set Source to "Deploy from a branch" → `gh-pages` → `/ (root)`.

## Where the project data lives
`src/data/cases.js` — the only file to edit to add, edit, or reorder case studies. See `NEXT_CASE.md` for the exact steps.



## Docs in this repo
- `NEXT_CASE.md` — how to add the next case + what it is
- `CAPSTONE_EVIDENCE.md` — maps to the FlyRank capstone's 4 requirements
- `CLAUDE.md` — project memory for continuing this with the Claude Project
