import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { deleteSnippet, updateSnippet } from '@/db/repository/snippet.repository'

type Prop = {
    id : number,
    setIsOptionsModal : (isOptionsModal : boolean)=>void
}

export default function ModalOptionsContent({id,setIsOptionsModal} : Prop) {

    async function handleDeletePress(){
        const response = await deleteSnippet(id);
        setIsOptionsModal(false)
    }

    async function handleAddToFavouritesPress(){
        // Logic to add the snippet to favourites
        const response = await updateSnippet({id : id,favorite : 1});
        setIsOptionsModal(false)
    }

  return (
    <View style={styles.container}>
        <Pressable 
            style={styles.contentContainer}
            onPress={handleAddToFavouritesPress}
        >
            <MaterialCommunityIcons name="star-outline" color="#E6E6E6" size={24} />
            <Text style={styles.contentText}>Add to Favourites</Text>
        </Pressable>
        <View style={styles.contentContainer}>
            <Ionicons name="duplicate-outline" color="#E6E6E6" size={24} />
            <Text style={styles.contentText}>Duplicate</Text>
        </View>
        <View style={styles.contentContainer}>
            <MaterialCommunityIcons name="arrow-right-top" color="#E6E6E6" size={22} />
            <Text style={styles.contentText}>Move to</Text>
        </View>
        <Pressable 
            style={styles.contentContainer}
            onPress={handleDeletePress}
        >
            <Ionicons name="trash-outline" color="red" size={24} />
            <Text 
                style={StyleSheet.compose(
                    styles.contentText,
                    {color : 'red'}
                )}
            >
                Delete
            </Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        marginHorizontal : 15,
        backgroundColor : '#161616',
        borderRadius : 10,
        borderWidth : 0.3,
        borderColor : 'gray'
    },
    contentContainer : {
        flexDirection : 'row',
        paddingVertical : 10,
        paddingHorizontal : 10,
        alignItems : 'center',
        gap : 12,
        borderBottomWidth : 0.3,
        borderColor : 'gray'
    },
    contentText : {
        color : '#E6E6E6',
        fontSize : 15,
        fontWeight : '400'

    }
})