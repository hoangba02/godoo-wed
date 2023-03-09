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
    const params = { username: username, password: password };
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
          register: { error: error, message: message },
          currentUser: { username: username, password: password },
        }),
      );
      History.push('/profile/nickname');
    } else if (error === 10) {
      yield put(
        authActions.registerFailed({
          register: { error: error, message: message },
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

function* handleUpdateProfile(action) {
  try {
    const { userId, authToken, currentProfile } = action.payload;
    const param = { ...currentProfile };
    const header = { userid: userId, token: authToken };
    const { error, data } = yield call(
      apiPost,
      '/v1/godoo/profile/compulsoryinfo',
      param,
      header,
    );
    if (error === 0) {
      yield put(
        authActions.updateProfile({
          currentProfile: {
            nickname: data.nickname || '',
            picture: data.picture || [],
            date_of_birth: data.date_of_birth || '',
            zodiac: data.zodiac || '',
            gender: data.gender || [],
            introduction: data.introduction || '',
            additional_information: data.additional_information || {},
            schedule_id: data.schedule_id || [],
          },
        }),
      );
      History.push('/profile/picture');
    } else {
      throw new Error('System Error');
    }
  } catch {
    yield put(
      authActions.setSystemError({
        unKnowError: 1,
      }),
    );
  }
}
export function* authSaga() {
  yield takeLatest(authActions.requestLogin.type, handleLogin);
  yield takeLatest(authActions.requestLogout.type, handleLogout);
  yield takeLatest(authActions.requestRegister.type, handleRegister);
  yield takeLatest(authActions.requestProfile.type, handleUpdateProfile);
}
