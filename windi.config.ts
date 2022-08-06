import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  theme: {
    extend: {},
  },

  plugins: [require('windicss/plugin/aspect-ratio')],
})
