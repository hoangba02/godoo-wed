import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserSelector } from 'store/slice/userSlice/selectors';
const PrivateRouter = () => {
  let auth = useSelector(getUserSelector);
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
