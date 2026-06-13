import { Stack } from "expo-router";

export default function SnippetStackLayout(){
    return(
        <Stack>
            <Stack.Screen 
                name="index" 
                options={{
                    headerShown : false
                }}
            />
            <Stack.Screen 
                name="[SnippetId]" 
                options={{
                    headerShown : false
                }}
            />
        </Stack>
    )
}