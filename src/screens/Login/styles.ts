import styled from 'styled-components/native';

export const LoginContainer = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary};
`;

export const LoginView = styled.View`
  width: 100%;
  height: 224px;

  padding: 0 17px;
`;

export const LoginHeader = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 28px;
`;

export const LoginLogo = styled.Image`
  margin-top: 4px;
`;

export const LoginForm = styled.View`
  justify-content: center;
`;

export const LoginTitle = styled.Text`
  margin-left: 16px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const LoginInput = styled.TextInput.attrs(props => ({
  selectionColor: '#FFFFFF' || props.selectionColor,
}))`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  width: 100%;
  height: 60px;

  padding-left: 10px;
  padding-top: 10px;

  color: ${({ theme }) => theme.colors.primary};

  background: ${({ theme }) => theme.colors.input_background};

  border-radius: 4px;
`;

export const LoginInputLabel = styled.Text`
  top: 20px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  padding-left: 10px;

  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 85px;
  height: 36px;

  align-items: center;
  justify-content: center;

  position: absolute;
  top: 104px;
  right: 16px;

  padding: 8px 0;
  border-radius: 44px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LoginButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.pink};
`;
