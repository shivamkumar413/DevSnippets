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
                name="AllSnippets" 
                options={{
                    title : 'All Pages',
                    headerStyle : {
                        backgroundColor : '#191919'
                    },
                    headerTintColor : '#ffffff',
                    headerTitleAlign : 'center',
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