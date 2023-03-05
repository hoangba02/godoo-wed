// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { AuthState } from 'store/type';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  auth?: AuthState;
}
