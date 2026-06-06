import { initializeDatabase } from "@/db/init";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function RootLayout() {

  const [isdbReady,setIsdbReady] = useState(false);

  useEffect(()=>{
    async function init(){
      try {
        await initializeDatabase();
        setIsdbReady(true);
        console.log("Succesfully connected to db")
      } catch (error) {
        console.log("Error while initializing db");
        throw error;
      }
    }
    init();
  },[])

  if(!isdbReady){
    return(
      <View>
          <Text>Connecting to db...</Text>
      </View>
    )
  }

  return(
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown : false}}/>
    </Stack>
  )
}
