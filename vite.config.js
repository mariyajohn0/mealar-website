import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mealar-website/' // <-- your repo name
  // server: {
  //   port: 3000
  // }
})
