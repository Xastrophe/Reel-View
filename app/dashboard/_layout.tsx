import React from 'react';
import { Stack } from 'expo-router';
import { PondProvider } from '../../src/lib/context/PondContext';

const RootLayout = () => {
  return (
    <PondProvider>
      <Stack> 
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="pond-list" options={{ headerShown: false }} />
        <Stack.Screen name="add-pond" options={{ headerShown: false }} />
        <Stack.Screen name="parameters" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </PondProvider>
  );
};

export default RootLayout;