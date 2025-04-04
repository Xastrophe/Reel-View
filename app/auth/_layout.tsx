import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#1A1A1A' }
            }}
        >
            <Stack.Screen 
                name="welcome"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="sign-in"
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="sign-up"
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    );
}