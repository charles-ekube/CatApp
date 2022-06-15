/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './src/AppContainer';
import Tabs from './src/router/TabNavigator';
import store from './src/slices/Store';




const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContainer>
          <Tabs />
        </AppContainer>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
