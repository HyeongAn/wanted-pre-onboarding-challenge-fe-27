import { AUTH_CONFIG } from '@/constants/auth'
import { Service } from '@/services/service'
import { authState } from '@/stores/atoms'
import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState)

  const login = useCallback(
    (accessToken: string) => {
      Service.setAccessToken(accessToken)
      setAuth((prev) => ({ ...prev, isAuthenticated: true, accessToken }))
      localStorage.setItem(AUTH_CONFIG.LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken)
    },
    [setAuth],
  )

  const logout = useCallback(() => {
    Service.setAccessToken()
    setAuth((prev) => ({ ...prev, isAuthenticated: false, accessToken: null }))
    localStorage.removeItem(AUTH_CONFIG.LOCAL_STORAGE_KEYS.ACCESS_TOKEN)
  }, [setAuth])

  return { ...auth, login, logout }
}

export default useAuth
