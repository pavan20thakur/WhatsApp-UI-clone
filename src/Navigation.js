import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {Feather, Entypo} from 'react-native-vector-icons'
import Chats from './screens/Chats';
import Calls from './screens/Calls';
import Status from './screens/Status';
import Community from './screens/Community';
import { TabBarIndicator } from 'react-native-tab-view';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator 
    initialRouteName='Chats'
    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarIndicatorStyle: {backgroundColor: 'white'},
      tabBarLabelStyle: {
        fontWeight: 'bold'
      },
      tabBarStyle: {
        backgroundColor: '#0e806a'
      }

    }}
    >
      <Tab.Screen 
              name= 'Community'
              component = {Community}
              options={{
                tabBarIcon: ({ color}) => (
                  <Feather name='settings' size={20} color={color }/>
                ),
                tabBarLabelStyle : styles.tabBarLabel
              }}
      />
      <Tab.Screen 
              name= 'Chats'
              component = {Chats}
      />
      <Tab.Screen 
              name= 'Status'
              component = {Status}
      />
      <Tab.Screen 
              name= 'Calls'
              component = {Calls}
              options={{
                tabBarIcon: ({ color}) => (
                  <Entypo name='chat' size={20} color={color }/>
                ),
                tabBarLabelStyle : styles.tabBarLabel
              }}
      />


    </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabBarLabel:{
      display: 'none'
    }
  });