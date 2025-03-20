import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

const loadFonts = () => {
  return Font.loadAsync({
    'Open-Sans': require('../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf'),
  });
};

const loadImages = () => {
  const images = [
    require('../assets/img/logo.png'),
    // Add more images here
  ];

  const cacheImages = images.map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  return Promise.all(cacheImages);
};

const loadAssets = async () => {
  await loadFonts();
  await loadImages();
};

const RootLayout = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadAssets();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    };

    prepare();
  }, []);

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Stack />;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RootLayout;