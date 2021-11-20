import styled from 'styled-components/native';

type ContainerProps = {
  outline: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  justify-content: center;
  align-items: center;

  width: 91px;
  height: 36px;

  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.colors.pink};
  border-radius: 44px;

  background: ${({ theme }) => theme.colors.primary};
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.pink};
`;
