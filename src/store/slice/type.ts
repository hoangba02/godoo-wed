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
  device?: boolean;
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
  };
  additional_information?: any;
  schedule_id?: any[];
  isMatch?: boolean;
  matchList?: any[];
  isYouLiked?: boolean;
  youLikedList?: any[];
  isLikedYou?: boolean;
  likedYouList?: any[];
  chatList?: any[];
  comingList?: any[];

  point?: any;
}

export interface CounterState {
  value: number;
}
// Chat
export interface Message {
  id: number;
  user_id: number | string;
  conversation_id: number | string;
  message: string;
  createdAt: Date | string | null;
  updatedAt: Date | string | null;
}
export interface Conversation {
  // users: User[];
  messages: Message[];
  id: number;
  title: string | null;
  description: string | null;
  background: string | null;
  emoji: string | null;
  sending: boolean;
  error: string;
  active: boolean;
  page: number;
  total: number;
  scrollHeight: number | null;
  loaded: boolean;
}

export interface ChatState {
  sendingMessage: boolean;
  sendingConversation: boolean;
  createdConversation: boolean;
  response: {
    error: number;
    message: String;
  };
}
