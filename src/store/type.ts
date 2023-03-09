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
export interface ProfileState {
  nickname?: string;
  picture?: string[];
  date_of_birth?: string;
  zodiac?: string;
  gender?: string[];
  introduction?: string;
  additional_information?: any;
  schedule_id?: number[];
}
export interface AuthState {
  userId?: number;
  authToken?: string;
  telegram?: string;
  messenger?: string;
  isLogin?: boolean;
  isLoading?: boolean;
  isMobile?: boolean;
  login?: LoginState;
  register?: RegisterState;
  currentUser?: User;
  currentProfile?: ProfileState;
  unKnowError?: number;
}
