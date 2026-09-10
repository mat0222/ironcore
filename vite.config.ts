import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Repo Pages: https://mat0222.github.io/ironcore/
  base: '/ironcore/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spa-fallback-404',
      closeBundle() {
        const index = resolve(__dirname, 'dist/index.html')
        copyFileSync(index, resolve(__dirname, 'dist/404.html'))
      },
    },
  ],
})
