/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

// import MainLayout from './src/layouts/main/MainLayout';
import WelcomeScreen from './src/screens/welcome/WelcomeScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import NewRequestScreen from './src/screens/requests/NewRequestScreen';
import MainLayout from './src/layouts/main/MainLayout';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeBaseProvider, extendTheme} from 'native-base';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const theme = extendTheme({
    fontConfig: {
      Roboto: {
        100: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        200: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        300: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        400: {
          normal: 'Roboto-Regular',
          italic: 'Roboto-Italic',
        },
        500: {
          normal: 'Roboto-Medium',
        },
        600: {
          normal: 'Roboto-Medium',
          italic: 'Roboto-MediumItalic',
        },
      },
    },

    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
      mono: 'Roboto',
    },
  });

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="MainLayout" component={MainLayout} />
              <Stack.Screen
                name="NewRequestScreen"
                component={NewRequestScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
          {/* <MainLayout /> */}
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
