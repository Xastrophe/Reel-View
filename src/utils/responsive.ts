import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Based on iPhone 14 Pro Max dimensions (428 x 926)
const BASE_WIDTH = 428;
const BASE_HEIGHT = 926;

// Scale factor for width and height
const widthScale = SCREEN_WIDTH / BASE_WIDTH;
const heightScale = SCREEN_HEIGHT / BASE_HEIGHT;

// Function to normalize font size
export const normalizeFont = (size: number): number => {
  const newSize = size * widthScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Function to normalize width
export const normalizeWidth = (size: number): number => {
  return Math.round(PixelRatio.roundToNearestPixel(size * widthScale));
};

// Function to normalize height
export const normalizeHeight = (size: number): number => {
  return Math.round(PixelRatio.roundToNearestPixel(size * heightScale));
};

// Function to normalize padding/margin
export const normalizeSpacing = (size: number): number => {
  return Math.round(PixelRatio.roundToNearestPixel(size * Math.min(widthScale, heightScale)));
};

// Function to get responsive font size based on screen size
export const getResponsiveFontSize = (size: number): number => {
  const scale = Math.min(widthScale, heightScale);
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

// Function to get responsive padding/margin
export const getResponsiveSpacing = (size: number): number => {
  const scale = Math.min(widthScale, heightScale);
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

// Function to get responsive width percentage
export const getWidthPercentage = (percentage: number): number => {
  return (SCREEN_WIDTH * percentage) / 100;
};

// Function to get responsive height percentage
export const getHeightPercentage = (percentage: number): number => {
  return (SCREEN_HEIGHT * percentage) / 100;
}; 