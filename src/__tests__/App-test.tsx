import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '@src/styles/theme';

import App from '../App';

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

beforeAll(() => {
  jest.mock('@react-native-async-storage/async-storage');
});

it('renders correctly', () => {
  render(<App />, {
    wrapper: Providers,
  });
  expect(<App />).toBeTruthy();
});
