import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
});
