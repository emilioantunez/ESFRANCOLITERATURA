import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Configuración para GitHub Pages: base del repo y URL del sitio
export default defineConfig({
  site: 'https://emilioantunez.github.io/ESFRANCOLITERATURA/',
  base: '/ESFRANCOLITERATURA',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !(
        page.includes('/poesia/la-orilla-del-silencio/') ||
        page.includes('/relatos/la-noche-que-aprendio-a-hablar/')
      )
    })
  ]
});
