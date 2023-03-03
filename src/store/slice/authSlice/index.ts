import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from 'store/type';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authSaga } from './saga';

export const initialState: AuthState = {
  userId: -1,
  authToken: '',
  isLogin: false,
  isLoading: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    requestLogin(state, action: PayloadAction<User>) {
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
      state.userId = action.payload.userId;
      state.authToken = action.payload.authToken;
      state.currentUser = action.payload.currentUser;
    },
    loginFailed(state, action: PayloadAction<AuthState>) {
      state.isLoading = false;
    },
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
  },
});

export const { actions: authActions, reducer } = authSlice;
export const AuthSlice = () => {
  useInjectReducer({ key: authSlice.name, reducer: authSlice.reducer });
  useInjectSaga({ key: authSlice.name, saga: authSaga });
  return { authActions: authSlice.actions };
};
export const authReducer = authSlice.reducer;
