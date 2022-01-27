import { defineConfig } from 'vite';
// import path from 'path';

export default defineConfig({
  root: './src',
  base: './',
  build: {
    outDir: '../dist',
    // rollupOptions: {
    //   input: {
    //     main: path.resolve(__dirname, 'index.html'),
    //     nested: path.resolve(__dirname, 'nested/index.html')
    //   }
    // }
  }
})