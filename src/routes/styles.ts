import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#0E1647',
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
      
  }
  

});

export default styles;
