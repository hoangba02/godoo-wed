import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { userSaga } from './saga';
import { UserState } from './type';

export const initialState: UserState = {
  id: -1,
  telegram_fullname: '',
  messenger_fullname: '',
  token: '',
  isLogin: false,
  loading: false,
  register: {
    error: -1,
    message: '',
  },
  login: {
    error: -1,
    message: '',
    savePassword: false,
  },
  nickname: '',
  password: '',
  picture: [],
  data_of_birth: new Date(),
  zodiac: [],
  gender: [],
  introduction: '',
  relationship: 0,
  language: 'vi',
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    requestLogin(state: UserState, action: PayloadAction<UserState>) {
      state.loading = true;
      state.login = action.payload.login;
    },
    loginSuccess(state: UserState, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isLogin = true;
      state.loading = false;

      state.login = action.payload.login;
      state.username = action.payload.username;
      state.password = action.payload.password;
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
      state.createTime = action.payload.createTime;
      state.language = action.payload.language;
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
    requestLanguage(state: UserState, action: PayloadAction<UserState>) {
      state.language = action.payload.language;
    },
    // Lấy user id và tên tele hoặc tên mess khi quên mật khẩu
    getUserForgotPass(state: UserState, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.telegram_fullname = action.payload.telegram_fullname;
      state.messenger_fullname = action.payload.messenger_fullname;
      state.token = action.payload.token;
    },

    // Create Information Profile User

    createProfile(state: UserState, action: PayloadAction<UserState>) {
      state.nickname = action.payload.nickname;
      state.picture = action.payload.picture;
      state.data_of_birth = action.payload.data_of_birth;
      state.zodiac = action.payload.zodiac;
      state.introduction = action.payload.introduction;
      state.relationship = action.payload.relationship;
    },
  },
});

export const { actions: usersActions, reducer } = slice;
export const UserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: userSaga });
  return { actions: slice.actions };
};
