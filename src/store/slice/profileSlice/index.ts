import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { ProfileState } from './type';

export const initialState: ProfileState = {
  nickname: '',
  picture: [],
  date_of_birth: '',
  zodiac: '',
  gender: [],
  introduction: '',
  relationship: -1,
};

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // Create Information Profile User

    createProfile(state: ProfileState, action: PayloadAction<ProfileState>) {
      state.nickname = action.payload.nickname;
      state.picture = action.payload.picture;
      state.date_of_birth = action.payload.date_of_birth;
      state.zodiac = action.payload.zodiac;
      state.gender = action.payload.gender;
      state.introduction = action.payload.introduction;
      state.relationship = action.payload.relationship;
    },
  },
});

export const { actions: profileActions, reducer } = slice;

export const ProfileSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { profileActions: slice.actions };
};
