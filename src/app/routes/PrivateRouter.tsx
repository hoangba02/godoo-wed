import React, { useState, useMemo, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getIsLogin } from 'store/slice/userSlice/selectors';
import { getUserLocal } from 'utils/Storage';

export const PrivateRouter = () => {
  const isLogin = useSelector(getIsLogin);
  const location = useLocation();
  const [auth, setAuth] = useState(false);

  const userLocal: any = useMemo(
    () => getUserLocal('persist:state'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLogin],
  );

  useLayoutEffect(() => {
    if (!userLocal?.isLogin) {
      setAuth(true);
    }
  }, [location, userLocal?.isLogin]);

  return auth ? <Navigate to="/login" /> : <Outlet />;
};
