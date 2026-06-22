import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CodeSnippet from '@/Components/organisms/CodeSnippet/CodeSnippet';
import SnippetTitle from '@/Components/molecules/SnippetTitle/SnippetTitle';
import CodeDescription from '@/Components/molecules/CodeDescription/CodeDescription';
import { useLocalSearchParams } from 'expo-router';

export default function SnippetPage() {
    const insets = useSafeAreaInsets();
    const { SnippetId } = useLocalSearchParams()
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
      <SnippetTitle 
        id={SnippetId}
      />
      <CodeSnippet />
      <CodeDescription 
        id={SnippetId}
      />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#191919'
    },
    titleInput : {
        flex : 1,
        paddingVertical : 15,
        fontSize : 28,
        backgroundColor : 'red'
    }
})
