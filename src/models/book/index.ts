export interface Book {
  id: string;
  title: string;
  authors: [string];
  description: string;
  category: string;
  language: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  published: number;
  publisher: string;
  pageCount: number;
}
