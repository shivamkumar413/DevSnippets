import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useRouter } from 'expo-router'
import { createSnippet } from '@/db/repository/snippet.repository'
import { db } from '@/db/dbConfig'

export default function SearchBar(): React.ReactNode {

    const router = useRouter();

    async function handleAddPress(){

      const snippetId = await createSnippet();
      router.push({
        pathname : `/Snippets/[SnippetId]`,
        params : {
          SnippetId : String(snippetId)
        }
      })
    }

    async function handleSearchPress(){
      // Conosole.log("Search Pressed")
    }

  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.searchIcon}
        onPress={handleSearchPress}
      >
        <MaterialIcons name="search" color="#ffffff" size={24} />
      </Pressable>
      <View style={styles.searchBar}>

      </View>

      <Pressable 
        style={styles.addIcon}
        onPress={handleAddPress}
      >
        <AntDesign name="plus" color="#ffffff" size={24} />
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    searchIcon : {
        padding : 10,
        backgroundColor : 'gray',
        borderRadius : 25,
        marginHorizontal : 10,
        elevation : 5,
    },
    searchBar : {},
    addIcon : {
        padding : 10,
        backgroundColor : 'gray',
        borderRadius : 25,
        marginHorizontal : 10,
        elevation : 5,
    }
})