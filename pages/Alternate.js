import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouting } from 'expo-next-react-navigation'

export default function Alternate() {
  const { goBack } = useRouting()
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Alternate Page
      </Text>

      <Button style={styles.link} accessibilityRole="link" onPress={() => {
        goBack()
      }} title="Go Back" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: 'blue',
  },
})