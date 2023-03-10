import { images } from 'assets/images';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSlice } from 'store/slice/authSlice';
import { selectAuth } from 'store/slice/authSlice/selectors';
import Popup from '../Customs/Popup/Popup';

function AuthenError() {
  const dispatch = useDispatch();
  const { authActions } = AuthSlice();
  // Local
  const { unKnowError } = useSelector(selectAuth);
  const handleAuthenError = () => {
    dispatch(authActions.setAuthentication());
  };
  return (
    <Popup
      autoHide
      show={unKnowError}
      image={images.warning}
      content="Authentication Error"
      afterHide={handleAuthenError}
    />
  );
}

export default AuthenError;
