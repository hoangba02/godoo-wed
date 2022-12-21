export interface UserState {
  //Account
  id?: number;
  telegram_fullname?: string;
  messenger_fullname?: string;
  token?: string;
  username?: string;
  password?: string | number;
  role?: string;
  status?: string;
  createTime?: string;
  // Status
  isLogin?: boolean;
  loading?: boolean;
  register?: {
    error?: number;
    message?: string;
  };
  login?: {
    error?: number;
    message?: string;
    savePassword?: boolean;
  };

  // Profile
  nickname?: string;
  picture?: string[];
  data_of_birth?: string;
  zodiac?: string[];
  gender?: number[];
  introduction?: string;
  relationship?: number;
  language?: any;
}
