import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback( async({email, password}) => {
    // console.log('signIn');
    const response = await api.post('sessions',{
      email,
      password,
    });

  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Vinicius', signIn }}>
     {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
