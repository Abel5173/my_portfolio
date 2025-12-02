import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React and core libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI libraries
          'ui-vendor': ['framer-motion', 'lucide-react', 'react-icons'],
          // Charts and data visualization
          'charts-vendor': ['recharts'],
          // Utilities
          'utils-vendor': ['clsx', 'tailwind-merge', 'ua-parser-js', 'uuid'],
          // Email and external services
          'services-vendor': ['emailjs-com', '@supabase/supabase-js'],
        },
      },
    },
    // Increase chunk size warning limit since we're now splitting
    chunkSizeWarningLimit: 600,
  },
})
