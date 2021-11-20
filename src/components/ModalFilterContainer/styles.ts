import styled from 'styled-components/native';
import theme from '@src/styles/theme';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 90px 15px;

  background: #333;
  opacity: 0.9;
`;

export const Container = styled.View`
  padding: 10px 15px;
  height: 100%;

  border-radius: 4px;
  background: #fff;
`;
export const Content = styled.View``;

export const Header = styled.View`
  align-items: flex-end;
`;

export const CloseIcon = styled.Image``;

export const Title = styled.Text`
  padding-top: 30px;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const OptionsContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-top: 8px;
`;

type OptionsProps = {
  selected: boolean;
};

export const Option = styled.TouchableOpacity<OptionsProps>`
  justify-content: center;
  align-items: center;
  height: 32px;

  margin: 8px 5px;
  padding: 2px 16px;

  border-radius: 44px;
  border: 1px solid rgba(51, 51, 51, 0.3);

  background: ${props =>
    props.selected ? `${theme.colors.title}` : `${theme.colors.primary}`};
`;

export const OptionText = styled.Text<OptionsProps>`
  font-family: ${theme.fonts.regular};
  font-size: 12px;
  color: ${props =>
    props.selected ? `${theme.colors.primary}` : `${theme.colors.text_dark}`};
`;

export const FooterContainer = styled.View`
  margin: auto 0px;
`;
