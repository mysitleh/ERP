import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/ERP/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        materi1: resolve(__dirname, 'materi-1.html'),
        absensi: resolve(__dirname, 'absensi.html'),
      },
    },
  },
});
