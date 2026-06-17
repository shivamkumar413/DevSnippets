import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Snippet } from '@/db/repository/snippet.repository'
import { useRouter } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Feather from '@expo/vector-icons/Feather'

export default function SnippetList({snippetList} : {snippetList : Snippet[] | null}) {

    const router = useRouter()
    function handleNavigationPress(id : number){
        router.navigate({
            pathname : `/Snippets/[SnippetId]`,
            params : {
                SnippetId : String(id)
            }
        })
    }
  return (
    <FlatList 
        data={snippetList}
        // @ts-ignore
        keyExtractor={(item) =>item?.id}
        renderItem={({item})=>(
            <Pressable 
                style={styles.snippetContainer}
                onPress={()=>handleNavigationPress(item?.id)}
            >
                <Feather name="file-text" color="#E6E6E6" size={23} />
                <Text style={styles.titleText}>{item.title}</Text>
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
        alignItems : 'center'
        
    },
    titleText : {
        color : '#E6E6E6',
        marginHorizontal : 10,
        fontSize : 16,
        fontWeight : '600',
    }
})