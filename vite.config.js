import { defineConfig } from 'vite'
import react from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [vue()],
+  base: '/ru/'
})