import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { 
    Image, 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity,
    ImageSourcePropType 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { 
    normalizeFont, 
    normalizeWidth, 
    normalizeHeight, 
    normalizeSpacing,
    getWidthPercentage,
    getHeightPercentage 
} from '../../src/utils/responsive';

export default function DashboardHome() {
    const router = useRouter();
    const userName = "Eric";
    const [imageError, setImageError] = useState(false);
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
                <Text style={styles.actionTitle}>Quick Actions</Text>
                <View style={styles.cardsContainer}>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => router.push('/dashboard/pond-list')}
                    >
                        <MaterialCommunityIcons name="fish" size={normalizeWidth(40)} color="#FFFFFF" />
                        <Text style={styles.cardText}>Ponds</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => router.push('/dashboard/parameters')}
                    >
                        <MaterialCommunityIcons name="chart-line" size={normalizeWidth(40)} color="#FFFFFF" />
                        <Text style={styles.cardText}>Parameters</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.card}
                        onPress={() => router.push('/dashboard/add-pond')}
                    >
                        <AntDesign name="plus" size={normalizeWidth(40)} color="#FFFFFF" />
                        <Text style={styles.cardText}>Add Pond</Text>
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
        paddingTop: normalizeSpacing(20),
        paddingHorizontal: normalizeSpacing(20),
    },
    logoContainer: {
        width: normalizeWidth(100),
        height: normalizeWidth(100),
        borderRadius: normalizeWidth(50),
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: normalizeSpacing(16),
    },
    logo: {
        width: normalizeWidth(60),
        height: normalizeWidth(60),
    },
    welcomeText: {
        fontSize: normalizeFont(24),
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: normalizeSpacing(8),
    },
    subTitle: {
        fontSize: normalizeFont(16),
        color: '#888888',
        marginBottom: normalizeSpacing(24),
    },
    mainImageContainer: {
        marginHorizontal: normalizeSpacing(20),
        borderRadius: normalizeSpacing(24),
        overflow: 'hidden',
        height: getHeightPercentage(20),
        marginBottom: normalizeSpacing(32),
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
        fontSize: normalizeFont(16),
        fontWeight: '500',
        marginBottom: normalizeSpacing(8),
    },
    placeholderSubText: {
        color: '#444444',
        fontSize: normalizeFont(14),
    },
    actionSection: {
        paddingHorizontal: normalizeSpacing(20),
    },
    actionTitle: {
        fontSize: normalizeFont(18),
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: normalizeSpacing(24),
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        width: getWidthPercentage(28),
        aspectRatio: 0.9,
        backgroundColor: '#2A2A2A',
        borderRadius: normalizeSpacing(20),
        padding: normalizeSpacing(16),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        color: '#FFFFFF',
        fontSize: normalizeFont(14),
        fontWeight: '500',
        textAlign: 'center',
        marginTop: normalizeSpacing(12),
    },
}); 