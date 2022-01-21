import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Routes from './src/routes/Routes';
import Background from './src/components/Background';

Icon.loadFont();

const App = () => {
  return (
    <Background>  
      <NavigationContainer>
      <Routes/>
      </NavigationContainer>
    </Background>  
  );
}

export default App;