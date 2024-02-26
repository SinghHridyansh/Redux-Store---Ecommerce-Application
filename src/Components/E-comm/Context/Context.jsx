import React from "react";
import { createContext, useState } from "react";

export const AuthContext = createContext();

function CustomProviderEcom({ children }) {
  const [isloggedIn, setIsloggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isloggedIn, setIsloggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default CustomProviderEcom;
