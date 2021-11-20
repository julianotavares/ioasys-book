import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Modal, StatusBar, View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Book } from '@models/book';
import { RootStackParamList } from '@models/navigation';

import { ModalFilterContainer } from '@components';
import background from '@assets/images/backgroundHome.png';
import logOutButton from '@assets/images/LogOut.png';
import logo from '@assets/images/logoBlack.png';
import iconSearch from '@assets/images/iconSearch.png';
import iconFilter from '@assets/images/filter.png';

import { api } from '@configs';

import Context from '@contexts/context';

import * as S from './styles';

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

export const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [oldBooks, setOldBooks] = useState<Book[]>([]);

  const [categories, setCategories] = useState<string[]>([]);
  const [categorySelected, setCategorySelected] = useState<string[]>([]);

  const [published, setPublished] = useState<number[]>([]);
  const [publishedSelected, setPublishedSelected] = useState<number[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState<number>(1);
  const { navigate } = useNavigation<homeScreenProp>();
  const { token, signOut } = useContext(Context);

  const [modalVisible, setModalVisible] = useState(false);

  const getBooksList = useCallback(async () => {
    try {
      if (loading) {
        return;
      }

      setLoading(true);
      const response = await api.get('/books', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { page },
      });

      if (response.data) {
        const listCategories = response.data.data.map(
          (book: Book) => book.category,
        );
        const listPublished = response.data.data.map(
          (book: Book) => book.published,
        );
        const filteredListCategories = listCategories.filter(
          (item: Book, i: Book) => listCategories.indexOf(item) === i,
        );
        const filteredListPublished = listPublished.filter(
          (item: Book, i: Book) => listPublished.indexOf(item) === i,
        );
        setCategories(filteredListCategories);
        setPublished(filteredListPublished);
      }

      setPage(page + 1);
      setLoading(false);
      setBooks([...books, ...response.data.data]);
      setOldBooks([...books, ...response.data.data]);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (query !== '') {
      const filterAdd = oldBooks.filter(
        item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      );

      setBooks(filterAdd);
    } else {
      setBooks(oldBooks);
    }
  }, [query, oldBooks]);

  function handleOpenModal() {
    setModalVisible(true);
    setCategorySelected([]);
    setPublishedSelected([]);
  }

  function handleCloseModal() {
    setModalVisible(false);
  }

  function handleSubmit() {
    setModalVisible(false);

    if (categorySelected.length > 0 && publishedSelected.length > 0) {
      const filteredItemByCategoryAndPublished = oldBooks.filter(
        item =>
          categorySelected.includes(item.category) &&
          publishedSelected.includes(item.published),
      );
      setBooks(filteredItemByCategoryAndPublished);
      return true;
    }

    if (categorySelected.length > 0) {
      const filteredItemByCategory = oldBooks.filter(item =>
        categorySelected.includes(item.category),
      );
      setBooks(filteredItemByCategory);
      return true;
    }

    if (publishedSelected.length > 0) {
      const filteredItemByPublished = oldBooks.filter(item =>
        publishedSelected.includes(item.published),
      );
      setBooks(filteredItemByPublished);
      return true;
    }

    setBooks(oldBooks);
  }

  function handleSelectCategory(category: string) {
    if (categorySelected.length < 1) {
      setCategorySelected([category]);
    } else {
      const check = categorySelected.filter(cat => cat === category);
      if (check.length > 0) {
        setCategorySelected(prevState =>
          prevState.filter(cat => cat !== category),
        );
      } else {
        setCategorySelected([...categorySelected, category]);
      }
    }
  }

  function handleSelectPublished(published: number) {
    if (publishedSelected.length < 1) {
      setPublishedSelected([published]);
    } else {
      const check = publishedSelected.filter(pub => pub === published);
      if (check.length > 0) {
        setPublishedSelected(prevState =>
          prevState.filter(pub => pub !== published),
        );
      } else {
        setPublishedSelected([...publishedSelected, published]);
      }
    }
  }

  const navigateToDetails = (book: any) => {
    navigate('Details', book);
  };

  const renderItem = ({ item }: any) => {
    return (
      <S.Cards onPress={() => navigateToDetails(item.id)}>
        <S.ImageView>
          <S.Image source={{ uri: item.imageUrl }} resizeMode="contain" />
        </S.ImageView>
        <S.CardsInfos>
          <S.Title>{item.title}</S.Title>
          {item.authors?.map((author: string) => (
            <S.Authors key={author}>{author}</S.Authors>
          ))}
          <S.Text>{`${item.pageCount} páginas`}</S.Text>
          <S.Text>{`Editora ${item.publisher}`}</S.Text>
          <S.Text>{`Publicado em ${item.published}`}</S.Text>
        </S.CardsInfos>
      </S.Cards>
    );
  };

  const logOut = async () => {
    signOut();
  };

  useEffect(() => {
    getBooksList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Modal animationType="fade" visible={modalVisible} transparent>
        <ModalFilterContainer
          categorySelected={categorySelected}
          publishedSelected={publishedSelected}
          categories={categories}
          published={published}
          onSubmit={handleSubmit}
          onClose={handleCloseModal}
          onSelectCategory={handleSelectCategory}
          onSelectPublished={handleSelectPublished}
        />
      </Modal>
      <S.ImageBackground source={background}>
        <S.Container>
          <S.Header>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" />
            <S.LogoTitle>
              <S.Logo source={logo} />
              <S.HeaderTitle>Books</S.HeaderTitle>
            </S.LogoTitle>
            <S.ButtonLogOut onPress={logOut}>
              <S.LogOut source={logOutButton} />
            </S.ButtonLogOut>
          </S.Header>
          <S.SearchFilter>
            <S.SearchInput
              placeholder="Procure um livro"
              value={query}
              autoCorrect={false}
              onChangeText={setQuery}
            />
            <S.SearchIcon source={iconSearch} />
            <S.ButtonFilter onPress={handleOpenModal}>
              <S.FilterIcon source={iconFilter} />
            </S.ButtonFilter>
          </S.SearchFilter>
          {books && books.length > 0 ? (
            <S.List
              keyExtractor={(book: Book) => String(book.id)}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
              data={books}
            />
          ) : (
            <S.CleanFilter>
              <Text>Nenhum livro foi encontrado.</Text>
              <Button title="Limpar Filtro" onPress={() => setBooks(oldBooks)}>
                Nenhum livro foi encontrado.
              </Button>
            </S.CleanFilter>
          )}
        </S.Container>
      </S.ImageBackground>
    </>
  );
};
