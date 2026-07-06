import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeader from '@/Components/molecules/HomeHeader/HomeHeader'
import { getAllSnippets, getFiveLatestSnippets, Snippet } from '@/db/repository/snippet.repository'
import SearchBar from '@/Components/organisms/SearchBar/SearchBar';
import SnippetList from '@/Components/molecules/SnippetList/SnippetList';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useRouter } from 'expo-router';


export default function index() {

  const [snippets,setSnippets] = useState<Snippet[] | null>(null);
  const router = useRouter();
  useEffect(()=>{
    async function getSninppet(){
        const snippets = await getFiveLatestSnippets();
        setSnippets(snippets)
    }
    getSninppet();
  },[snippets])

  function handleViewMoreClick(){
        router.navigate({
            pathname : '/Snippets/AllSnippets'
        })
  }


  return (
    <View style={styles.container}>
      <View>
        <HomeHeader />
        <SearchBar />

        <SnippetList 
          snippetList={snippets}
        />
      </View>

      
      <Pressable
        style={styles.footerContainer}
        onPress={handleViewMoreClick}
      >
        <SimpleLineIcons
          name="options" 
          color="gray"
          size={18}
        />
        <Text style={styles.footerText}>View more</Text>
      </Pressable>
      
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    backgroundColor : '#191919'
  },
  footerContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        marginHorizontal : 17,
        gap : 10,
        marginVertical : 8,
    },
    footerText : {
        color : '#E6E6E6',
        fontSize : 15

    }
})