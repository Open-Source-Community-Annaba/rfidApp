import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { Modal,Portal,PaperProvider } from 'react-native-paper'
import Cardspaper from '../../components/Cardspaper'



export default function NotificationsScreen ({navigation}) {
    
    return (



      <ScrollView  >



        
        <Cardspaper 
        notifType="Class Reminder"
        icon="school"
        title="PRT at S4" 
        content="Compilation PRT using Jflex Ms.Kherici" 
        class="L1 Group 7"
        img="https://images.pexels.com/photos/5212348/pexels-photo-5212348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        />
 
        <Cardspaper 
        notifType="Alert"
        icon="alert"
        title="Suspective absence" 
        content="An urgent case of a female student not attending class for two weeks" 
        class="L3 Group 5"
        img="https://images.pexels.com/photos/3808818/pexels-photo-3808818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        />
  
     
      </ScrollView>

    )

}


/*
<Button
title='BEDELNI'
onPress={() => navigation.navigate('BenZEBOUCHI')}
/>
      <Button
title='Blmdn'
onPress={() => navigation.navigate('بولمدن')}
/>
*/