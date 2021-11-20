import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Spinner } from '@components';

import * as S from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  outline?: boolean;
};

export const FilterButton: React.FC<Props> = ({
  title,
  loading = false,
  outline = false,
  ...rest
}) => {
  return (
    <S.Container {...rest} outline={outline} activeOpacity={0.8}>
      {loading ? (
        <Spinner size="small" />
      ) : (
        <S.TextButton>{title}</S.TextButton>
      )}
    </S.Container>
  );
};
