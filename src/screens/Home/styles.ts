import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const ImageBackground = styled.ImageBackground`
  flex: 1;
`;
export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-top: 60px;
  padding: 0 20px 30px 20px;
`;

export const LogoTitle = styled.View`
  flex-direction: row;
`;

export const Logo = styled.Image`
  margin-top: 4px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;

  margin: 0px 16px;

  color: ${({ theme }) => theme.colors.title};
`;

export const ButtonFilter = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const Filter = styled.Image``;

export const ButtonLogOut = styled.TouchableOpacity``;

export const LogOut = styled.Image``;

export const SearchFilter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 0 20px 30px 20px;
`;

export const SearchInput = styled.TextInput.attrs(props => ({
  selectionColor: '#333333' || props.selectionColor,
}))`
  width: 246px;
  height: 48px;

  padding-left: 16px;

  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 2px;
`;

export const SearchIcon = styled.Image`
  position: absolute;
  left: 220px;
  top: 15px;
`;

export const FilterIcon = styled.Image`
  margin: 0 16px;
`;

export const Cards = styled.TouchableOpacity`
  flex-direction: row;
  height: 160px;
  margin: 0 20px 10px 20px;

  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
`;

export const List = styled(FlatList as new () => FlatList<unknown>)`
  width: 100%;
`;

export const CardsInfos = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Image = styled.Image`
  align-items: flex-start;

  width: 81px;
  height: 122px;

  margin: 0 2px;
`;

export const ImageView = styled.View`
  justify-content: center;
  padding: 0 8px 0 14px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  font-size: 14px;

  color: ${({ theme }) => theme.colors.title};
`;

export const Authors = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: normal;
  font-style: normal;
  line-height: 20px;
  font-size: 12px;

  color: ${({ theme }) => theme.colors.pink_dark};
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: normal;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  line-height: 20px;

  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

export const CleanFilter = styled.View`
  width: 100%;
  height: 100px;

  justify-content: space-between;
  align-items: center;

  margin: 180px auto;
`;
