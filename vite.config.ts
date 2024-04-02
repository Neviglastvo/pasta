import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

const BACKEND_DOMAIN= process.env.BACKEND_DOMAIN || 'http://localhost:3001';
const CLIENT_PORT= parseInt(process.env.CLIENT_PORT, 10 ) || 3000;

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
  server: {port: CLIENT_PORT, proxy: { "/api": BACKEND_DOMAIN } }
})
