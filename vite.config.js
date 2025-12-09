import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 👇 Add these configurations for Vercel
  base: './', // This is crucial for Vercel deployment
  
  build: {
    outDir: 'dist', // Vercel expects 'dist' for Vite projects
    sourcemap: false, // Disable sourcemaps for faster builds
    
    // 👇 Optimize chunk splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react']
        }
      }
    },
    
    // 👇 Set chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  
  // 👇 Server configuration for local development
  server: {
    port: 3000,
    host: true, // Listen on all addresses
  },
  
  // 👇 Preview server configuration (for `npm run preview`)
  preview: {
    port: 3000,
    host: true,
  },
  
  // 👇 Resolve alias for your shared package (if needed)
  resolve: {
    alias: {
      '@': '/src', // Optional: alias for src directory
    }
  }
})