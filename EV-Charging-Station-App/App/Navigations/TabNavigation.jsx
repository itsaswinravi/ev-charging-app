import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default function TabNavigation() {
  return (
    <View>
      <Text>TabNavigation</Text>
    </View>
  )
}
