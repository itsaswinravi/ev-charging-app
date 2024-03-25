import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen';

const Tab = createBottomTabNavigator();


export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
     } }>
      <Tab.Screen name='home'
      component={HomeScreen}
      options={{tabBarLabel:'Search',
      // tabBarActiveTintColor:Colors.PRIMARY,
                  tabBarIcon:({color,size}) => (
<Feather name="search" size={size} color={color} 
/>
                  )}}/>
      <Tab.Screen name='favorite'
      component={FavoriteScreen}
      options={{tabBarLabel:'favorite',
      // tabBarActiveTintColor:Colors.PRIMARY,
                  tabBarIcon:({color,size}) => (
<AntDesign name="hearto" size={size} color={color} />
                  )}}/>
      <Tab.Screen name='profile'
      component={ProfileScreen}
      options={{tabBarLabel:'profile',
      // tabBarActiveTintColor:Colors.PRIMARY,
                  tabBarIcon:({color,size}) => ( 
<AntDesign name="user" size={size} color={color} />
                  )}}/>
    </Tab.Navigator>
  )
}
