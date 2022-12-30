// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { CounterState, UserState } from 'store/slice/type';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  user?: UserState;
}
export interface RootState {
  counter?: CounterState;
}
