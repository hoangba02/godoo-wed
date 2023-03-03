import { authActions } from '.';
import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { apiPost } from 'utils/http/requests';
function* handleLogin(action) {
  const data = {
    username: action.payload.username,
    password: action.payload.password,
  };
  const header = {
    'content-type': 'appication/json',
  };
  const response = yield call(apiPost, '/v1/login', data, header);
  if (response.error === 0) {
    yield put(push('/'));
  }
}
function* handleLogout(action) {}

export function* authSaga() {
  yield takeLatest(authActions.requestLogin.type, handleLogin);
  yield takeLatest(authActions.requestLogout.type, handleLogout);
}
