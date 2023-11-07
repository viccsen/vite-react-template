/*
 * @Author: Viccsen
 * @Date: 2023-08-22 15:41:35
 * @LastEditTime: 2023-10-16 10:57:33
 * @LastEditors: Viccsen
 * @Description:
 */
import { createJSONStorage } from 'zustand/middleware'

import {
  AuthResultProps,
  login,
  LoginProps,
  register,
  RegisterProps,
  sendCode,
} from '@/services/auth'
import { Authenticate as namespace } from '@/utils/namespace'
import { createStore } from '@udecode/zustood'

type State = {
  authenticate: AuthResultProps
}

const authStore = createStore(namespace)<State>(
  {
    authenticate: {},
    // middlewares: ['immer', 'devtools', 'persist'],
  },
  {
    persist: {
      enabled: true,
      name: '布谷智慧校园 - bugutech',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ authenticate: state.authenticate }),
    },
  },
).extendActions((set) => ({
  login: async (payload: LoginProps) => {
    const res = await login(payload)
    set.authenticate(res.result)
    console.log('res', res)
  },
  logout: async () => {
    set.authenticate({})
  },
  sendCode,
  register: async (payload: RegisterProps) => {
    const res = await register(payload)
    set.authenticate(res.result)
    console.log('res', res)
  },
  // other actions
}))

export default authStore
