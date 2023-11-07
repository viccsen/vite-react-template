/*
 * @Author: Viccsen
 * @Date: 2023-09-07 14:34:36
 * @LastEditTime: 2023-11-07 18:05:28
 * @LastEditors: Viccsen
 * @Description:
 */
import Storage from '../utils/storage'

export const localCache: Storage = new Storage(
  'vite-react',
  window.localStorage,
)
export const sessionCache: Storage = new Storage(
  'vite-react',
  window.sessionStorage,
)

export const MINUTES = 60000
export const HOURS = 60 * MINUTES
export const DAY = 24 * HOURS
export const WEEK = 7 * DAY
export const MONTH = 30 * DAY
