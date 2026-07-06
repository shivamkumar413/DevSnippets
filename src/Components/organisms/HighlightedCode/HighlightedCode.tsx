import Prism, { languages } from 'prismjs'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import "prismjs/components/prism-javascript";
import TokenRenderer from '@/Components/molecules/TokenRenderer/TokenRenderer';

type Props = {
    code : string,
    setIsEditing : (isEditing : boolean) => void
}

export default function HighlightedCode({ code,setIsEditing } : Props) {

    const tokens = Prism.tokenize(
        code,
        Prism.languages.javascript
    )

  return (
    <Pressable onPress={()=>setIsEditing(true)}>
        <Text>
            // Write your code here
            {tokens.map((token,index)=>(
                <TokenRenderer 
                    key={index}
                    token={token}
                />
            ))}
        </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({})