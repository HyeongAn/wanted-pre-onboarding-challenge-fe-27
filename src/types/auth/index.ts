export interface IAuth {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}
