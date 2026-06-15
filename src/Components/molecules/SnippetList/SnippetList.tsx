import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Snippet } from '@/db/repository/snippet.repository'

export default function SnippetList({snippetList} : {snippetList : Snippet[] | null}) {
  return (
    <FlatList 
        data={snippetList}
        // @ts-ignore
        keyExtractor={(item) =>item?.id}
        renderItem={({item})=>(
            <Pressable style={styles.snippetContainer}>
                <Text style={{color : '#ffffff'}}>{item.id}</Text>
                <Text style={{color : '#E6E6E6'}}>{item.title}</Text>
            </Pressable>
        )}
    />
  )
}

const styles = StyleSheet.create({
    snippetContainer : {
        flexDirection : 'row',
        backgroundColor : '#252525',
        marginVertical : 4,
        borderWidth : 1,
        borderColor : '#323232',
        borderRadius : 5,
        marginHorizontal : 5,
        paddingVertical : 5,
        paddingHorizontal : 10,
        color : '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
        
    }
})