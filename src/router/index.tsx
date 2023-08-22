/*
 * @Author: Viccsen
 * @Date: 2023-08-16 11:18:15
 * @LastEditTime: 2023-08-22 16:41:41
 * @LastEditors: Viccsen
 * @Description:
 */
import { Suspense } from 'react'
import type { RouteObject } from 'react-router-dom'

const ProtectedRoute = lazy(() => import('@/pages/layout'))
const Home = lazy(() => import('@/pages/index'))
const About = lazy(() => import('@/pages/about'))
const Login = lazy(() => import('@/pages/login'))
const NotFound = lazy(() => import('@/pages/not-found'))

console.log('ProtectedRoute', ProtectedRoute)
const routes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]

function Routes() {
  return useRoutes([...routes])
}

export default function Router() {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <Routes />
    </Suspense>
  )
}
