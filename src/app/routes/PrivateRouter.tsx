import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getIsLogin } from 'store/slice/userSlice/selectors';
import { getUserLocal } from 'utils/Storage';

const PrivateRouter = () => {
  const location = useLocation();
  const isLogin = useSelector(getIsLogin);
  const [auth, setAuth] = useState<boolean>(false);
  const userLocal = getUserLocal('persist:state');
  useEffect(() => {
    if (!userLocal?.isLogin) {
      setAuth(true);
    }
  }, [location, userLocal?.isLogin]);

  return auth ? <Navigate to="/login" /> : <Outlet />;

  // return <Outlet />;
};
export default PrivateRouter;
