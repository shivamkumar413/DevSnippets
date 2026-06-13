import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function SnippetPage() {
    const insets = useSafeAreaInsets();
  return (
    <ScrollView
        style={StyleSheet.compose(
            styles.container,
            {
                paddingTop : insets.top
            }
        )}
    >
      <Text>SnippetPage</Text>
      <TextInput 
        style={styles.titleInput}
        placeholder='Title'
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    titleInput : {
        flex : 1,
        paddingVertical : 15,
        fontSize : 28,
        backgroundColor : 'red'
    }
})