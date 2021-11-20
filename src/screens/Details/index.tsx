import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Book} from '@models/book';
import {RootStackParamList} from '@models/navigation';
import api from '@services/api';

import backArrow from '@assets/images/backArrow.png';
import quotationMark from '@assets/images/quotationMark.png';

import * as S from './styles';

type detailsScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Details: React.FC = () => {
  const [book, setBook] = useState<Book>();
  const {goBack} = useNavigation<detailsScreenProp>();
  const id = useRoute().params;

  const getBookDetails = async () => {
    try {
      const token = await AsyncStorage.getItem('@ioasysBook:token');
      const response = await api.get(`/books/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.Button onPress={() => goBack()}>
        <S.Back source={backArrow} />
      </S.Button>
      <S.Wrapper>
        <S.Content>
          <S.ImageContent>
            <S.Image source={{uri: book?.imageUrl}} />
          </S.ImageContent>
          <S.Title>{book?.title}</S.Title>
          <S.Authors>{book?.authors.map(author => `${author}, `)}</S.Authors>
          <S.Description>
            <S.LeftContent>
              <S.InfoTitle>INFORMAÇÕES</S.InfoTitle>
              <S.LeftInfo>Páginas</S.LeftInfo>
              <S.LeftInfo>Editora</S.LeftInfo>
              <S.LeftInfo>Publicação</S.LeftInfo>
              <S.LeftInfo>Idioma</S.LeftInfo>
              <S.LeftInfo>Título Original</S.LeftInfo>
              <S.LeftInfo>ISBN-10</S.LeftInfo>
              <S.LeftInfo>ISBN-13</S.LeftInfo>
              <S.LeftInfo>Categoria</S.LeftInfo>
            </S.LeftContent>
            <S.InformationContainer>
              <S.InfoTitle />
              <S.RightInfo>{book?.pageCount} páginas</S.RightInfo>
              <S.RightInfo>{book?.publisher}</S.RightInfo>
              <S.RightInfo>{book?.published}</S.RightInfo>
              <S.RightInfo>{book?.language}</S.RightInfo>
              <S.RightInfo>{book?.title}</S.RightInfo>
              <S.RightInfo>{book?.isbn10}</S.RightInfo>
              <S.RightInfo>{book?.isbn13}</S.RightInfo>
              <S.RightInfo>{book?.category}</S.RightInfo>
            </S.InformationContainer>
          </S.Description>
          <S.PublisherReview>
            <S.ReviewTitle>RESENHA DA EDITORA</S.ReviewTitle>
            <S.QuotationMarkIcon source={quotationMark} />
            <S.ReviewText>{book?.description}</S.ReviewText>
          </S.PublisherReview>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
};

export default Details;
