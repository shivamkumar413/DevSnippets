import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getSnippetById, updateSnippet } from '@/db/repository/snippet.repository';

type Prop = {
    id : string | string[]
}

export default function CodeDescription({id} : Prop) {

    const [description,setDescription] = useState<string>();

    useEffect(()=>{
        const snippetId = Array.isArray(id) ? id[0] : id;
            const numberId = Number(snippetId);
        
            if(!snippetId || Number.isNaN(numberId)){
                return;
            }
        
        const timerId = setTimeout(async ()=>{
            try {
                await updateSnippet({id : numberId,description : description});
                console.log("Successfully updated")
            } catch (error) {
                console.log("Error while updating desc : ",error);
            }
            
        },1000)
        
        return () => clearTimeout(timerId);
    },[description,id])

    useEffect(()=>{
        async function fetchSnippetById(){
            const numberId = Number(id)
            const data  = await getSnippetById(numberId);
            //console.log(data)
            // @ts-ignore
            setDescription(data.description)
        }

        fetchSnippetById()
    },[])

  return (
    <View style={styles.container}>
      <TextInput 
        multiline
        value={description}
        onChangeText={setDescription}
        style={styles.descriptionInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginHorizontal : 15,
    },
    descriptionInput : {
        color: '#FFFFFF',
        fontSize: 15,
        lineHeight: 24,
        textAlignVertical: 'top',
    }
})