import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function CodeDescription() {
  return (
    <View>
      <TextInput 
        multiline
        style={styles.titleInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    titleInput : {
        
    }
})