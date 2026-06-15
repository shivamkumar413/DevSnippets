import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeader from '@/Components/molecules/HomeHeader/HomeHeader'
import { getAllSnippets, Snippet } from '@/db/repository/snippet.repository'
import SearchBar from '@/Components/organisms/SearchBar/SearchBar';
import SnippetList from '@/Components/molecules/SnippetList/SnippetList';

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
      <SnippetList 
        snippetList={snippets}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#191919'
  }
})