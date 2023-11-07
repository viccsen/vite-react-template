/*
 * @Author: Viccsen
 * @Date: 2023-08-23 10:47:49
 * @LastEditTime: 2023-09-12 16:38:04
 * @LastEditors: Viccsen
 * @Description:
 */
import { notification } from 'antd'
import { ofetch } from 'ofetch'

import authStore from '@/stores/auth'
import loadingStore from '@/stores/loading'
import { removeUndefinedProps } from '@/utils/helper'

const Headers: { [key: string]: string } = {}

export type Result<T> = {
  status: number
  message?: string
  msg?: string
  code?: number
  result: T
  traceId?: string
  data?: T
}

type RequestOptions<T> = {
  dataType?: 'json' | 'form'
  data?: T
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
}

export async function request<P, T>(
  url: string,
  options?: RequestOptions<P>,
): Promise<Result<T>> {
  const { dataType, data, method }: any = options || {}
  const delay = 200
  let requestTimer: any = null
  const _options: any = {
    method,
    headers: Headers,
    retry: 1,
    retryDelay: 500,
    async onRequest({ request, options }: any) {
      // Log request
      console.log('[fetch request]', request, options)
      requestTimer = setTimeout(() => loadingStore.set.loading(true), delay)
    },
    async onRequestError() {
      // Log error
      clearTimeout(requestTimer)
      loadingStore.set.loading(false)
    },
    async onResponse({ request, response, options }: any) {
      const { status, msg, message } = response._data || {}

      clearTimeout(requestTimer)
      loadingStore.set.loading(false)

      if (response.status >= 200 && response.status < 300) {
        if (status !== 1) {
          notification.error({ message: message || msg || '数据加载错误！' })
          throw new Error(message || msg || '数据加载错误！')
        }
      }
      // Log response
      console.log(
        '[fetch response]',
        request,
        options,
        response,
        response.status,
        response._data,
      )
    },
    async onResponseError({ response }: any) {
      // Log error
      if (response.status === 401) {
        console.warn('用户未授权(401)', response._data?.msg)
      }
      if (response.status === 403) {
        console.warn('用户无访问权限(403)', response._data?.msg)
      }
    },
  }

  if (authStore) {
    _options.headers['Authorization'] = authStore.get.authenticate().token
  }

  if (data) {
    if (dataType === 'form' && data instanceof FormData) {
      _options.body = data
    } else {
      removeUndefinedProps(data)
      if (dataType === 'json') {
        _options.body = data
        _options.headers['content-type'] = 'application/json; charset=utf-8'
      } else {
        if (['GET', 'DELETE'].includes(method)) {
          _options.query = data
        } else {
          _options.headers['content-type'] = 'application/x-www-form-urlencoded'
          _options.body = new URLSearchParams(data).toString()
        }
      }
    }
  }

  const res = await ofetch(url, _options)

  return Promise.resolve(res)
}

request.getHeader = function getHeader(key: string) {
  return Headers[key]
}

request.clearHeader = function () {
  Object.keys(Headers).forEach((key) => delete Headers[key])
}

request.setHeader = function (key: string, value: string) {
  Headers[key] = value
}

request.get = <P, T>(
  url: string,
  options?: RequestOptions<P>,
): Promise<Result<T>> => {
  const opt = options ?? {}
  opt.method = 'GET'
  return request(url, opt)
}

request.post = <P, T>(
  url: string,
  options?: RequestOptions<P>,
): Promise<Result<T>> => {
  const opt = options ?? {}
  opt.method = 'POST'
  return request(url, opt)
}

request.put = <P, T>(
  url: string,
  options?: RequestOptions<P>,
): Promise<Result<T>> => {
  const opt = options ?? {}
  opt.method = 'PUT'
  return request(url, opt)
}

request.patch = <P, T>(
  url: string,
  options?: RequestOptions<P>,
): Promise<Result<T>> => {
  const opt = options ?? {}
  opt.method = 'PATCH'
  return request(url, opt)
}

request.del = <P, T>(
  url: string,
  options?: RequestOptions<P>,
): Promise<Result<T>> => {
  const opt = options ?? {}
  opt.method = 'DELETE'
  return request(url, opt)
}
