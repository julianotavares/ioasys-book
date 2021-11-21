import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '@src/styles/theme';

import { ButtonCircle } from '@components';

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('ButtonCircle Component', () => {
  it('should be have exist ButtonCircle Component', () => {
    render(<ButtonCircle />, {
      wrapper: Providers,
    });

    expect(<ButtonCircle />).toBeTruthy();
  });
});
