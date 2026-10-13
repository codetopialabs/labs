import { readFileSync } from 'node:fs'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig, type Plugin } from 'vite'

const site = 'https://labs.codetopia.org'

// Writes sitemap.xml at build time from the fixed pages plus every post
// slug in src/data/posts.ts, so new posts are listed automatically.
function sitemap(): Plugin {
  return {
    name: 'sitemap',
    apply: 'build',
    generateBundle() {
      const posts = readFileSync('src/data/posts.ts', 'utf8')
      const slugs = [...posts.matchAll(/slug: '([^']+)'/g)].map((m) => m[1])
      const paths = ['/', '/about', '/projects', '/blog', ...slugs.map((s) => `/blog/${s}`)]
      const urls = paths.map((p) => `  <url><loc>${site}${p}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    sitemap(),
  ],
})
