import React from 'react';
import { Stack } from 'expo-router';


const RootLayout = () => {
  
  return (<Stack> 
    <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    <Stack.Screen name="sign-in" options={{ headerShown: false }} />
    <Stack.Screen name="welcome" options={{ headerShown: false }} />
  </Stack>);
};



export default RootLayout;