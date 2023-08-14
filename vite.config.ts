/*
 * @Author: Viccsen
 * @Date: 2023-08-12 15:05:35
 * @LastEditTime: 2023-08-14 11:35:12
 * @LastEditors: Viccsen
 * @Description:
 */
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
