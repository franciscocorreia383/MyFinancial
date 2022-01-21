import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

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
    <View style={{
      backgroundColor: '#9A6FD6',
      ...styles.touchableView
    }}>
      {children}
    </View>
  </TouchableOpacity>
)

function Routes() {

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#6A17E1',
        inactiveTintColor: '#DDD',
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevations: 0,
          backgroundColor: '#182028',
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
          tabBarIcon: ({ color, size , focused}) => (
            <View style={{
              backgroundColor: focused ? '#000' : '#182028',
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
            <Icon name="plus" color={focused ? '#FFFFFF' : '#000'} size={35} />
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
              backgroundColor: focused ? '#000' : '#182028',
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