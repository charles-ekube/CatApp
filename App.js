/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyTabBar from './src/router/TabBarComponent';
import TabBar from './src/router/TabBarComponent';
import Tabs from './src/router/TabNavigator';



const App = () => {

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};


export default App;
