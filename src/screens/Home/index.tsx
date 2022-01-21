import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles';

const Home: React.FC = () => {
  return (
    <LinearGradient colors={['#430979', '#7119C2']} style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={{
          color: 'white',
          fontSize: 20
        }}>Home</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Home;