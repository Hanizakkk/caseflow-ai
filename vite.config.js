import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: change 'caseflow-ai' to match your actual GitHub repo name.
  // If your repo is github.com/you/caseflow-ai, base stays '/caseflow-ai/'.
  base: '/caseflow-ai/',
})
