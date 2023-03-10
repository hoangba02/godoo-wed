import { authActions } from '.';
import { call, put, takeLatest } from 'redux-saga/effects';
import { apiGet, apiPost } from 'utils/http/requests';
import History from 'app/components/History/History';
import { getLocalStorage } from 'utils/storage/local';

function* handleGetProfile(action) {
  const { userId, username, password, remember } = action.payload;
  try {
    const header = { userId: userId };
    const { error, data } = yield call(
      apiGet,
      '/v1/godoo/profile/getprofile',
      header,
    );
    if (error === 0) {
      yield put(
        authActions.getProfile({
          profile: {
            nickname: data.nickname,
            picture: data.picture,
            date_of_birth: data.date_of_birth,
            zodiac: data.zodiac,
            gender: data.gender,
            introduction: data.introduction,
            schedule_id: data.schedule_id,
            additional_information: data.additional_information,
          },
        }),
      );
      if (data.nickname === '') {
        History.push('/profile/nickname');
      } else if (data.picture.length === 0) {
        History.push('/profile/picture');
      } else if (data.date_of_birth === '') {
        History.push('/profile/birthday');
      } else if (data.gender.length === 0) {
        History.push('/profile/gender');
      } else {
        History.push('/');
      }
    } else {
      throw new Error('System Error');
    }
  } catch {
    yield put(
      authActions.requestLogout({
        username: username,
        password: password,
        remember: remember,
        unKnowError: true,
      }),
    );
  }
}
function* handleLogin(action) {
  try {
    const { username, password, remember } = action.payload;
    const params = { username, password };
    const header = { 'content-type': 'appication/json' };
    const { error, data, message } = yield call(
      apiPost,
      '/v1/login',
      params,
      header,
    );
    if (error === 0) {
      yield put(
        authActions.loginSuccess({
          userId: data.id,
          authToken: data.token,
          currentUser: {
            username: username,
            password: password,
          },
          login: {
            error: error,
            message: message,
            remember: remember,
          },
        }),
      );
      yield put(
        authActions.requestGetProfile({
          userId: data.id,
          username: username,
          password: password,
          remember: remember,
        }),
      );
    } else if (error === 10 || error === 11) {
      yield put(
        authActions.loginFailed({
          login: {
            error: error,
            message: message,
            remember: remember,
          },
        }),
      );
    } else {
      throw new Error('System Error');
    }
  } catch {
    yield put(
      authActions.setSystemError({
        unKnowError: true,
      }),
    );
  }
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
    yield put(
      authActions.setSystemError({
        unKnowError: true,
      }),
    );
  }
}
function* handleLogout(action) {
  try {
    const local = getLocalStorage('persist:root');
    const { username, password, remember, unKnowError } = action.payload;
    const header = { userid: local.userId, token: local.authToken };
    const { error } = yield call(apiPost, '/v1/logout', {}, header);
    if (error === 0) {
      yield put(
        authActions.logoutSuccess({
          unKnowError: unKnowError,
          currentUser: {
            username: remember ? username : '',
            password: remember ? password : '',
          },
          login: {
            error: -1,
            message: '',
            remember: remember,
          },
        }),
      );
      History.push('/login');
    } else {
      throw new Error('System Error');
    }
  } catch {
    yield put(
      authActions.setSystemError({
        unKnowError: true,
      }),
    );
  }
}

function* handleUpdateProfile(action) {
  try {
    const local = getLocalStorage('persist:root');
    const { navigate, profile } = action.payload;
    const param = { ...profile };
    const header = { userid: local.userId, token: local.authToken };
    const { error, data } = yield call(
      apiPost,
      '/v1/godoo/profile/compulsoryinfo',
      param,
      header,
    );
    if (error === 0) {
      yield put(
        authActions.updateProfile({
          profile: {
            nickname: data.nickname || local.profile.nickname,
            picture: data.picture || local.profile.picture,
            date_of_birth: data.date_of_birth || local.profile.date_of_birth,
            zodiac: data.zodiac || local.profile.zodiac,
            gender: data.gender || local.profile.gender,
            introduction: data.introduction || local.profile.introduction,
            schedule_id: data.schedule_id || local.profile.schedule_id,
            additional_information:
              data.additional_information ||
              local.profile.additional_information,
          },
        }),
      );
      History.push(navigate);
    } else {
      throw new Error('System Error');
    }
  } catch {
    yield put(
      authActions.setSystemError({
        unKnowError: true,
      }),
    );
  }
}
export function* authSaga() {
  yield takeLatest(authActions.requestLogin.type, handleLogin);
  yield takeLatest(authActions.requestLogout.type, handleLogout);
  yield takeLatest(authActions.requestRegister.type, handleRegister);
  yield takeLatest(authActions.requestUpdateProfile.type, handleUpdateProfile);
  yield takeLatest(authActions.requestGetProfile.type, handleGetProfile);
}
