import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

// Note: test renderer must be required after react-native.
beforeAll(() => {
  jest.mock('@react-native-async-storage/async-storage');
});

it('renders correctly', () => {
  renderer.create(<App />);
});
