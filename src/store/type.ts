export interface User {
  username?: string | number;
  password?: string | number;
}
export interface AuthState {
  userId?: number;
  authToken?: string;
  currentUser?: User;
  isLogin?: boolean;
  isLoading?: boolean;
}
