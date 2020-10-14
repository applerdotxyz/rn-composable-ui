// Use next.js page for the mobile app
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Alternate from './pages/Alternate';
import Header from './pages/components/Header';
import Test from './pages/Test';
import Index from './pages/index';
import First from './pages/first';

// See the pages/folder for the next.js routes
// everything else is confined in this file :)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        margin: 20,
    },
})

function Button({ text, onPress }: { text: string; onPress?: () => void }) {
    return (
        <Text
        style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'black',
            color: 'white',
            margin: 20,
        }}
        onPress={onPress}
        >
      {text}
    </Text>
  )
}

const AppNavigator = createStackNavigator({
    'first': First,
    'index': Index,
    'Alternate': Alternate,
    'Test': Test,
  })
  
  
export default createAppContainer(AppNavigator)