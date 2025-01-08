import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import ViteDts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig(({ mode })=>{
  return {

    // base:'https://example.com',
    plugins: [
      vue(),
      ViteDts({ 
        // Enable `insertTypes` option if you want to automatically insert types into the library's entry file
        insertTypesEntry: true 
      }),
      viteStaticCopy({
        targets: [
          {
            src: 'src/assets/*',
            dest: 'src/assets', // Copy to dist/assets
          },
        ],
      }),
      // 자동 import Element components
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    esbuild: {
      // 프로덕션 환경에서만 console과 debugger 제거
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
    build: {
      lib: {
        entry: './src/index.ts',
        name: 'JajangUI',
        fileName: (format) => `jajang-ui.${format}.js`,
      },
      rollupOptions: {
        // external: [
        //   'vue',                // Vue is a common external library
        //   'element-plus',       // Element Plus should not be bundled
        //   'vue-konva',          // vue-konva should not be bundled
        //   '@element-plus/icons-vue', // Element Plus icon package
        //   '@toast-ui/editor',   // If you use Toast UI editor
        //   'echarts',            // If you use ECharts
        //   'pinia',              // Pinia should not be bundled
        //   'tui-grid',           // TUI Grid should not be bundled
        //   'xlsx',               // If you are using xlsx in the library
        // ],
        output: {
          // This ensures named exports are handled properly
          exports: 'named',  // 'named' for named exports (avoids the default warning)
          // Ensure it supports ESM format
          format: 'es',
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  
    css: {
      preprocessorOptions: {
        // to avoid legacy JS Api Deprecation Warning
        scss: {
          api: 'modern-compiler', // or "modern", "legacy"
        },
      },
    },
  }
})
