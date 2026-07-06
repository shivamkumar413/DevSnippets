import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    token: any;
};
const theme = {
  keyword: "#C586C0",
  string: "#CE9178",
  number: "#B5CEA8",
  comment: "#6A9955",
  function: "#DCDCAA",
  operator: "#D4D4D4",
  punctuation: "#D4D4D4",
};

export default function TokenRenderer({token} : Props) : React.ReactNode{

    if (typeof token === "string") {
        return <Text>{token}</Text>;
    }

    if (Array.isArray(token.content)) {
        return (
            <Text>
                
            {token?.content?.map((t : any, index : number) => (
                <TokenRenderer key={index} token={t} />
            ))}
        </Text>
        );
    }


  return (
    <Text
        // @ts-ignore
        style={{ color: theme[token.type] ?? "#D4D4D4" }}
    >
            <TokenRenderer token={token.content} />
    </Text>

  )
}

const styles = StyleSheet.create({})