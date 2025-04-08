import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;