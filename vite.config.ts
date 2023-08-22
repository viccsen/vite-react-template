/*
 * @Author: Viccsen
 * @Date: 2023-08-12 15:05:35
 * @LastEditTime: 2023-08-18 11:10:11
 * @LastEditors: Viccsen
 * @Description:
 */
import { join } from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'

import { AntDesignResolver } from './build/resolvers/antd'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    eslintPlugin(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: ['react', 'react-router-dom'],
      dts: './src/auto-imports.d.ts',
      dirs: ['src/store'],
      eslintrc: {
        enabled: true, // Default `false`
      },
      resolvers: [
        AntDesignResolver({
          resolveIcons: true,
        }),
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  build: {
    dynamicImportVarsOptions: {
      warnOnError: true,
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://smart.yunzhiyuan100.com.cn',
        changeOrigin: true,
      },
    },
  },
})
