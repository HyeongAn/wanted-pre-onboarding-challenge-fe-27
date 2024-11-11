import { createBrowserRouter } from 'react-router-dom'
import ROUTERS_CONFIG from '../constants/router'
import IndexGuard from './outlets/IndexGuard'
import AuthGuard from './outlets/AuthGuard'
import GuestGuard from './outlets/GuestGuard'
import Todo from '@/page/Todo'
import Login from '@/page/Login'
import Signup from '@/page/Signup'
import TodoDetail from '@/page/TodoDetail'
import { todoLoader, todoDetailLoader } from '@/loaders'
import queryClient from '@/lib/queryClient'

const router = createBrowserRouter([
  {
    path: ROUTERS_CONFIG.HOME,
    element: <IndexGuard />,
  },
  {
    path: ROUTERS_CONFIG.HOME,
    element: <AuthGuard />,
    children: [
      {
        path: ROUTERS_CONFIG.TODO,
        element: <Todo />,
        loader: todoLoader(queryClient),
      },
      {
        path: ROUTERS_CONFIG.TODO_DETAIL(':todoId'),
        element: <TodoDetail />,
        loader: todoDetailLoader(queryClient),
      },
    ],
  },
  {
    path: ROUTERS_CONFIG.HOME,
    element: <GuestGuard />,
    children: [
      {
        path: ROUTERS_CONFIG.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTERS_CONFIG.SIGNUP,
        element: <Signup />,
      },
    ],
  },
])

export default router
