import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details, Home, Login } from '@screens';

import { useAuth } from '@contexts/auth';

const Stack = createNativeStackNavigator();

const StackViews = () => {
  const { signed } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {signed ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default StackViews;
