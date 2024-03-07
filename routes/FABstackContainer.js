import React from 'react'
import ScanScreen from '../components/QRscannrfid';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



export default function FABstackContainer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScanQR" component={ScanScreen} />
    </Stack.Navigator>
  )
}