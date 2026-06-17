import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import LanguagePicker from '@/Components/molecules/LanguagePicker/LanguagePicker'

export default function CodeSnippet() {
  const [language, setLanguage] = useState('javascript')

  return (
    <View style={styles.container}>
      <LanguagePicker 
        value={language} 
        onChange={setLanguage} 
      />
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
