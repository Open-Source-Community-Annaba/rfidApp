import { SafeAreaView } from 'react-native'
import React, {  useState } from 'react'
import { List,MD3Colors } from 'react-native-paper'
import { Drawer } from 'react-native-paper'
import { ScrollView } from 'react-native'







export default function SettingsScreen (){
  const [active, setActive] = useState('');


    return (
      <ScrollView  >


      
      <Drawer.Section title="Profile Settings">
      <Drawer.Item
      icon={"account"}
        label="Account information"
        active={active === 'Account information'}
        onPress={() => setActive('Account information')}
      />
      <Drawer.Item
      icon={"shield-lock"}
        label="Privacy"
        active={active === 'Privacy'}
        onPress={() => {
          setActive('Privacy')

        }
      }
      />

        <Drawer.Item
        icon={"security"}
        label="Security"
        active={active === 'Security'}
        onPress={() => setActive('Security')}
      />
    </Drawer.Section>


    
    <Drawer.Section title="RFID App Settings">
      <Drawer.Item
      icon={"theme-light-dark"}
        label="Theme"
        active={active === 'Theme'}
        onPress={() => setActive('Theme')}
      />
      
      <Drawer.Item
      icon={"hand-back-left"}
        label="Permissions"
        active={active === 'Permissions'}
        onPress={() => {
        setActive('Permissions')

        }
      }
      />

        <Drawer.Item
        icon={"lock"}
        label="PIN lock"
        active={active === 'PIN lock'}
        onPress={() => setActive('PIN lock')}
      />

      <Drawer.Item
        icon={"information"}
        label="About"
        active={active === 'About'}
        onPress={() => setActive('About')}
      />
    </Drawer.Section>
   

    


    </ScrollView>

    
    )
  
}


/*

      <List.Section>
      <List.Subheader>Seetings</List.Subheader>
      <List.Item 
      title="First Item" 
      left={() => <List.Icon icon="folder" />} />
      <List.Item
        title="Second Item"
        left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
      />
    </List.Section>


*/