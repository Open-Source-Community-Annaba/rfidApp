import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { useState } from 'react';
import ScanScreen from '../../components/QRscannrfid';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationsScreen from './NotificationsScreen';
import ScanRFID from '../../components/ScanRFID';
import HomeEmpty from '../../pages/HomeEmpty';
const Stack = createStackNavigator();



export default function HomeScreen({ navigation }) {

  const [state, setState] = React.useState({ open: false });

  const [visible,setVisible] = useState(true)

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (

    <PaperProvider>
      <Portal>
        <FAB.Group
          open={open}
          visible={visible}
          icon={open ? 'school' : 'plus'}
          actions={[
            {
              icon: 'plus',
              label: 'Add a class',
              onPress: () =>   navigation.navigate("test"),

            },



            {
              icon: 'cellphone-nfc',
              label: 'Scan RFID',
              onPress: () => {
                navigation.navigate("ScanRFID"),
                setVisible(false)
            }
            },

            {
              icon: 'qrcode',
              label: 'Scan QR',
              onPress: () => {navigation.navigate("ScanQR"),
              setVisible(false)
            }
            },

          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
      <Stack.Navigator>
        <Stack.Screen name="test" component={HomeEmpty}  />
        <Stack.Screen name="ScanQR" component={ScanScreen} />
        <Stack.Screen name="ScanRFID" component={ScanRFID} />
      </Stack.Navigator>




    </PaperProvider>











  )
}