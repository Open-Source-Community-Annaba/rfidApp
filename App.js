import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './navigation/screens/HomeScreen';
import NotificationsScreen from './navigation/screens/NotificationsScreen';
import SettingsScreen from './navigation/screens/SettingsScreen';

import {  StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Text,Badge, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





const Tab = createBottomTabNavigator();

function RfidApp() {
  return (

<NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      
        <Tab.Screen
        
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color, size }) => {
            return(
               <View>
                <Badge visible style={{position:"absolute" ,top:"-40%", right:"-40%"}} >12</Badge>
                <Icon name="bell" size={size} color={color} />
                
               </View>
               
               
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />

    </Tab.Navigator>
    </NavigationContainer>


  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default RfidApp;



/*


    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen  name="Home" component={TestScreen} />
        <Tab.Screen  name="Notifications"  component={HomeScreen} />
        <Tab.Screen name="Profile" component={Blmdn} />
        

      </Tab.Navigator>


    </NavigationContainer>



*/