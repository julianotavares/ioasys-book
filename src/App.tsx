import React from 'react';
import { ThemeProvider } from 'styled-components';

import { StatusBar } from 'react-native';

import theme from '@styles/theme';

import { AuthProvider } from '@contexts/context';
import Routes from '@src/routes';

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
