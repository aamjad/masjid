import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/masjid/', // Required for GitHub Pages deployment
  server: {
    open: true, // Automatically open the app in the browser
    host: true, // Allow access from network devices (for Chromecast testing)
    port: 5173, // Default Vite port
    strictPort: true, // Fail if port is already in use
    watch: {
      usePolling: true, // Improves reliability in some dev environments
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'images',
          dest: '.'
        },
        {
          src: 'CCA_5344-HDR.jpg',
          dest: '.'
        }
      ]
    })
  ],
});