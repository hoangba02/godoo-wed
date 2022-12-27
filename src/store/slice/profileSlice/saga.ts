import { put, takeLatest } from 'redux-saga/effects';
import { apiPost } from 'utils/http/request';
import { BaseResponse } from 'utils/http/response';
import { profileActions } from '.';

export function* SetProfile(action) {
  const data = {
    nickname: action.payload.nickname,
    picture: action.payload.picture,
    date_of_birth: action.payload.date_of_birth,
    zodiac: action.payload.zodiac,
    gender: action.payload.gender,
    introduction: action.payload.introduction,
    relationship: action.payload.relationship,
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
      profileActions.createProfile({
        nickname: res.data.nickname,
        picture: res.data.picture,
        date_of_birth: res.data.date_of_birth,
        zodiac: res.data.zodiac,
        gender: res.data.gender,
        introduction: res.data.introduction,
        relationship: res.data.relationship,
      }),
    );
  }
}
export function* profileSaga() {
  yield takeLatest(profileActions.requestProfile.type, SetProfile);
}
