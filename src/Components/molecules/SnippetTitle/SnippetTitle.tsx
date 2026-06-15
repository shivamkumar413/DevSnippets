import { StyleSheet, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { updateSnippet } from '@/db/repository/snippet.repository';

type Prop = {
    id : string | string[]
}

export default function SnippetTitle({id} : Prop) {

  const [title,setTitle] = useState<string>('');

  useEffect(()=>{
    const snippetId = Array.isArray(id) ? id[0] : id;
    const numberId = Number(snippetId);

    if(!snippetId || Number.isNaN(numberId)){
        return;
    }

    const timerId = setTimeout(async ()=>{
        await updateSnippet({id : numberId,title : title});
    },2000)

    return () => clearTimeout(timerId);
  },[id,title])

  return (
    <View>
      <TextInput 
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
        placeholder='Title'
      />
    </View>
  )
}

const styles = StyleSheet.create({
    titleInput : {
        flex : 1,
        paddingVertical : 15,
        fontSize : 28,
        backgroundColor : 'red'
    }
})
