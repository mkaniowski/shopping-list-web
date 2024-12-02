import react from '@vitejs/plugin-react'
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [react()],
    test: {
      include: ['**/*.spec.tsx'],
      globals: true,
      environment: 'jsdom',
    },
  }),
)
