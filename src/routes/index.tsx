import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackViews from './Routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <StackViews />
    </NavigationContainer>
  );
};

export default Routes;
