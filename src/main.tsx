/*
 * @Author: Viccsen
 * @Date: 2023-08-12 15:05:35
 * @LastEditTime: 2023-08-21 10:33:17
 * @LastEditors: Viccsen
 * @Description:
 */
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'dayjs/locale/zh-cn'
import './global.less'

import BaseRouter from './router'

import 'antd/dist/reset.css'

dayjs.locale('zh-cn')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AntConfigProvider locale={zhCN}>
      <BrowserRouter>
        <BaseRouter />
      </BrowserRouter>
    </AntConfigProvider>
  </React.StrictMode>,
)
