import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, LoginState, ProfileState, User } from 'store/type';

export const initialState: AuthState = {
  userId: -1,
  authToken: '',
  telegram: '',
  messenger: '',
  isLogin: false,
  isMobile: false,
  isLoading: false,
  isError: false,
  register: { error: -1, message: '' },
  currentUser: { username: '', password: '' },
  login: { error: -1, message: '', remember: false },
  profile: {
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
    requestLogin(state, action: PayloadAction<LoginState | User>) {
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<AuthState>) {
      // state.isLoading = false;
      state.userId = action.payload.userId;
      state.authToken = action.payload.authToken;
      state.currentUser = action.payload.currentUser;
      state.login = action.payload.login;
    },
    loginFailed(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
      state.login = action.payload.login;
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

    // Logout
    requestLogout(state, action: PayloadAction<AuthState | LoginState | User>) {
      state.isLoading = true;
    },
    logoutSuccess(state, action: PayloadAction<AuthState>) {
      return {
        ...initialState,
        currentUser: action.payload.currentUser,
        login: action.payload.login,
        isError: action.payload.isError,
      };
    },
    // Lỗi xác thực ngưởi dùng
    setAuthentication() {
      return initialState;
    },
    // Profile
    requestGetProfile(
      state,
      action: PayloadAction<AuthState | User | LoginState>,
    ) {
      state.isLoading = true;
    },
    getProfile(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
      state.profile = action.payload.profile;
    },
    requestUpdateProfile(state, action: PayloadAction<AuthState>) {
      state.isLoading = true;
    },
    updateProfile(state, action: PayloadAction<AuthState>) {
      console.log(action);
      state.isLoading = false;
      state.profile = action.payload.profile;
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
      state.isError = action.payload.isError;
    },
    // Đặt lại giá trị mặc định
    resetRegister(state) {
      state.isLoading = false;
      state.register = { error: -1, message: '' };
    },
    resetLogin(state) {
      state.isLoading = false;
      state.login = {
        error: -1,
        message: '',
        remember: true,
      };
    },
  },
});

export const { actions: authActions, reducer } = authSlice;
export const AuthSlice = () => {
  return { authActions: authSlice.actions };
};
export const authReducer = authSlice.reducer;
