/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContextType } from '@models/navigation';
import { api } from '@configs';

interface AuthProviderProps {
  children: ReactNode;
}

const defaultState = {
  signed: false,
  token: '',
  signOut: () => {},
  signIn: () => {},
};

const AuthContext = createContext<AppContextType>(defaultState);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    async function loadStoragedData() {
      try {
        const storagedToken = await AsyncStorage.getItem('@ioasysBook:token');

        if (storagedToken) {
          setToken(storagedToken);
        }
      } catch (error) {
        console.log(error);
      }
    }

    loadStoragedData();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/auth/sign-in', {
        email,
        password,
      });

      await AsyncStorage.setItem(
        '@ioasysBook:token',
        response.headers.authorization,
      );
      setToken(response.headers.authorization);
    } catch (error) {
      console.error(error);
    }
  }

  async function signOut() {
    AsyncStorage.clear()
      .then(() => {
        setToken('');
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  return (
    <AuthContext.Provider
      value={{
        signed: !!token,
        token,
        signOut,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
