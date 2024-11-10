import { USER_API } from '@/constants/api/user'
import api from '../service'
import { LoginRequest, SignUpRequest } from '@/types/user'

class UserService {
  async login(params: LoginRequest): Promise<{ message: string; token: string }> {
    const response = await api.post(USER_API.LOGIN, params)
    return response.data
  }

  async signUp(params: SignUpRequest): Promise<{ message: string; token: string }> {
    const response = await api.post(USER_API.SIGNUP, params)
    return response.data
  }
}

export const userService = new UserService()
