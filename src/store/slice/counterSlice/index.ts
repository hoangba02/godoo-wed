import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { CounterState } from './type';

export const initialState: CounterState = {
  value: 0,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase(state: CounterState) {
      state.value += 1;
    },
    decrease(state: CounterState) {
      state.value -= 1;
    },
    setCounter(state: CounterState, actions: PayloadAction<CounterState>) {
      state.value = actions.payload.value;
    },
  },
});

export const { actions: counterActions, reducer } = slice;

export const CounterSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { counterActions: slice.actions };
};
