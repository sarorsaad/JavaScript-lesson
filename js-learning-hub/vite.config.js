import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/0JScode': 'http://localhost:3000',
      '/0JSquiz': 'http://localhost:3000',
      '/0JSimg': 'http://localhost:3000'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
