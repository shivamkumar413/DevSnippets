import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
export default function TabLayout(){
    return(
        <Tabs
            screenOptions={{
                tabBarStyle : {
                    backgroundColor : '#1E1E1E',
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: '#ffffff'
            }}
        >
            <Tabs.Screen 
                
                name="Snippets" 
                options={{
                    headerShown : false,
                    title : 'Home',
                    tabBarIcon: ({ color }) => <Feather size={24} name="home" color={'#ffffff'} />,
                }}
            />
            <Tabs.Screen 
                name="Profile" 
                options={{
                    headerShown : false,
                    tabBarIcon: ({ color }) => <AntDesign size={24} name="user" color={'#ffffff'} />,
                }}
            />
        </Tabs>
    )
}