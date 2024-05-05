import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { AuthUser, AuthResponse } from '@/services/auth';
import { getAuthToken, removeAuthToken, setAuthToken } from './helpers';

const initialState: AuthStateType = {
  user: null,
  authenticate: false,
};

const AuthContext = createContext<AuthStateType>(initialState);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthStateType>(initialState);

  function handleLogin(result: AuthResponse, cb: VoidFunction) {
    const { token } = result;
    const decodedUser = getUserFromToken(token);

    if (decodedUser) {
      setAuthToken(token);
      setState((prev) => ({ ...prev, user: decodedUser as AuthUser, authenticate: true }));
      cb();
    }
  }

  function handleLogout(cb: VoidFunction) {
    removeAuthToken();
    setState(initialState);
    cb();
  }

  function getUserFromToken(token: string | null) {
    try {
      if (!token) return null;

      return jwtDecode(token);
    } catch (error) {
      return null;
    }
  }

  useEffect(() => {
    const token = getAuthToken();
    const decodedUser = getUserFromToken(token);

    if (decodedUser) {
      setState((prev) => ({ ...prev, user: decodedUser as AuthUser, authenticate: true }));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, onLogin: handleLogin, onLogout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export type AuthStateType = {
  user: AuthUser | null;
  authenticate: boolean;
  onLogin?: (result: AuthResponse, cb: VoidFunction) => void;
  onLogout?: (cb: VoidFunction) => void;
};
