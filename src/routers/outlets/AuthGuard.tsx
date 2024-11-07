import ROUTERS_CONFIG from '@/constants/router'
import useAuth from '@/hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

const AuthGuard = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Outlet />
  } else {
    return <Navigate to={ROUTERS_CONFIG.LOGIN} />
  }
}

export default AuthGuard
