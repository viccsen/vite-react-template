/*
 * @Author: Viccsen
 * @Date: 2023-08-24 16:25:56
 * @LastEditTime: 2023-11-07 17:59:20
 * @LastEditors: Viccsen
 * @Description: 全局loading
 */

import { Loading as namespace } from '@/utils/namespace'
import { createStore } from '@udecode/zustood'

type State = {
  loading: boolean
}

const loadingStore = createStore(namespace)<State>({
  loading: false,
})

export default loadingStore
