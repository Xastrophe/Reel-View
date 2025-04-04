import React from 'react';
import { Stack } from 'expo-router';


const RootLayout = () => {
  
  return (<Stack> 
    <Stack.Screen name="home" options={{ headerShown: false }} />
    <Stack.Screen name="pond-list" options={{ headerShown: false } }/>
    <Stack.Screen name="add-pond" options={{ headerShown: false}} />
    <Stack.Screen name="parameters" options={{ headerShown: false}} />
  </Stack>);
};



export default RootLayout;