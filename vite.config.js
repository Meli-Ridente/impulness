import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // accesible desde Docker
    watch: { usePolling: true }, // necesario para la recarga en vivo con Docker en Windows
  },
  build: {
    target: 'es2019',
    assetsInlineLimit: 0, // nunca incrustar imágenes/fuentes en base64: mejor caché
  },
})
