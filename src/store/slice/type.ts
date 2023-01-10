export interface UserState {
  //Account
  id?: number;
  user_2?: any;
  token?: string;
  language?: 'vi' | 'en';
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
  profile?: {
    nickname?: string;
    picture?: string[];
    date_of_birth?: string;
    zodiac?: string;
    gender?: string[];
    introduction?: string;
    relationship?: number;
  };

  matchList?: [];
  youLikedList?: any[];
  likedYouList?: [];
  chatList?: [];
}

export interface CounterState {
  value: number;
}
