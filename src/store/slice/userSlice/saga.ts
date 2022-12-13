import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { takeLatest, put } from 'redux-saga/effects';
import { usersActions } from '.';

export function* Register(action) {}
export function* Login(action) {
  const res = yield axios.post('https://ttvnapi.com/v1/login', {
    username: action.payload.username,
    password: action.payload.password,
  });

  console.log(res);
  if (res.data.error === 0) {
    yield put(
      usersActions.loginSuccess({
        id: res.data.data.id,
        token: res.data.data.token,
        username: res.data.data.username,
        password: res.data.data.password,
        login: {
          error: res.data.error,
          message: res.data.message,
          savePassword: action.payload.savePassword,
        },
      }),
    );
  } else {
    yield put(
      usersActions.loginFail({
        login: {
          error: res.data.error,
          message: res.data.message,
        },
      }),
    );
  }
  console.log(res);
}

export function* userSaga() {
  yield takeLatest(usersActions.requestRegister.type, Register);
  yield takeLatest(usersActions.requestLogin.type, Login);
}
