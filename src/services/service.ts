import axios, { AxiosInstance } from 'axios'

const baseURL = import.meta.env.VITE_BASE_API_URL

export class Service {
  protected api: AxiosInstance

  constructor(accessToken?: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
}
