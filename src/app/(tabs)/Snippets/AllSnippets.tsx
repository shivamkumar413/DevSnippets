import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getAllSnippets, Snippet } from '@/db/repository/snippet.repository';
import SnippetList from '@/Components/molecules/SnippetList/SnippetList';

export default function AllSnippets() {
    const [snippets,setSnippets] = useState<Snippet[] | null>(null);

    useEffect(()=>{
        async function getSninppet(){
            const snippets = await getAllSnippets();
            setSnippets(snippets)
        }
        getSninppet();
    },[])
    const insets = useSafeAreaInsets();

  return (
    <View 
        style={styles.container}>
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