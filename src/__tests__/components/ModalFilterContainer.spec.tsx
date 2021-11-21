import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '@src/styles/theme';

import { ModalFilterContainer } from '@components';

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('ModalFilterContainer Component', () => {
  it('should be have exist ModalFilterContainer Component', () => {
    render(
      <ModalFilterContainer
        categories={[]}
        published={[]}
        categorySelected={[]}
        publishedSelected={[]}
        onSubmit={function (): void {
          throw new Error('Function not implemented.');
        }}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
        onSelectCategory={(value: string) => {
          throw new Error('Function not implemented.');
        }}
        onSelectPublished={(value: number) => {
          throw new Error('Function not implemented.');
        }}
      />,
      {
        wrapper: Providers,
      },
    );

    expect(
      <ModalFilterContainer
        categories={[]}
        published={[]}
        categorySelected={[]}
        publishedSelected={[]}
        onSubmit={function (): void {
          throw new Error('Function not implemented.');
        }}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
        onSelectCategory={(value: string) => {
          throw new Error('Function not implemented.');
        }}
        onSelectPublished={(value: number) => {
          throw new Error('Function not implemented.');
        }}
      />,
    ).toBeTruthy();
  });
});
