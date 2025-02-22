import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // Ensure source maps are enabled for better debugging
      sourceMap: true,
    },
  },
});

