export interface UserState {
  //Account
  id?: number;
  token?: string;
  language?: any;
  isLogin?: boolean;
  loading?: boolean;
  telegram_fullname?: string;
  messenger_fullname?: string;
  username?: string;
  password?: string | number;

  // Status
  register?: {
    error?: number;
    message?: string;
  };
  login?: {
    error?: number;
    message?: string;
    savePassword?: boolean;
  };
}
