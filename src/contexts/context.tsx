/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContextType } from '@models/navigation';
import { api } from '@configs';

const defaultState = {
  signed: false,
  token: '',
  signOut: () => {},
  signIn: () => {},
};

const Context = createContext<AppContextType>(defaultState);

export const AuthProvider: React.FC = ({ children }: any) => {
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

  const signIn = async (email: string, password: string) => {
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
  };

  const signOut = () => {
    AsyncStorage.clear()
      .then(() => {
        setToken('');
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  return (
    <Context.Provider
      value={{
        signed: !!token,
        token,
        signOut,
        signIn,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
