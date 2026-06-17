import { StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getSnippetById, updateSnippet } from '@/db/repository/snippet.repository';

type Prop = {
    id : string | string[]
}

export default function SnippetTitle({id} : Prop) {

  const [title,setTitle] = useState<string | undefined>('');
  useEffect(()=>{
    const snippetId = Array.isArray(id) ? id[0] : id;
    const numberId = Number(snippetId);

    if(!snippetId || Number.isNaN(numberId)){
        return;
    }
    
    const timerId = setTimeout(async ()=>{
        await updateSnippet({id : numberId,title : title});
    },1000)

    return () => clearTimeout(timerId);
  },[id,title])

  useEffect(()=>{
    async function fetchSnippetById(){
        const numberId = Number(id)
        const data  = await getSnippetById(numberId);
        console.log(data)
        // @ts-ignore
        setTitle(data.title)
    }
    fetchSnippetById();
    
  },[])

  return (
    <View>
      <TextInput 
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
        placeholder='Title'
        placeholderTextColor={'#D4D4D4'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    titleInput : {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '500',
        paddingVertical: 8,
        marginHorizontal: 5,
    }
})
