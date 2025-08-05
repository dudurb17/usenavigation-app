import React from "react";

export interface AuthContextType {
  isLoggedIn: boolean | null;
  setIsLoggedIn: (value: boolean) => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  isLoggedIn: null,
  setIsLoggedIn: () => {},
});
