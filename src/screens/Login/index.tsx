import React, { useState } from 'react';

import logo from '@assets/images/Logo.png';
import background from '@assets/images/bg.png';

import { useAuth } from '@contexts/auth';

import { FormatEmail } from '@utils';

import * as S from './styles';

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        return;
      }
      const isValid = FormatEmail(email);

      if (!isValid) {
        console.error('Email invalido');
        return;
      }

      signIn(email, password);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <S.LoginContainer source={background}>
      <S.LoginView>
        <S.LoginHeader>
          <S.LoginLogo source={logo} />
          <S.LoginTitle>Books</S.LoginTitle>
        </S.LoginHeader>
        <S.LoginForm>
          <S.LoginInputLabel>Email</S.LoginInputLabel>
          <S.LoginInput
            accessibilityLabel="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <S.LoginInputLabel>Senha</S.LoginInputLabel>
          <S.LoginInput
            accessibilityLabel="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <S.LoginButton testID="button-login" onPress={handleLogin}>
            <S.LoginButtonText>Entrar</S.LoginButtonText>
          </S.LoginButton>
        </S.LoginForm>
      </S.LoginView>
    </S.LoginContainer>
  );
};
