import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import RfidApp from './App';
import { NavigationContainer } from '@react-navigation/native';

export default function Main() {
  return (

    <NavigationContainer>
      <PaperProvider>
        <RfidApp />
      </PaperProvider>
    </NavigationContainer>




  );
}

AppRegistry.registerComponent(appName, () => RfidApp);