import { atom } from 'recoil'
import { IAuth } from '@/types'
import { AUTH_CONFIG } from '@/constants'

export const authState = atom<IAuth>({
  key: 'authState',
  default: {
    accessToken: localStorage.getItem(AUTH_CONFIG.LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
    isAuthenticated: Boolean(localStorage.getItem(AUTH_CONFIG.LOCAL_STORAGE_KEYS.ACCESS_TOKEN)),
  },
})
