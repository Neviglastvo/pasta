import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: true,
            fileName: false,
          },
        ],
        [
          '@babel/plugin-syntax-decorators',
          { decoratorsBeforeExport: true },
        ],
      ],
    },
  }),
  svgr({ include: '**/*.svg?react' })],
  server: {port: 3000, proxy: { "/api": "http://localhost:3001" } }
})
