import {StyleSheet} from 'react-native';
import { theme } from '../global/styles/theme'

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.shadowBar,
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5  
  },
  touchable: {
      top: -25,
      justifyContent: 'center',
      alignItems: 'center'
  },
  touchableView: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: theme.colors.aroundBarIcon,
  }
  

});

export default styles;
