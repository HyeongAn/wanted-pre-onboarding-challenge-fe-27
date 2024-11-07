import { USER_API } from '@/constants/api/user'
import { Service } from '../service'
import { LoginRequest, SignUpRequest } from '@/types/user'

export class UserService extends Service {
  constructor(accessToken?: string) {
    super(accessToken)
  }

  async login(params: LoginRequest): Promise<{ message: string; token: string }> {
    const response = await this.api.post(USER_API.LOGIN, params)
    return response.data
  }

  async signUp(params: SignUpRequest): Promise<{ message: string; token: string }> {
    const response = await this.api.post(USER_API.SIGNUP, params)
    return response.data
  }
}
