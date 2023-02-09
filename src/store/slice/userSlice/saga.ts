import { takeLatest, put } from 'redux-saga/effects';
import { apiGet, apiPost } from 'utils/http/request';
import { BaseResponse } from 'utils/http/response';
import { usersActions } from '.';

export function* CheckProfile(data) {
  const res: BaseResponse = yield apiGet('/v1/godoo/profile/get', {
    userId: data.id,
    token: data.token,
  });
  if (res.data !== null) {
    yield put(
      usersActions.createProfile({
        profile: {
          nickname: res.data.nickname,
          picture: res.data.picture,
          date_of_birth: res.data.date_of_birth,
          zodiac: res.data.zodiac,
          gender: res.data.gender,
          introduction: res.data.introduction,
          relationship: res.data.relationship,
        },
      }),
    );
  } else {
    yield put(
      usersActions.createProfile({
        profile: {
          nickname: '',
          picture: [],
          date_of_birth: '',
          zodiac: '',
          gender: [],
          introduction: '',
          relationship: -1,
        },
      }),
    );
  }
}
export function* SetProfile(action) {
  const data = {
    nickname: action.payload.profile.nickname,
    picture: action.payload.profile.picture,
    date_of_birth: action.payload.profile.date_of_birth,
    zodiac: action.payload.profile.zodiac,
    gender: action.payload.profile.gender,
    introduction: action.payload.profile.introduction,
    relationship: action.payload.profile.relationship,
  };
  const header = {
    userid: action.payload.id,
    token: action.payload.token,
  };
  const res: BaseResponse = yield apiPost(
    '/v1/godoo/profile/compulsoryinfo  ',
    data,
    header,
  );
  console.log(res);
  if (res.error === 0) {
    yield put(
      usersActions.createProfile({
        profile: {
          nickname: res.data.nickname,
          picture: res.data.picture,
          date_of_birth: res.data.date_of_birth,
          zodiac: res.data.zodiac,
          gender: res.data.gender,
          introduction: res.data.introduction,
          relationship: res.data.relationship,
        },
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

  const res: BaseResponse = yield apiPost('/v1/login', data, {
    'content-type': 'appication/json',
  });
  if (res.error === 0) {
    yield CheckProfile(res.data);
    yield put(
      usersActions.loginSuccess({
        id: res.data.id,
        token: res.data.token,
        username: res.data.username,
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
  yield takeLatest(usersActions.requestProfile.type, SetProfile);
  yield takeLatest(usersActions.requestLikeAction.type, CheckMatch);
}
