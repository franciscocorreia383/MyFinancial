import {StyleSheet} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
    },
    body: {
        marginTop: getStatusBarHeight() + 26
    },
    
})

export default styles;