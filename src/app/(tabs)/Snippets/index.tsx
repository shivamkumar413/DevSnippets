import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeader from '@/Components/molecules/HomeHeader/HomeHeader'
import { getAllSnippets, Snippet } from '@/db/repository/snippet.repository'
import SearchBar from '@/Components/organisms/SearchBar/SearchBar';

export default function index() {

  const [snippets,setSnippets] = useState<Snippet[] | null>(null);


  useEffect(()=>{
    async function getSninppet(){
        const snippets = await getAllSnippets();;
        setSnippets(snippets)
    }
    
    getSninppet();
  },[snippets])


  return (
    <View style={styles.container}>
      <HomeHeader />
      <SearchBar />
      <FlatList 
        data={snippets}
        renderItem={({item})=>(
          <View>
            <Text>{item.id}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'gray'
  }
})