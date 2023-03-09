import { useEffect } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from 'store/type';
import { authSaga } from './saga';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { persistor } from 'store/configureStore';

export const initialState: AuthState = {
  userId: -1,
  authToken: '',
  telegram: '',
  messenger: '',
  isLogin: false,
  isMobile: false,
  isLoading: false,
  unKnowError: -1,
  register: { error: -1, message: '' },
  currentUser: { username: '', password: '' },
  login: { error: -1, message: '', remember: false },
  currentProfile: {
    nickname: '',
    picture: [],
    date_of_birth: '',
    zodiac: '',
    gender: [],
    introduction: '',
    additional_information: {},
    schedule_id: [],
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login
    requestLogin(state, action: PayloadAction<User>) {
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
      state.userId = action.payload.userId;
      state.authToken = action.payload.authToken;
      state.currentUser = action.payload.currentUser;
      state.login = action.payload.login;
    },
    loginFailed(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
    },
    // Register
    requestRegister(state, action: PayloadAction<User>) {
      state.isLoading = true;
    },
    registerSuccess(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
      state.userId = action.payload.userId;
      state.authToken = action.payload.authToken;
      state.currentUser = action.payload.currentUser;
      state.register = action.payload.register;
    },
    registerFailed(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
      state.register = action.payload.register;
    },
    resetRegister(state) {
      state.isLoading = false;
      if (state.register != null) {
        state.register.error = -1;
        state.register.message = '';
      }
    },
    // Logout
    requestLogout(state, action: PayloadAction<AuthState>) {
      state.isLoading = true;
    },
    logoutSuccess(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
      state.userId = -1;
      state.authToken = '';
      state.currentUser = undefined;
    },
    logoutFailed(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
    },
    // Profile
    requestProfile(state, action: PayloadAction<AuthState>) {
      state.isLoading = true;
    },
    updateProfile(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
      state.currentProfile = action.payload.currentProfile;
    },
    // Nhận thiết bị truy cập
    setAccessDevice(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload;
    },
    setNameSocialNetwork(state, action: PayloadAction<AuthState>) {
      state.userId = action.payload.userId;
      state.telegram = action.payload.telegram;
      state.messenger = action.payload.messenger;
    },
    setAuthenticationUser(state, action: PayloadAction<AuthState>) {
      state.userId = action.payload.userId;
      state.authToken = action.payload.authToken;
    },
    // Lỗi hệ thống (system error)
    setSystemError(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
      state.unKnowError = action.payload.unKnowError;
    },
    // Đặt lại giá trị mặc định
  },
});

export const { actions: authActions, reducer } = authSlice;
export const AuthSlice = () => {
  useInjectReducer({ key: authSlice.name, reducer: authSlice.reducer });
  useInjectSaga({ key: authSlice.name, saga: authSaga });
  useEffect(() => {
    persistor.persist();
  }, []);
  return { authActions: authSlice.actions };
};
export const authReducer = authSlice.reducer;
