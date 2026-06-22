import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'

export default function ModalOptionsHeader({snippetModalTitle} : {snippetModalTitle : string | null}) {
  return (
    <View style={styles.modalHeaderContainer}>
      <Feather 
        name="file-text"  
        size={23} 
        style={styles.fileIcon}
    />
      {
        snippetModalTitle ?
        <Text style={styles.titleText}>{snippetModalTitle}</Text>
        :   
        <Text style={styles.titleText}>Untitled</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
    modalHeaderContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
        marginVertical : 20,
        marginHorizontal : 15
    },
    titleText : {
        color : '#E6E6E6',
        fontSize : 16,
        fontWeight : '500'
    },
    fileIcon : {
        padding : 5,
        backgroundColor : 'gray',
        borderRadius : 8,
    }
})