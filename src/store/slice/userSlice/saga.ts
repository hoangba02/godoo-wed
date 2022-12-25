import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import { apiPost } from 'utils/http/request';
import { BaseResponse } from 'utils/http/response';
import { usersActions } from '.';

export function* Register(action) {
  const data = {
    username: action.payload.username,
    password: action.payload.password,
  };

  const res: BaseResponse = yield apiPost('/v1/register', data, {
    'content-type': 'appication/json',
  });
  console.log(res);
  if (res.error === 0) {
    yield put(
      usersActions.registerSuccess({
        id: res.data.id,
        token: res.data.token,
        username: res.data.username,
        password: res.data.password,
        register: {
          error: res.error,
          message: res.message,
        },
      }),
    );
  } else {
    yield put(
      usersActions.registerFail({
        register: {
          error: res.error,
          message: res.message,
        },
      }),
    );
  }
  console.log(res);
}
export function* Login(action) {
  const data = {
    username: action.payload.username,
    password: action.payload.password,
  };

  const res: BaseResponse = yield apiPost('/v1/login', data, {
    'content-type': 'appication/json',
  });
  console.log(res.data);
  if (res.error === 0) {
    yield put(
      usersActions.loginSuccess({
        id: res.data.id,
        token: res.data.token,
        username: res.data.username,
        password: res.data.password,
        login: {
          error: res.error,
          message: res.message,
          savePassword: action.payload.savePassword,
        },
      }),
    );
  } else {
    yield put(
      usersActions.loginFail({
        login: {
          error: res.error,
          message: res.message,
        },
      }),
    );
  }
}

export function* userSaga() {
  yield takeLatest(usersActions.requestRegister.type, Register);
  yield takeLatest(usersActions.requestLogin.type, Login);
}
