import React from 'react';

import { FilterButton, ButtonCircle } from '@components';
import closeIcon from '@assets/images/close.png';
import * as S from './styles';

interface Props {
  categories: string[];
  published: number[];
  categorySelected: string[];
  publishedSelected: number[];
  onSubmit: () => void;
  onClose: () => void;
  onSelectCategory: (value: string) => void;
  onSelectPublished: (value: number) => void;
}

export const ModalFilterContainer = ({
  onClose,
  onSubmit,
  categories,
  published,
  categorySelected,
  publishedSelected,
  onSelectCategory,
  onSelectPublished,
}: Props) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <ButtonCircle onPress={onClose}>
            <S.CloseIcon source={closeIcon} />
          </ButtonCircle>
        </S.Header>
        <S.Content>
          <S.Title>Selecione a categoria</S.Title>

          <S.OptionsContainer>
            {categories.map(item => (
              <S.Option
                key={item}
                activeOpacity={0.8}
                selected={categorySelected.includes(item)}
                onPress={() => onSelectCategory(item)}
              >
                <S.OptionText selected={categorySelected.includes(item)}>
                  {item}
                </S.OptionText>
              </S.Option>
            ))}
          </S.OptionsContainer>
        </S.Content>
        <S.Content>
          <S.Title>Selecione o ano</S.Title>
          <S.OptionsContainer>
            {published.map(item => (
              <S.Option
                key={item}
                activeOpacity={0.8}
                selected={publishedSelected.includes(item)}
                onPress={() => onSelectPublished(item)}
              >
                <S.OptionText selected={publishedSelected.includes(item)}>
                  {item}
                </S.OptionText>
              </S.Option>
            ))}
          </S.OptionsContainer>
        </S.Content>
        <S.FooterContainer />
        <FilterButton title="Filtrar" outline onPress={onSubmit} />
      </S.Container>
    </S.Wrapper>
  );
};
