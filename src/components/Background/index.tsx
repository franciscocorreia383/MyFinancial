import React, {ReactNode} from 'react';
import {View} from 'react-native';

import styles from './styles';
import {theme} from '../../global/styles/theme';

type Props = {
  children: ReactNode;
};

const Background: React.FC = ({children}) => {
  return (<View style={styles.container} >{children}</View>);
};

export default Background;
