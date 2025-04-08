import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isFirstLogin, setIsFirstLogin] = useState(false);

  useEffect(() => {
    // Fetch user information from the API
    axios.get('/api/auth/')
      .then(response => {
        setUser(response.data.user);
        setIsFirstLogin(response.data.isFirstLogin); // Backend returns first login status
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsFirstLogin(!userData.profileCompleted);
  };

  const logout = () => {
    setUser(null);
    setIsFirstLogin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isFirstLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}