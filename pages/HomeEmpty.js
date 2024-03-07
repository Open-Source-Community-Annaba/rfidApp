import React from 'react'
import TestCarouss from '../components/TestCaroussa'
import GestureHandlerRootView from 'react-native-gesture-handler';

export default function HomeEmpty() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

<TestCarouss/>
</GestureHandlerRootView>

         
  )
}