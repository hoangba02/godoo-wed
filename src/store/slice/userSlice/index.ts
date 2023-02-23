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
    date_of_birth: '',
    gender: [],
    introduction: '',
    nickname: '',
    picture: [],
    schedule_id: [],
    zodiac: '',
  },
  additional_information: {},
  isMatch: false,
  matchList: [],
  isYouLiked: false,
  youLikedList: [],
  isLikedYou: false,
  likedYouList: [],
  chatList: [],
  comingList: [],
  point: {},
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
      state.password = action.payload.password;
      state.isMatch = false;
      state.matchList = [];
      state.isYouLiked = false;
      state.youLikedList = [];
      state.isLikedYou = false;
      state.likedYouList = [];
      state.chatList = [];
      state.comingList = [];
      state.point = {};
      localStorage.setItem(
        'user',
        JSON.stringify({
          id: action.payload.id,
          token: action.payload.token,
        }),
      );
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
    requestLogout(state: UserState, action: PayloadAction<UserState>) {
      state.loading = true;
    },
    logoutFail(state: UserState) {
      state.loading = false;
    },
    logoutSuccess(state: UserState, action: PayloadAction<any>) {
      state.id = -1;
      state.token = '';
      state.username = action.payload.username;
      state.password = action.payload.password;
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
        savePassword: action.payload.login.savePassword,
      };
      state.profile = {};
      state.additional_information = {};
      state.isMatch = false;
      state.matchList = [];
      state.isYouLiked = false;
      state.youLikedList = [];
      state.isLikedYou = false;
      state.likedYouList = [];
      state.chatList = [];
      state.comingList = [];
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
      console.log(action);
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
      state.isYouLiked = true;
    },
    setYouLikedStatus(state: UserState) {
      state.isYouLiked = false;
    },
    getLikedYouList(state: UserState, action: PayloadAction<[]>) {
      state.likedYouList = [...action.payload];
    },
    updateLikedYouList(state: UserState, action: PayloadAction<UserState>) {
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
      state.isMatch = true;
    },
    setMatchStatus(state: UserState) {
      state.isMatch = false;
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
    setPoint(state: UserState, action: PayloadAction<any>) {
      state.point = action.payload;
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
