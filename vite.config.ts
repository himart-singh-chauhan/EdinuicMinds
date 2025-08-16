import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  root: './', // Explicitly set the root
  publicDir: 'public', // Explicitly set the public directory
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for the src directory
      '@components': path.resolve(__dirname, './src/components'), //Alias for components
      '@hooks': path.resolve(__dirname, './hooks'), //Alias for hooks
    },
  },
});
