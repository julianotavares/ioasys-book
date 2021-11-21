import 'react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from '@styles/theme';

import { render } from '@testing-library/react-native';
import { Login } from '@screens';

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

beforeAll(() => {
  jest.mock('@react-native-async-storage/async-storage');
});

describe('Login Screen', () => {
  it('check if exist Login Screen', () => {
    render(<Login />, {
      wrapper: Providers,
    });

    expect(<Login />).toBeTruthy();
  });

  it('check if exist an email accessibility Label input', () => {
    const { getByLabelText } = render(<Login />, {
      wrapper: Providers,
    });
    const inputName = getByLabelText('Email');

    expect(inputName.props.accessibilityLabel).toBeTruthy();
  });

  it('check if exist an password accessibility Label input', () => {
    const { getByLabelText } = render(<Login />, {
      wrapper: Providers,
    });
    const inputName = getByLabelText('Senha');

    expect(inputName.props.accessibilityLabel).toBeTruthy();
  });

  it('check if exist a button to login', () => {
    const { getByTestId } = render(<Login />, {
      wrapper: Providers,
    });
    const button = getByTestId('button-login');

    expect(button.props.testID).toBeTruthy();
  });
});
