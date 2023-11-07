/*
 * @Author: Viccsen
 * @Date: 2023-08-23 16:53:25
 * @LastEditTime: 2023-10-16 11:47:04
 * @LastEditors: Viccsen
 * @Description:
 */
import { request } from '@/utils/request'

export type LoginProps = {
  mobile: number
  password: number
  code: number
}

export type AuthResultProps = {
  token?: string
  username?: string
  email?: string
  name?: string
  orgId?: string
}

export const login = async ({ mobile, password, code }: LoginProps) =>
  request.post<
    { mobile: number; password?: number; code?: number },
    AuthResultProps
  >('/api/quick/custom/1.0/user/login', { data: { mobile, code, password } })

export type SendCodeProps = {
  mobile: number
}

export type RegisterProps = AuthResultProps & LoginProps

export const sendCode = async ({ mobile }: SendCodeProps) =>
  request.get<{ mobile: number }, object>('/api/quick/1.0/user/login', {
    data: { mobile },
  })

export const register = async ({
  mobile,
  code,
  password,
  name,
  email,
}: RegisterProps) =>
  request.post<RegisterProps, object>('/api/quick/custom/1.0/user/register', {
    data: { mobile, code, password, name, email },
  })
