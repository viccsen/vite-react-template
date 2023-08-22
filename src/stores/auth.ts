/*
 * @Author: Viccsen
 * @Date: 2023-08-22 15:41:35
 * @LastEditTime: 2023-08-22 15:56:20
 * @LastEditors: Viccsen
 * @Description:
 */
import { Authenticate as namespace } from '@/utils/namespace'
import { createStore } from '@udecode/zustood'

const authStore = createStore(namespace)({
  authenticate: {
    token: '',
  },
})

export default authStore
