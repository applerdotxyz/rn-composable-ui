// @generated: @expo/next-adapter@2.1.0
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';

export default function index(props) {
  
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style  ={styles.text}>
        Expo for Web & Next.js
      </Text>

      <Header />

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
})