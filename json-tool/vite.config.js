import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// vite.config.js
export default {
  base: '/AItools/', // 注意这里必须是你的 GitHub 仓库名！
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
