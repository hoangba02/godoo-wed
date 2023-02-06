import { PayloadAction } from '@reduxjs/toolkit';
import { persistor } from 'index';
import { useEffect } from 'react';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { UserState } from '../type';
import { userSaga } from './saga';

export const initialState: UserState = {
  // Account
  id: -1,
  user_2: {},
  token: '',
  isLogin: false,
  loading: false,
  telegram_fullname: '',
  messenger_fullname: '',
  username: '',
  password: '',
  language: 'vi',
  device: false,
  // Status
  register: {
    error: -1,
    message: '',
  },
  login: {
    error: -1,
    message: '',
    savePassword: false,
  },
  profile: {
    nickname: '',
    picture: [],
    date_of_birth: '',
    zodiac: '',
    gender: [],
    introduction: '',
    relationship: -1,
  },
  matchList: [],
  youLikedList: [],
  likedYouList: [],
  chatList: [],
  comingList: [],
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    requestLogin(state: UserState, action: PayloadAction<UserState>) {
      state.loading = true;
      state.isLogin = false;
      state.login = action.payload.login;
    },
    loginSuccess(state: UserState, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isLogin = action.payload.isLogin;
      state.loading = false;
      state.login = action.payload.login;
      state.username = action.payload.username;
      state.matchList = [];
      state.youLikedList = [];
      state.likedYouList = [];
      state.chatList = [];
      state.comingList = [];
    },
    loginFail(state: UserState, action: PayloadAction<UserState>) {
      state.loading = false;
      state.login = action.payload.login;
    },
    requestRegister(state: UserState, action: PayloadAction<UserState>) {
      state.loading = true;
    },
    registerSuccess(state: UserState, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.loading = false;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.language = action.payload.language;
      state.register = action.payload.register;
    },
    registerFail(state: UserState, action: PayloadAction<UserState>) {
      state.loading = false;
      state.register = action.payload.register;
    },

    logoutSuccess(state: UserState) {
      state.id = -1;
      state.token = '';
      state.ws = {};
      state.username = '';
      state.isLogin = false;
      state.telegram_fullname = '';
      state.messenger_fullname = '';
      state.loading = false;
      state.register = {
        error: -1,
        message: '',
      };
      state.login = {
        error: -1,
        message: '',
        savePassword: false,
      };
      state.profile = {
        nickname: '',
        picture: [],
        date_of_birth: '',
        zodiac: '',
        gender: [],
        introduction: '',
        relationship: -1,
      };
    },
    setLanguage(state: UserState, action: PayloadAction<'vi' | 'en'>) {
      state.language = action.payload;
    },
    // Lấy user id và tên tele hoặc tên mess khi quên mật khẩu
    getUserForgotPass(state: UserState, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.telegram_fullname = action.payload.telegram_fullname;
      state.messenger_fullname = action.payload.messenger_fullname;
      state.token = action.payload.token;
    },
    requestProfile(state: UserState, action: PayloadAction<UserState>) {
      state.loading = true;
      state.isLogin = action.payload.isLogin;
    },
    // Create Information Profile User
    createProfile(state: UserState, action: PayloadAction<UserState>) {
      state.profile = action.payload.profile;
      state.loading = false;
    },
    requestLikeAction(state: UserState, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.user_2 = action.payload.user_2;
    },
    // Manager lists Friend of User
    getYouLikedList(state: UserState, action: PayloadAction<[]>) {
      state.youLikedList = [...action.payload];
    },
    updateYouLikedList(state: UserState, action: PayloadAction<UserState>) {
      state.youLikedList?.unshift(action.payload);
    },

    getLikedYouList(state: UserState, action: PayloadAction<[]>) {
      state.likedYouList = [...action.payload];
    },
    updateLikedYouList(state: UserState, action: PayloadAction<UserState>) {
      console.log(action.payload);
      let newList = state.likedYouList?.filter(
        value => value.userId !== action.payload,
      );
      state.likedYouList = newList;
    },

    getMatchList(state: UserState, action: PayloadAction<[]>) {
      state.matchList = [...action.payload];
    },
    updateMatchList(state: UserState, action: PayloadAction<UserState>) {
      state.matchList?.unshift(action.payload);
    },

    getComingList(state: UserState, action: PayloadAction<[]>) {
      state.comingList = [...action.payload];
    },
    updateComingList(state: UserState, action: PayloadAction<any>) {
      const newComing = state.comingList?.find(
        coming => coming.date === action.payload.date,
      );
      if (!newComing) {
        state.comingList?.push(action.payload);
      } else {
        // console.log([...action.payload.list]);
        state.comingList?.map(coming => {
          if (coming.date === action.payload.date) {
            coming.list.push(action.payload.list[0]);
          }
        });
      }
    },

    // Set device
    setDevice(state: UserState, action: PayloadAction<UserState>) {
      state.device = action.payload.device;
    },
  },
});
export const { actions: usersActions, reducer } = slice;
export const UserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: userSaga });
  useEffect(() => {
    persistor.persist();
  }, []);
  return { actions: slice.actions };
};
