import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { getToken, setToken } from '../services/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) setUser({ token });
  }, []);

  const login = async (credentials) => {
    const { user, token } = await import('../services/auth').then(m => m.login(credentials));
    setToken(token);
    setUser(user);
    nav('/dashboard');
  };

  const logout = () => {
    localStorage.removeItem('sifhos_token');
    setUser(null);
    nav('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
