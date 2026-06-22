import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use root for local dev ('serve'), and the repo name for GitHub Pages build
  base: command === 'serve' ? '/' : '/ReactDemo/',
}))