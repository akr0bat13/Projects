/// <reference types="vitest/config" />
// Plugins
import Components from 'unplugin-vue-components/vite';
import Vue from '@vitejs/plugin-vue';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import Fonts from 'unplugin-fonts/vite';

// Utilities
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [Vue({
    template: {
      transformAssetUrls
    }
  }),
  // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
  Vuetify(), Components(), Fonts({
    fontsource: {
      families: [{
        name: 'Roboto',
        weights: [100, 300, 400, 500, 700, 900],
        styles: ['normal', 'italic']
      }]
    }
  })],
  optimizeDeps: {
    exclude: ['vuetify']
  },
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  },
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern-compiler'
      },
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});