'use strict';
import { useState } from 'react';
import React, { Component } from 'react';
import { Linking } from 'react-native';
import {

  StyleSheet,
  Text,
  TouchableOpacity,
  
} from 'react-native';
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { View } from 'react-native';

export default function ScanScreen (){

  const [visible, setVisible] = React.useState(false);  
  const [idst, setidst] = React.useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};


  const onSuccess = e => {
    Linking.openURL(e.data)

  };

  
    return (
 
    
      <QRCodeScanner
      
    
        vibrate="true"
        onRead={onSuccess}
        //flashMode={RNCamera.Constants.FlashMode.torch}
        bottomContent={
          <Text> your is is {idst}</Text>
      
        }

      />


  




    );
  
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    bottom:'20px' 
  }
});

