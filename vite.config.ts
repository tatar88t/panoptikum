import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // isCustomElement: (tag) => 'Counter' === tag,
      }
    },

  })],

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue'],
    alias: {
      src: '/src',
    },
  },

  server: {
    port: 8070,
  },
})
