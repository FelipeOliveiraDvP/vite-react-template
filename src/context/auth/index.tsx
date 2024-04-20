import React, { createContext, useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { AuthUser, AuthUserSchema, LoginResponse } from '@/services/auth';
import { removeAuthToken, setAuthToken } from './helpers';

const initialState: AuthStateType = {
  user: null,
};

const AuthContext = createContext<AuthStateType>(initialState);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  function handleLogin(result: LoginResponse, cb: VoidFunction) {
    const { token } = result;
    const decoded = jwtDecode(token);
    const decodedUser = AuthUserSchema.parse(decoded);

    setAuthToken(token);
    setUser(decodedUser);
    cb();
  }

  function handleLogout(cb: VoidFunction) {
    removeAuthToken();
    setUser(null);
    cb();
  }

  return (
    <AuthContext.Provider value={{ user, onLogin: handleLogin, onLogout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export type AuthStateType = {
  user: AuthUser | null;
  onLogin?: (result: LoginResponse, cb: VoidFunction) => void;
  onLogout?: (cb: VoidFunction) => void;
};
