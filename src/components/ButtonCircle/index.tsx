import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

type Props = TouchableOpacityProps & {
  children?: ReactNode;
};

export const ButtonCircle: React.FC<Props> = ({ children, ...rest }) => {
  return <S.Container {...rest}>{children}</S.Container>;
};
