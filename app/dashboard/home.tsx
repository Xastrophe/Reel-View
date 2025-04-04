import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { 
    Image, 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity,
    Dimensions,
    ImageSourcePropType 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 3; // 20px padding on each side, 10px gap between cards

export default function DashboardHome() {
    const router = useRouter();
    const userName = "Eric"; // This should come from your auth context or state management
    const [imageError, setImageError] = useState(false);

    // This should come from your farm data
    const farmPreviewImage: ImageSourcePropType | null = null;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../../assets/img/logo.jpg')}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.welcomeText}>Hello, {userName} 👋</Text>
                <Text style={styles.subTitle}>Welcome to your farm</Text>
            </View>

            {/* Main Image Section */}
            <View style={[styles.mainImageContainer, (!farmPreviewImage || imageError) && styles.mainImagePlaceholder]}>
                {farmPreviewImage && !imageError ? (
                    <Image 
                        source={farmPreviewImage}
                        style={styles.mainImage}
                        resizeMode="cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <View style={styles.placeholderContent}>
                        <Text style={styles.placeholderText}>No preview available</Text>
                        <Text style={styles.placeholderSubText}>Add a pond to see your farm preview</Text>
                    </View>
                )}
            </View>

            {/* Action Section */}
            <View style={styles.actionSection}>
                <Text style={styles.actionTitle}>Please Select The Area of Your Interest</Text>
                
                <View style={styles.cardsContainer}>
                    {/* Add Pond Card */}
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => router.push('/dashboard/add-pond')}
                    >
                        <MaterialCommunityIcons 
                            name="pool" 
                            size={40} 
                            color="#FFFFFF" 
                            style={styles.cardIcon}
                        />
                        <Text style={styles.cardText}>Add Pond</Text>
                    </TouchableOpacity>

                    {/* Pond List Card */}
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => router.push('/dashboard/pond-list')}
                    >
                        <MaterialCommunityIcons 
                            name="format-list-bulleted" 
                            size={40} 
                            color="#FFFFFF" 
                            style={styles.cardIcon}
                        />
                        <Text style={styles.cardText}>Pond List</Text>
                    </TouchableOpacity>

                    {/* Add Fish Card */}
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => router.push('/dashboard/add-fish')}
                    >
                        <MaterialCommunityIcons 
                            name="fish" 
                            size={40} 
                            color="#FFFFFF" 
                            style={styles.cardIcon}
                        />
                        <Text style={styles.cardText}>Add Fish</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    header: {
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    logoContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    logo: {
        width: 60,
        height: 60,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    subTitle: {
        fontSize: 16,
        color: '#888888',
        marginBottom: 24,
    },
    mainImageContainer: {
        marginHorizontal: 20,
        borderRadius: 24,
        overflow: 'hidden',
        height: 200,
        marginBottom: 32,
    },
    mainImagePlaceholder: {
        backgroundColor: '#2A2A2A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainImage: {
        width: '100%',
        height: '100%',
    },
    placeholderContent: {
        alignItems: 'center',
    },
    placeholderText: {
        color: '#666666',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    placeholderSubText: {
        color: '#444444',
        fontSize: 14,
    },
    actionSection: {
        paddingHorizontal: 20,
    },
    actionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 24,
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        width: cardWidth,
        aspectRatio: 0.9,
        backgroundColor: '#2A2A2A',
        borderRadius: 20,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardIcon: {
        width: 40,
        height: 40,
        marginBottom: 12,
    },
    cardText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
}); 