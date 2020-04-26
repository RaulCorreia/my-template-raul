import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';

import Login from './pages/auth/login';
import Home from './pages/principal/home';
import Second from './pages/principal/second';
import Third from './pages/principal/third';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{header: () => null}}>
    <AuthStack.Screen name="Login" component={Login}/>
  </AuthStack.Navigator>
);


const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (<Icon style={{ color: color }} type="FontAwesome" name="feed" />)  }} />
    <Tabs.Screen name="Second" component={Second} options={{ tabBarLabel: 'Second', tabBarIcon: ({ color, size }) => (<Icon style={{ color: color }} type="FontAwesome" name="camera" />)  }} />
    <Tabs.Screen name="Third" component={Third} options={{ tabBarLabel: 'Third', tabBarIcon: ({ color, size }) => (<Icon style={{ color: color }} type="MaterialCommunityIcons" name="dots-horizontal" />)  }} />
  </Tabs.Navigator>
);

export default function Routes() {

  const stateLogin = useSelector(state => state.PrincipalReducer.stateLogin);

  return (
    <NavigationContainer>
      {stateLogin? 
        <TabsScreen/>
      :
        <AuthStackScreen/>
      }
    </NavigationContainer>
  );
}