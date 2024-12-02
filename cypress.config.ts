import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  experimentalCspAllowList: true,
  
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
