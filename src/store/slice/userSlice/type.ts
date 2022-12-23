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
  // Profile
  profile?: {
    nickname?: string;
    picture?: string[];
    data_of_birth?: Date;
    zodiac?: string[];
    gender?: number[];
    introduction?: string;
    relationship?: number;
  };
}
