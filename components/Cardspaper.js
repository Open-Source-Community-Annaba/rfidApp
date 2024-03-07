import * as React from 'react';
import { Avatar, Button, Card, PaperProvider, Text,Portal,Modal } from 'react-native-paper';










function Cardspaper (Cardprops) {

  const LeftContent = props => <Avatar.Icon {...props} icon={Cardprops.icon} />

const showModal = () => setVisible(true);
const [visible, setVisible] = React.useState(false);


const hideModal = () => setVisible(false);
const containerStyle = {backgroundColor: 'white', padding: 50};


    return(
        <PaperProvider>


        <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text variant='titleLarge' >Incident reported : ) </Text>
        </Modal>
        </Portal>
    



      <Card>
        <Card.Title  title={Cardprops.class} subtitle={Cardprops.notifType} left={LeftContent} />
        <Card.Content>
          <Text  style={{paddingBottom:5 ,color:'#000000' , fontWeight:'bold'}} variant="titleLarge"  >{Cardprops.title}</Text>
          <Text style={{paddingTop:2,paddingBottom:8}} variant="bodyMedium">{Cardprops.content}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: Cardprops.img }} />
        <Card.Actions>
          <Button onPress={
            showModal
          } 
          >Report</Button>
          <Button>Done</Button>
        </Card.Actions>
      </Card>
    
      </PaperProvider>
    
    )


}

    


export default Cardspaper;