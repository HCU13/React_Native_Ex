import  React, {Component} from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import io from 'socket.io-client';

import ChatScreen from './src/Screen/ChatScreen';
import CreateGroupScreen from './src/Screen/CreateGroupScreen';
import GroupScreen from './src/Screen/GroupScreen';
import SettingsScreen from './src/Screen/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MessageScreen from './src/Screen/MessageScreen';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default class App extends Component {

   render(){
  return (
    <NavigationContainer >
      <Tab.Navigator 
        barStyle={{ backgroundColor: '#e5e5e5' }}
      tabBarOptions={{
        style:{
        }
      }}>
        <Tab.Screen name="Chat" component={MessageStack}  options={() => ({
              tabBarIcon: () => (
                <MaterialCommunityIcons name="chat-outline" size={22} color="black" />
              )
        })}
          />
        <Tab.Screen name="Grup" component={GroupScreen} 
         options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="view-array-outline" size={22} color="black" />
              ),
            }}
          />
        <Tab.Screen name="CreateGrup" component={CreateGroupScreen} options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="view-carousel" size={22} color="black" />
              ),
            }}
          />
           <Tab.Screen name="Settings" component={SettingsScreen} options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="screw-lag" size={30} color="black"  />
              ),
            }}
          />
          
      </Tab.Navigator>
    </NavigationContainer>
    
  );
          }
}

function MessageStack ({navigation})  {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Messages') {
      return false;
    }
    return true;
  };
  return (
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={ChatScreen}    />
        <Stack.Screen name="Messages" component={MessageScreen}  options={({route}) => ({
        title: route.params.userName,
        tabBarVisible: getTabBarVisibility(route),
      })} />
      </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  Flex:{
      flex: 1,
  },
})






