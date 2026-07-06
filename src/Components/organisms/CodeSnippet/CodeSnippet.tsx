import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import LanguagePicker from '@/Components/molecules/LanguagePicker/LanguagePicker'
import HighlightedCode from '../HighlightedCode/HighlightedCode'
import Feather from '@expo/vector-icons/Feather'
import AntDesign from '@expo/vector-icons/AntDesign'

export default function CodeSnippet() {
  const [language, setLanguage] = useState<string>('javascript')
  const [code,setCode] = useState<string>('')
  const [isEditing,setIsEditing] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <LanguagePicker 
        value={language} 
        onChange={setLanguage} 
      />
      {
        isEditing ?

        <Pressable style={{flex : 1}}>
          <TextInput 
            autoFocus
            multiline
            style={styles.codeInput}
            placeholder='//Write your code here'
            placeholderTextColor={'#D4D4D4'}
            value={code}
            onChangeText={setCode}
          />

          <AntDesign name="check" color="#000" size={24} 
            onPress={()=>{
              setIsEditing(false)
            }}
          />
        </Pressable>
        :
        
        <HighlightedCode 
          code={code}
          setIsEditing={setIsEditing}
        />
        
      }
      
  
      
    
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
        marginHorizontal : 15,
    },
    codeInput : {
        
        fontSize: 14,
        lineHeight: 22,
        fontFamily: "monospace",

        textAlignVertical: "top",
    },

})
