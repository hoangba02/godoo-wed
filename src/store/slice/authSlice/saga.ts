import { authActions } from '.';
import { call, put, takeLatest } from 'redux-saga/effects';
import { apiPost } from 'utils/http/requests';
import History from 'app/components/History/History';
function* handleLogin(action) {
  const { username, password } = action.payload;
  const data = { username, password };
  const header = { 'content-type': 'appication/json' };
  const response = yield call(apiPost, '/v1/login', data, header);
  if (response.error === 0) {
    History.push('/');
  }
}
function* handleLogout(action) {}

export function* authSaga() {
  yield takeLatest(authActions.requestLogin.type, handleLogin);
  yield takeLatest(authActions.requestLogout.type, handleLogout);
}
