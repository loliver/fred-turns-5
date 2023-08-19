import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import autoprefixer from 'autoprefixer'
import { ImageLoader } from 'esbuild-vanilla-image-loader'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin({
    esbuildOptions: {
      plugins: [ImageLoader()],
    }
  })],
  base: '/fred-turns-5/',
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "~@": path.resolve(__dirname, "/src"),
    },
  },
})
