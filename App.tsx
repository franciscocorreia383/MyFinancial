import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Routes from './src/routes/Routes';

Icon.loadFont();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
