import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portafolio-Profesional/',
  resolve: {
    alias: {
      'lottie-react': 'lottie-react/build/index.es.js',
    },
  },
})