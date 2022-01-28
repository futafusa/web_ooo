import { defineConfig } from 'vite';
import { resolve } from 'path';
import { minifyHtml, injectHtml } from 'vite-plugin-html';

export default defineConfig({
  // root: './src',
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    minifyHtml(),
    injectHtml({
      injectData: {
        url: 'https://xxxxxxx.com/',
        metaTitle: 'Out of Orbit -10th Aniversary Editions-',
        metaDescription: 'meta-description',
        ogType: 'website',
        ogImagePath: 'assets/ogp.jpg',
        ogTwitterCard : 'summary_large_image',
      }
    }),
  ],
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