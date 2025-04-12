import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vite.dev/config/
export default defineConfig({
  base: '/AItools/', // 注意这里必须是你的 GitHub 仓库名！
  plugins: [vue()],
})
