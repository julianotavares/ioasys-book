/* eslint-disable no-unused-expressions */
import React from 'react';
import { Home } from '@screens';

beforeAll(() => {
  jest.mock('@react-native-async-storage/async-storage');
});

describe('Home Screen', () => {
  it('should be have exist Home Screen', () => {
    expect(<Home />).toBeTruthy();
  });
});
