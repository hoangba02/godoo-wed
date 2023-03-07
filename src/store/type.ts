export interface User {
  username?: string | number;
  password?: string | number;
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
}
