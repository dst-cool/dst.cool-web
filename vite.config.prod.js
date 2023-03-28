
import { defineConfig } from 'vite'
import { resolve} from "path"
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from "tailwindcss ";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': {
      BASE_API: 'https://api.dst.cool',
    },
  },
  // terserOptions: { 
  //   drop_console: true,
  //   drop_debugger: true,
  // }
  css: {
   
    postcss: {
      plugins: [require('postcss-100vh-fix'),tailwindcss, autoprefixer],
    },
  },
})
