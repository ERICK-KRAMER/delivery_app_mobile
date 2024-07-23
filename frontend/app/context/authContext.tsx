'use client';

import { createContext, useState, useContext } from "react";

interface IAuthContext {
  signIn(token: string): void;
  logout(): void;
  isAuthenticated: boolean
};

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const signIn = (token: string) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    console.log('login feito');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    console.log('logout feito');
  };

  const methods: IAuthContext = {
    isAuthenticated,
    signIn,
    logout,
  }

  return <AuthContext.Provider value={methods}>{children}</AuthContext.Provider>
}

export { useAuth, AuthContextProvider };