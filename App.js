import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import All from './Screens/All';
import Business from './Screens/Business';
import HealthScreen from './Screens/HealthScreen';
import SportsScreen from './Screens/SportsScreen';
import TechScreen from './Screens/TechScreen';
import { Icon } from 'react-native-elements/dist/icons/Icon';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="All" component ={All}
    options={{
        headerTintColor: '#000000',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:30
        },
      tabBarIcon : (props) =>(
        <Icon type= "font-awesome-5" name = 'home' color={props.color}/>
      )
    }}
    ></Tab.Screen>
    <Tab.Screen name = 'Business' component ={Business}
    options={{
      tabBarIcon : (props) =>(
        <Icon type= "font-awesome-5" name = 'dollar-sign' color={props.color}/>
      )
    }}
    ></Tab.Screen>
    <Tab.Screen name = 'Health' component ={HealthScreen}
    options={{
      tabBarIcon : (props) =>(
        <Icon type= "font-awesome-5" name = 'heart' color={props.color}/>
      )
    }}
    ></Tab.Screen>
    <Tab.Screen name = 'Sports' component ={SportsScreen}
    options={{
      tabBarIcon : (props) =>(
        <Icon type= "font-awesome-5" name = 'volleyball-ball' color={props.color}/>
      )
    }}
    ></Tab.Screen>
    <Tab.Screen name = 'Tech' component ={TechScreen}
    options={{
      tabBarIcon : (props) =>(
        <Icon type= "font-awesome-5" name = 'microchip' color={props.color}/>
      )
    }}
    ></Tab.Screen>
  </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
