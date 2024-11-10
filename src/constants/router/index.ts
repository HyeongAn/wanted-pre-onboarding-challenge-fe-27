const ROUTERS_CONFIG = {
  HOME: '/',
  LOGIN: '/auth',
  SIGNUP: '/auth/signup',
  TODO: '/todo',
  TODO_DETAIL: (id: string) => `/todo/:${id}`,
}

export default ROUTERS_CONFIG
