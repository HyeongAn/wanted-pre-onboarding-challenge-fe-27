import ROUTERS_CONFIG from '@/constants/router'
import useAuth from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'

const IndexGuard = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to={ROUTERS_CONFIG.TODO} />
  } else {
    return <Navigate to={ROUTERS_CONFIG.LOGIN} />
  }
}

export default IndexGuard
