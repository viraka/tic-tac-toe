import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Tic Tac Toe",
        short_name: "Tic Tac Toe",
        description: "Simple app to play tic tac toe.",
        icons: [
          {
            src: '/tic-tac-toe.svg',
            sizes: '800x800',
            type: 'image/svg+xml'
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ]
})
