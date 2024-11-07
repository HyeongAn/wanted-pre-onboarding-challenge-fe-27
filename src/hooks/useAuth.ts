import { AUTH_CONFIG } from '@/constants'
import { authState } from '@/stores/atoms'
import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState)

  const login = useCallback(
    (accessToken: string) => {
      setAuth((prev) => ({ ...prev, isAuthenticated: true }))
      localStorage.setItem(AUTH_CONFIG.LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken)
    },
    [setAuth],
  )

  const logout = useCallback(() => {
    setAuth((prev) => ({ ...prev, isAuthenticated: false }))
    localStorage.removeItem(AUTH_CONFIG.LOCAL_STORAGE_KEYS.ACCESS_TOKEN)
  }, [setAuth])

  return { ...auth, login, logout }
}

export default useAuth
