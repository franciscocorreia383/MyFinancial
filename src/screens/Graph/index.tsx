//libraries
import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//styles
import styles from './styles';
import {theme} from '../../global/styles/theme'

const Graph: React.FC = () => {
  return (
    <LinearGradient colors={[theme.colors.primaryFirst, theme.colors.primarySecond]} style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={{
          color: 'white',
          fontSize: 20
        }}>Graph</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Graph;
