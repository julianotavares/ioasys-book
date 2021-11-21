import React from 'react';
import { Details } from '@screens';

beforeAll(() => {
  jest.mock('@react-native-async-storage/async-storage');
});

describe('Details Screen', () => {
  it('should be have exist Details Screen', () => {
    expect(<Details />).toBeTruthy();
  });
});
