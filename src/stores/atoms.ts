import { AUTH_CONFIG } from '@/constants/auth'
import { IAuth } from '@/types/auth'
import { atom } from 'recoil'

export const authState = atom<IAuth>({
  key: 'authState',
  default: {
    accessToken: localStorage.getItem(AUTH_CONFIG.LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
    isAuthenticated: Boolean(localStorage.getItem(AUTH_CONFIG.LOCAL_STORAGE_KEYS.ACCESS_TOKEN)),
  },
})
