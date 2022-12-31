import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { UserState } from '../type';
import { userSaga } from './saga';

export const initialState: UserState = {
  // Account
  id: -1,
  token: '',
  language: 'vi',
  isLogin: false,
  loading: false,
  telegram_fullname: '',
  messenger_fullname: '',
  username: '',
  password: '',
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
      state.username = '';
      state.password = '';
      state.isLogin = false;
    },
    setLanguage(state: UserState, action: PayloadAction<UserState>) {
      state.language = action.payload.language;
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

      console.log('sao k vào');
    },
  },
});

export const { actions: usersActions, reducer } = slice;
export const UserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: userSaga });
  return { actions: slice.actions };
};
