//libraries
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import { Text, View } from 'react-native';

//styles
import { theme } from '../../global/styles/theme';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <LinearGradient colors={[theme.colors.primaryFirst, theme.colors.primarySecond]} style={{flex: 1}}>
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