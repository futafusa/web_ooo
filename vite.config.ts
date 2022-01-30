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
    // minifyHtml(),
    injectHtml({
      injectData: {
        url: 'https://charlotontheweb.com/',
        metaTitle: 'Out of Orbit -10th Anniversary Editions-',
        metaDescription: 'シャルロの代表作ともいえる本作がリリースから10年を迎える2022年、音源、アートワークともにオリジナルの素材やプロジェクトファイルをリストアし、リミックス／リマスターを施したリニューアル仕様にて、アナログ盤とデジタル配信の2フォーマットでリリースされる。',
        ogType: 'website',
        ogImagePath: 'assets/images/ogp.jpg',
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