import { useLocalSearchParams, useRouter } from 'expo-router';
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
import { AntDesign, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { usePonds } from '../../src/lib/context/PondContext';

export default function Parameters() {
    const router = useRouter();
    const { id } = useLocalSearchParams();
    const { ponds } = usePonds();
    
    const pond = ponds.find(p => p.id === id);
    
    if (!pond) {
        return null;
    }

    const getStatusColor = (status: string) => {
        switch (status.toUpperCase()) {
            case 'GOOD':
                return '#4CAF50';
            case 'TOO LOW':
                return '#FF0000';
            default:
                return '#FFFFFF';
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image 
                        source={require('../../assets/img/logo.jpg')}
                        style={styles.logo}
                    />
                    <Text style={styles.headerTitle}>{pond.name}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <AntDesign name="close" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            {/* Parameters Section */}
            <View style={styles.content}>
                <View style={styles.updateHeader}>
                    <TouchableOpacity style={styles.parametersButton}>
                        <Text style={styles.parametersButtonText}>PARAMETERS</Text>
                    </TouchableOpacity>
                    <Text style={styles.updateText}>
                        Updated: {pond.parameters.lastUpdated}
                    </Text>
                </View>

                {/* Water Level */}
                <View style={styles.parameterCard}>
                    <View style={styles.parameterHeader}>
                        <Text style={styles.parameterTitle}>WATER LEVEL</Text>
                    </View>
                    <View style={styles.parameterContent}>
                        <MaterialCommunityIcons name="ruler" size={40} color="#FFD700" />
                        <View style={styles.parameterValue}>
                            <Text style={styles.valueText}>
                                {pond.parameters.waterLevel.value}
                                <Text style={styles.unitText}> {pond.parameters.waterLevel.unit}</Text>
                            </Text>
                            <Text style={[styles.statusText, { color: getStatusColor(pond.parameters.waterLevel.status) }]}>
                                {pond.parameters.waterLevel.status} ({'<'}{pond.parameters.waterLevel.threshold}m)
                            </Text>
                            {pond.parameters.waterLevel.status === 'TOO LOW' && (
                                <TouchableOpacity style={styles.actionButton}>
                                    <Text style={styles.actionButtonText}>ADD WATER</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </View>

                {/* Temperature */}
                <View style={styles.parameterCard}>
                    <View style={styles.parameterHeader}>
                        <Text style={styles.parameterTitle}>TEMPERATURE</Text>
                    </View>
                    <View style={styles.parameterContent}>
                        <MaterialCommunityIcons name="thermometer" size={40} color="#FFFFFF" />
                        <View style={styles.parameterValue}>
                            <Text style={styles.valueText}>
                                {pond.parameters.temperature.value}
                                <Text style={styles.unitText}>{pond.parameters.temperature.unit}</Text>
                            </Text>
                            <Text style={[styles.statusText, { color: getStatusColor(pond.parameters.temperature.status) }]}>
                                {pond.parameters.temperature.status} ({pond.parameters.temperature.range})
                            </Text>
                        </View>
                    </View>
                </View>

                {/* pH Level */}
                <View style={styles.parameterCard}>
                    <View style={styles.parameterHeader}>
                        <Text style={styles.parameterTitle}>pH LEVEL</Text>
                    </View>
                    <View style={styles.parameterContent}>
                        <View style={styles.pHIcon}>
                            <Text style={styles.pHIconText}>pH</Text>
                        </View>
                        <View style={styles.parameterValue}>
                            <Text style={styles.valueText}>{pond.parameters.pH.value}</Text>
                            <Text style={styles.statusText}>
                                {pond.parameters.pH.status} ({pond.parameters.pH.range})
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Dissolved O2 */}
                <View style={styles.parameterCard}>
                    <View style={styles.parameterHeader}>
                        <Text style={styles.parameterTitle}>DISSOLVED O₂</Text>
                    </View>
                    <View style={styles.parameterContent}>
                        <View style={styles.o2Icon}>
                            <MaterialCommunityIcons name="molecule" size={40} color="#87CEEB" />
                        </View>
                        <View style={styles.parameterValue}>
                            <Text style={styles.valueText}>
                                {pond.parameters.dissolvedOxygen.value}
                                <Text style={styles.unitText}> {pond.parameters.dissolvedOxygen.unit}</Text>
                            </Text>
                            <Text style={[styles.statusText, { color: getStatusColor(pond.parameters.dissolvedOxygen.status) }]}>
                                {pond.parameters.dissolvedOxygen.status} ({pond.parameters.dissolvedOxygen.range})
                            </Text>
                        </View>
                    </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 10,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
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
    backButton: {
        padding: 8,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    updateHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    parametersButton: {
        backgroundColor: '#000000',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    parametersButtonText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
    updateText: {
        color: '#FFFFFF',
        opacity: 0.7,
    },
    parameterCard: {
        backgroundColor: '#2A2A2A',
        borderRadius: 16,
        marginBottom: 16,
        padding: 20,
    },
    parameterHeader: {
        marginBottom: 16,
    },
    parameterTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    parameterContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    parameterValue: {
        marginLeft: 20,
        flex: 1,
    },
    valueText: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: '600',
    },
    unitText: {
        fontSize: 24,
        fontWeight: '400',
    },
    statusText: {
        fontSize: 14,
        marginTop: 4,
    },
    pHIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pHIconText: {
        fontSize: 16,
        fontWeight: '600',
    },
    o2Icon: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButton: {
        backgroundColor: '#FF0000',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
        marginTop: 8,
        alignSelf: 'flex-start',
    },
    actionButtonText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
}); 