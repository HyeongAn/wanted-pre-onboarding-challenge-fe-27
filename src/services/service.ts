import { AUTH_CONFIG } from '@/constants/auth'
import axios, { AxiosInstance } from 'axios'

const baseURL = import.meta.env.VITE_BASE_API_URL

export class Service {
  static instance: AxiosInstance | undefined
  private static accessToken?: string

  // 싱글톤 적용
  static getInstance(): AxiosInstance {
    if (!this.instance) {
      this.instance = axios.create({
        baseURL,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    this.instance.interceptors.request.use((config) => {
      const token = this.getAccessToken()
      if (token) {
        config.headers.Authorization = `Bearer ${this.accessToken}`
      }
      return config
    })
    return this.instance
  }

  static setAccessToken(token?: string) {
    this.accessToken = token
  }

  static getAccessToken() {
    if (!this.accessToken) {
      this.accessToken = localStorage.getItem(AUTH_CONFIG.LOCAL_STORAGE_KEYS.ACCESS_TOKEN) ?? undefined
    }
    return this.accessToken
  }
}

const api = Service.getInstance()
export default api
