import { readFileSync } from 'node:fs'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig, type Plugin } from 'vite'

const site = 'https://labs.codetopia.org'

// Writes sitemap.xml at build time from the fixed pages plus every post
// slug, so new posts are listed automatically.
function sitemap(): Plugin {
  return {
    name: 'sitemap',
    apply: 'build',
    generateBundle() {
      const slugsIn = (file: string) =>
        [...readFileSync(file, 'utf8').matchAll(/slug: '([^']+)'/g)].map((m) => m[1])
      const slugs = slugsIn('src/data/posts.ts')
      const blog = slugs.length > 0 ? ['/blog', ...slugs.map((s) => `/blog/${s}`)] : []
      const paths = ['/', '/about', '/projects', ...blog]
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
