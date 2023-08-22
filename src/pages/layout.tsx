/*
 * @Author: Viccsen
 * @Date: 2023-08-16 11:19:01
 * @LastEditTime: 2023-08-22 16:20:06
 * @LastEditors: Viccsen
 * @Description:
 */
import { useTrackedStore } from '@/stores'

const Index = () => {
  const authenticate = useTrackedStore().auth.authenticate()
  const { token } = authenticate || {}
  return token ? <Outlet /> : <Navigate to="/login" />
}

export default Index
