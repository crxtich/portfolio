import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served at crotich.com (see public/CNAME) — a custom domain serves from
// root, so base is '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
