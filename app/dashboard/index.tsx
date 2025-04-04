import { useRouter } from 'expo-router';
import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity,
    Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Dashboard() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            
            {/* Header */}
            <View style={styles.header}>
                <Image 
                    source={require('../../assets/img/logo.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.headerTitle}>DASHBOARD</Text>
            </View>

            {/* Grid */}
            <View style={styles.grid}>
                {/* Pond List Card */}
                <TouchableOpacity 
                    style={styles.card}
                    onPress={() => router.push('/dashboard/pond-list')}
                >
                    <MaterialCommunityIcons name="fish" size={40} color="#FFD700" />
                    <Text style={styles.cardTitle}>Pond List</Text>
                    <Text style={styles.cardDescription}>View and manage your ponds</Text>
                </TouchableOpacity>

                {/* Add Pond Card */}
                <TouchableOpacity 
                    style={styles.card}
                    onPress={() => router.push('/dashboard/add-pond')}
                >
                    <MaterialCommunityIcons name="plus-circle" size={40} color="#4CAF50" />
                    <Text style={styles.cardTitle}>Add Pond</Text>
                    <Text style={styles.cardDescription}>Create a new pond</Text>
                </TouchableOpacity>

                {/* Settings Card */}
                <TouchableOpacity 
                    style={styles.card}
                    onPress={() => router.push('/dashboard/settings')}
                >
                    <MaterialCommunityIcons name="cog" size={40} color="#64B5F6" />
                    <Text style={styles.cardTitle}>Settings</Text>
                    <Text style={styles.cardDescription}>Configure your preferences</Text>
                </TouchableOpacity>

                {/* Profile Card */}
                <TouchableOpacity 
                    style={styles.card}
                    onPress={() => router.push('/dashboard/profile')}
                >
                    <MaterialCommunityIcons name="account" size={40} color="#BA68C8" />
                    <Text style={styles.cardTitle}>Profile</Text>
                    <Text style={styles.cardDescription}>View your profile</Text>
                </TouchableOpacity>
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
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingTop: 10,
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    grid: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        aspectRatio: 1,
        backgroundColor: '#2A2A2A',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        marginTop: 12,
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666666',
        textAlign: 'center',
    },
}); 