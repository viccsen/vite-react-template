/*
 * @Author: Viccsen
 * @Date: 2023-08-21 17:46:41
 * @LastEditTime: 2023-08-22 15:46:26
 * @LastEditors: Viccsen
 * @Description:
 */
import { mapValuesKey } from '@udecode/zustood'

import authStore from './auth'

export const rootStore = {
  auth: authStore,
}

export const useStore = () => mapValuesKey('use', rootStore)

export const useTrackedStore = () => mapValuesKey('useTracked', rootStore)

export const store = mapValuesKey('get', rootStore)

export const actions = mapValuesKey('set', rootStore)
