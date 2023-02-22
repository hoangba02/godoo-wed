import { usersActions } from '.';
import { BaseResponse } from 'utils/http/response';
import { apiGet, apiPost } from 'utils/http/request';
import { takeLatest, put, call } from 'redux-saga/effects';
import { deleteCache, getFormCache, setFormCache } from 'contexts/cache';
export function* CheckProfile(data) {
  const header = { userId: data.id };
  try {
    const cachedUserData = yield call(
      getFormCache,
      'user-profile',
      `/${data.id}`,
    );
    let profileData: any = null;
    if (cachedUserData) {
      profileData = cachedUserData;
    } else {
      const response = yield call(apiGet, '/v1/godoo/profile/get', header);
      profileData = response.data;
      yield call(setFormCache, 'user-profile', `/${data.id}`, profileData);
    }
    yield put(
      usersActions.createProfile({
        profile: profileData,
      }),
    );
  } catch {
    yield put(
      usersActions.createProfile({
        profile: {
          additional_information: null,
          date_of_birth: '',
          gender: [],
          introduction: '',
          nickname: '',
          picture: [],
          zodiac: '',
          schedule_id: [],
        },
      }),
    );
  }
}
export function* SetProfile(action) {
  const data = {
    userId: action.payload.profile.id,
    additional_information: action.payload.profile.additional_information,
    nickname: action.payload.profile.nickname,
    picture: action.payload.profile.picture,
    date_of_birth: action.payload.profile.date_of_birth,
    zodiac: action.payload.profile.zodiac,
    gender: action.payload.profile.gender,
    introduction: action.payload.profile.introduction,
    schedule_id: action.payload.profile.schedule_id,
  };
  const header = {
    userid: action.payload.id,
    token: action.payload.token,
  };
  const res: BaseResponse = yield apiPost(
    '/v1/godoo/profile/compulsoryinfo',
    data,
    header,
  );
  console.log(res);
  if (res.error === 0) {
    const newData = {
      userId: res.data.userId,
      additional_information: res.data.additional_information,
      date_of_birth: res.data.date_of_birth,
      gender: res.data.gender,
      introduction: res.data.introduction,
      nickname: res.data.nickname,
      picture: res.data.picture,
      zodiac: res.data.zodiac,
      schedule_id: res.data.schedule_id,
    };
    yield call(setFormCache, 'user-profile', `/${action.payload.id}`, newData);
    yield put(
      usersActions.createProfile({
        profile: newData,
      }),
    );
  }
}
export function* Register(action) {
  const data = {
    username: action.payload.username,
    password: action.payload.password,
  };
  const res: BaseResponse = yield apiPost('/v1/register', data, {
    'content-type': 'appication/json',
  });

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
}
export function* Login(action) {
  const data = {
    username: action.payload.username,
    password: action.payload.password,
  };
  const header = {
    'content-type': 'appication/json',
  };
  const res: BaseResponse = yield call(apiPost, '/v1/login', data, header);
  if (res.error === 0) {
    yield CheckProfile(res.data);
    yield put(
      usersActions.loginSuccess({
        id: res.data.id,
        token: res.data.token,
        username: res.data.username,
        password: action.payload.password,
        isLogin: false,
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
export function* Logout(action) {
  const header = {
    userid: action.payload.id,
    token: action.payload.token,
  };
  const res: BaseResponse = yield call(apiPost, '/v1/logout', {}, header);
  if (res.error === 0) {
    yield call(deleteCache, 'user-profile', `/${action.payload.id}`);
    yield put(
      usersActions.logoutSuccess({
        username: action.payload.username,
        password: action.payload.password,
        login: {
          savePassword: action.payload.login.savePassword,
        },
      }),
    );
  } else {
    yield put(usersActions.logoutFail());
  }
}
export function* CheckMatch(action) {
  const data = {
    user_id_2: action.payload.user_2.userId,
  };
  const header = {
    userid: action.payload.id,
    token: action.payload.token,
  };
  const res: BaseResponse = yield apiPost(`/v1/godoo/match/like`, data, header);
  if (res.error === 0 && !res.hasOwnProperty('data')) {
    yield put(usersActions.updateYouLikedList(action.payload.user_2));
  } else if (res.error === 0 && res.hasOwnProperty('data')) {
    yield put(usersActions.updateMatchList(action.payload.user_2));
    yield put(usersActions.updateLikedYouList(action.payload.user_2.userId));
  }
}
export function* userSaga() {
  yield takeLatest(usersActions.requestRegister.type, Register);
  yield takeLatest(usersActions.requestLogin.type, Login);
  yield takeLatest(usersActions.requestLogout.type, Logout);
  yield takeLatest(usersActions.requestProfile.type, SetProfile);
  yield takeLatest(usersActions.requestLikeAction.type, CheckMatch);
}
