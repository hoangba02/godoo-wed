import { authActions } from '.';
import { call, put, takeLatest } from 'redux-saga/effects';
import { apiPost } from 'utils/http/requests';
import History from 'app/components/History/History';
function* handleLogin(action) {
  try {
    const { username, password } = action.payload;
    const params = { username, password };
    const header = { 'content-type': 'appication/json' };
    const response = yield call(apiPost, '/v1/login', params, header);
    if (response.error === 0) {
      History.push('/');
    }
  } catch {}
}
function* handleRegister(action) {
  try {
    const { username, password } = action.payload;
    const params = { username, password };
    const header = { 'content-type': 'appication/json' };
    const { error, data, message } = yield call(
      apiPost,
      '/v1/register',
      params,
      header,
    );
    if (error === 0) {
      yield put(
        authActions.registerSuccess({
          userId: data.id,
          authToken: data.token,
          currentUser: {
            username: username,
            password: password,
          },
        }),
      );
      History.push('/profile/nickname');
    } else if (error === 10) {
      yield put(
        authActions.registerFailed({
          register: {
            error: error,
            message: message,
          },
        }),
      );
    } else {
      throw new Error('System Error');
    }
  } catch {
    yield put(authActions.setSystemError({}));
  }
}
function* handleLogout(action) {}

export function* authSaga() {
  yield takeLatest(authActions.requestLogin.type, handleLogin);
  yield takeLatest(authActions.requestLogout.type, handleLogout);
  yield takeLatest(authActions.requestRegister.type, handleRegister);
}
