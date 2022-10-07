import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(s => s.user);
  const isLoading = useSelector(s => s.isAuthLoading);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
      <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown:false,
            title: 'LoginPage',
          }}
        />
        ):( <>
        <Stack.Screen
          name="ProductPage"
          component={Products}
          options={{
            title: 'Dükkan',
            headerStyle: {backgroundColor: '#64b5f6'},
            headerTitleStyle: {color: 'white'},
          }}
        />
        <Stack.Screen
          name="DetailsPage"
          component={Detail}
          options={{
            title: 'Detay',
            headerStyle: {backgroundColor: '#64b5f6'},
            headerTitleStyle: {color: 'white'},
            headerTintColor:'white'
          }}
        />
        </>
      )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
