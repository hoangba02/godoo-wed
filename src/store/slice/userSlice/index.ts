import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { userSaga } from './saga';
import { UserState } from './type';

export const initialState: UserState = {
  id: -1,
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
  picture: '',
  data_of_birth: '',
  zodiac: '',
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
      // Account user
      state.login = action.payload.login;
      state.username = action.payload.username;
      state.password = action.payload.password;
      // localStorage.setItem('user', JSON.stringify(state));
      // localStorage.setItem('token', JSON.stringify(action.payload.token));
    },
    loginFail(state: UserState, action: PayloadAction<UserState>) {
      state.loading = false;
      state.login = action.payload.login;
    },
    requestRegister(state: UserState, action: PayloadAction<UserState>) {
      state.loading = true;
    },
    registerSuccess(state: UserState, action: PayloadAction<UserState>) {
      //Account
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.loading = false;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.createTime = action.payload.createTime;
      state.language = action.payload.language;
      // Profile
      state.nickname = action.payload.nickname;
      state.picture = action.payload.picture;
      state.data_of_birth = action.payload.data_of_birth;
      state.introduction = action.payload.introduction;
      state.relationship = action.payload.relationship;
      // localStorage.setItem('user', JSON.stringify(state));
      // localStorage.setItem('token', JSON.stringify(action.payload.token));
    },
    registerFail(state: UserState) {
      state.loading = false;
    },
    requestLanguage(state: UserState, action: PayloadAction<UserState>) {
      state.language = action.payload.language;
    },
    logoutSuccess(state: UserState) {
      state.id = 0;
      state.token = '';
      state.username = '';
      state.password = '';
      state.isLogin = false;
    },
  },
});

export const { actions: usersActions, reducer } = slice;
export const UserSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: userSaga });
  return { actions: slice.actions };
};
