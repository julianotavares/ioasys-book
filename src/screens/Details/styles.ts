import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.ScrollView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin: 44px 0 0 16px;
`;

export const Back = styled.Image``;

export const ImageContent = styled.View``;
export const Image = styled.Image`
  width: 240px;
  height: 351px;
`;

export const Title = styled.Text`
  margin-top: 24px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
`;

export const Authors = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.pink_dark};
`;

export const Description = styled.View`
  flex: 1;
  width: 240px;

  flex-direction: row;
  justify-content: space-between;
`;

export const LeftContent = styled.View`
  margin: 22px 0;
`;
export const InformationContainer = styled.View`
  margin: 34px 0;
`;

export const InfoTitle = styled.Text`
  margin: 12px 0;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  font-size: 12px;

  line-height: 28.5px;
  text-align: left;

  color: ${({ theme }) => theme.colors.title};
`;

export const LeftInfo = styled.Text`
  margin: 2px 0;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 700;
  font-size: 12px;

  line-height: 20px;
  text-align: left;

  color: ${({ theme }) => theme.colors.title};
`;

export const RightInfo = styled.Text`
  margin: 2px 0;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 300;
  font-size: 12px;

  line-height: 20px;
  text-align: right;

  color: ${({ theme }) => theme.colors.text};
`;

export const PublisherReview = styled.View`
  flex: 1;
  width: 240px;

  margin: 0 auto;
`;
export const ReviewTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  font-size: 12px;

  text-align: left;

  color: ${({ theme }) => theme.colors.title};
`;

export const QuotationMarkIcon = styled.Image`
  margin: 18px 0;
`;

export const ReviewText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 300;
  font-size: 12px;

  text-align: left;

  padding-bottom: 20px;

  color: ${({ theme }) => theme.colors.text};
`;
