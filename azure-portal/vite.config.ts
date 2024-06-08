import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  /* 
      
    `
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `
              // just variables loaded globally
              @import
            `
          }
        }
      }
    `
  */
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "@/assets/external/sass/bootstrap";
        `
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@node_modules': fileURLToPath(new URL('./node_modules', import.meta.url)),
      '@bootstrap': fileURLToPath(new URL('./node_modules/bootstrap/scss', import.meta.url))
    }
  }
})
