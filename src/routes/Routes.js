//libraries
import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

//styles
import styles from './styles'
import { theme } from '../global/styles/theme'

//screens
import Home from '../screens/Home'
import NewMov from '../screens/NewMov'
import Graph from '../screens/Graph'


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      ...styles.touchable,
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View style={styles.touchableView}>
      {children}
    </View>
  </TouchableOpacity>
)

function Routes() {

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.focusedIcon,
        inactiveTintColor: theme.colors.unfocusedIcon,
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevations: 0,
          backgroundColor: theme.colors.backgroundBar,
          borderRadius: 15,
          height: 80,
          ...styles.shadow
        },
      }}

    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{
              backgroundColor: focused ? theme.colors.focusedBackground : theme.colors.backgroundBar,
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: 15,
              marginTop: 25
            }}>
              <Icon name="home" color={color} size={size} />
            </View>
          )

        }}
      />

      <Tab.Screen
        name="New Moviment"
        component={NewMov}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="plus" color={focused ? theme.colors.focusedIcon : theme.colors.unfocusedIcon} size={35} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
        }}
      />

      <Tab.Screen
        name="Graph"
        component={Graph}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{
              backgroundColor: focused ? theme.colors.focusedBackground : theme.colors.backgroundBar,
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: 15,
              marginTop: 25
            }}>
              <Icon name="graph" color={color} size={40} />
            </View>
          )
        }}
      />

    </Tab.Navigator>
  );
}

export default Routes;