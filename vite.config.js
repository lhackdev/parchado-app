import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000
  },
  host: 'localhost',
  define: {
    'process.env': {}
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  }
})
