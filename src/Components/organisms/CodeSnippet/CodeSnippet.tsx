import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function CodeSnippet() {
  return (
    <View style={styles.container}>
      <TextInput 
        multiline
        style={styles.codeInput}
        placeholder='//Write your code here'
        placeholderTextColor={'#D4D4D4'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#323232',
        padding: 16,
    },
    codeInput : {
        color : '#D4D4D4',
        fontSize: 14,
        lineHeight: 22,
        fontFamily: 'monospace',
        textAlignVertical: 'top',
    },

})