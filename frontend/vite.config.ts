import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'


const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  devOptions: {
    enabled: true
  },
  includeAssets: ['drishti.jpg'],
  manifest: {
    name: 'Drishti',
    short_name: 'Drishti',
    theme_color: '#242424',
    icons: [
      {
        src: 'pwa/pwa-192-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'pwa/pwa-512-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8000, 
    // add the next lines if you're using windows and hot reload doesn't work
     watch: {
       usePolling: true
     }
  },
  plugins: [
    react(),
    VitePWA(pwaOptions)
  ],
})
