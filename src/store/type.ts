export interface User {
  username: string | number;
  password: string | number;
}
export interface LoginState {
  error: number;
  message: string;
  remember: boolean;
}
export interface RegisterState {
  error: number;
  message: string;
}
export interface AuthState {
  userId?: number;
  authToken?: string;
  currentUser?: User;
  telegram?: string;
  messenger?: string;
  isLogin?: boolean;
  isLoading?: boolean;
  isMobile?: boolean;
  login?: LoginState;
  register?: RegisterState;
}
