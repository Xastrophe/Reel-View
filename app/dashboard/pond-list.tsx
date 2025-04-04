import { Link, useRouter } from 'expo-router';
import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { usePonds } from '../lib/context/PondContext';

export default function PondList() {
    const router = useRouter();
    const { ponds } = usePonds();

    const handleViewParameters = (pondId: string) => {
        router.push(`/dashboard/parameters?id=${pondId}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            
            {/* Header */}
            <View style={styles.header}>
                <Image 
                    source={require('../../assets/img/logo.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.headerTitle}>POND LIST</Text>
            </View>

            {/* Pond List */}
            <ScrollView style={styles.scrollView}>
                {ponds.length === 0 ? (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyStateText}>No ponds yet</Text>
                        <Text style={styles.emptyStateSubText}>Add your first pond using the + button</Text>
                    </View>
                ) : (
                    ponds.map((pond) => (
                        <View key={pond.id} style={styles.pondCard}>
                            <View style={styles.pondHeader}>
                                <Text style={styles.pondName}>{pond.name}</Text>
                                <View style={styles.pondDates}>
                                    <Text style={styles.dateText}>Created on: {pond.createdDate}</Text>
                                    <Text style={styles.dateText}>Total Days: {pond.totalDays} days</Text>
                                </View>
                            </View>

                            <View style={styles.pondDetails}>
                                <Text style={styles.detailText}>
                                    Filled / Capacity: {pond.filled} lt / {pond.capacity} lt L
                                </Text>
                                <Text style={styles.detailText}>
                                    Fishes in Pond: {pond.fishCount}
                                </Text>
                            </View>

                            <TouchableOpacity 
                                style={styles.parametersButton}
                                onPress={() => handleViewParameters(pond.id)}
                            >
                                <Text style={styles.parametersButtonText}>Parameters</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                )}
            </ScrollView>

            {/* Floating Action Button */}
            <TouchableOpacity 
                style={styles.fab}
                onPress={() => router.push('/dashboard/add-pond')}
            >
                <AntDesign name="plus" size={24} color="#FFFFFF" />
            </TouchableOpacity>
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
    scrollView: {
        flex: 1,
        padding: 20,
    },
    pondCard: {
        backgroundColor: '#2A2A2A',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
    },
    pondHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    pondName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    pondDates: {
        alignItems: 'flex-end',
    },
    dateText: {
        fontSize: 14,
        color: '#FFFFFF',
        marginBottom: 4,
    },
    pondDetails: {
        marginBottom: 16,
    },
    detailText: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 8,
    },
    parametersButton: {
        backgroundColor: '#000000',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignSelf: 'center',
    },
    parametersButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    fab: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
    emptyStateText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '600',
        marginBottom: 8,
    },
    emptyStateSubText: {
        fontSize: 14,
        color: '#666666',
    },
}); 