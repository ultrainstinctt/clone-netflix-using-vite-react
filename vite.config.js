import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/clone-netflix-using-vite-react/",
  plugins: [react()],
  server:{
    port:3000
  }
})
