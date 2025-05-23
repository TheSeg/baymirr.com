import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
        ]
      },
    },
  },
})
