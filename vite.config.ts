import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // root: './src',
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // build: {
  //   outDir: '../dist',
  //   emptyOutDir: true, // outDirをroot外に設定した場合に自動で削除しなくなるので明示的に指定
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'index.html'),
  //       nested: resolve(__dirname, 'nested/index.html')
  //     }
  //   }
  // }
})