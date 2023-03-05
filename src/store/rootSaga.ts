import { all } from 'redux-saga/effects';
import { authSaga } from './slice/authSlice/saga';

export default function* rootSaga() {
  yield all([authSaga()]);
}
