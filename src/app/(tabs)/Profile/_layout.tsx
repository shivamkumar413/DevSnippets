import { Stack } from "expo-router";

export default function ProfileLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="Profile"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}