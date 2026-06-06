import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
export default function TabLayout(){
    return(
        <Tabs>
            <Tabs.Screen 
                name="index" 
                options={{
                    headerShown : false,
                    tabBarIcon: ({ color }) => <Feather size={24} name="home" color={color} />,
                }}
            />
            <Tabs.Screen 
                name="Profile" 
                options={{
                    headerShown : false,
                    tabBarIcon: ({ color }) => <AntDesign size={24} name="user" color={color} />,
                }}
            />
        </Tabs>
    )
}