import { createContext } from 'react';
import { useState } from 'react';




 export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

const [state,setState] = useState(false)

  return (
    <AuthContext.Provider value={{ state,setState}}>
      {children}
    </AuthContext.Provider>
  );
};