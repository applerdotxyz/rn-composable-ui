// @generated: @expo/next-adapter@2.1.0
import { useRouting } from 'expo-next-react-navigation';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Test() {
  const { goBack } = useRouting()

  return (
    <View style={styles.container}>
      <Text style={styles.text} title='Test!' />
      <Button title="👈 Go back" onPress={() => goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});