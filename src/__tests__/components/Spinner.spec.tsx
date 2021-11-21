import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '@src/styles/theme';

import { Spinner } from '@components';

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('Spinner Component', () => {
  it('should be have exist Spinner Component', () => {
    render(<Spinner />, {
      wrapper: Providers,
    });
    expect(<Spinner />).toBeTruthy();
  });
});
