import eslintPlugin from '@nabla/vite-plugin-eslint'
//@ts-ignore
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react-swc'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import path from 'path'
import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteTsconfigPaths from 'vite-tsconfig-paths'

//@ts-ignore
import { BASE_URL, IMG_OPTIMIZE_OPTIONS } from './src/config'

export default defineConfig({
  base: '',
  // add eslint() to plugins to lint on build
  plugins: [
    viteTsconfigPaths(),
    react(),
    TanStackRouterVite(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ViteImageOptimizer(IMG_OPTIMIZE_OPTIONS as any),
    eslintPlugin(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  // server: {
  //   port: 3000,
  //   proxy: {
  //     '/api': {
  //       target: BASE_URL,
  //       changeOrigin: true,
  //     },
  //   },
  // },
  build: {
    target: browserslistToEsbuild(),
    sourcemap: true,
  },
})
