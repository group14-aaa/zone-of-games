import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'build/',
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    polyfill: false, // disable polyfill
  },
  server: {
    middleware: [
      (req, res, next) => {
        // Set cache control headers for static assets
        if (req.url.includes('/assets/')) {
          res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 year in seconds
        }

        // Continue to the next middleware
        next();
      },
    ],
  },
});
