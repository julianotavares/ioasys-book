import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '@src/styles/theme';

import { FilterButton } from '@components';

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('FilterButton Component', () => {
  it('should be have exist FilterButton Component', () => {
    render(<FilterButton title="FilterButton" />, {
      wrapper: Providers,
    });

    expect(<FilterButton title="FilterButton" />).toBeTruthy();
  });
});
