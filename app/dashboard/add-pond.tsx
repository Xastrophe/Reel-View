import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity,
    ScrollView,
    TextInput,
    Alert
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { usePonds } from '../../src/lib/context/PondContext';

export default function AddPond() {
    const router = useRouter();
    const { addPond } = usePonds();
    const [form, setForm] = useState({
        name: '',
        capacity: '',
        filled: '',
        fishCount: ''
    });

    const handleSubmit = () => {
        // Validate form
        if (!form.name.trim()) {
            Alert.alert('Error', 'Please enter a pond name');
            return;
        }

        if (!form.capacity || isNaN(Number(form.capacity))) {
            Alert.alert('Error', 'Please enter a valid capacity');
            return;
        }

        if (!form.filled || isNaN(Number(form.filled))) {
            Alert.alert('Error', 'Please enter a valid filled amount');
            return;
        }

        if (!form.fishCount || isNaN(Number(form.fishCount))) {
            Alert.alert('Error', 'Please enter a valid fish count');
            return;
        }

        if (Number(form.filled) > Number(form.capacity)) {
            Alert.alert('Error', 'Filled amount cannot be greater than capacity');
            return;
        }

        // Add the new pond
        addPond({
            name: form.name,
            capacity: Number(form.capacity),
            filled: Number(form.filled),
            fishCount: Number(form.fishCount)
        });

        // Navigate back to pond list
        router.push('/dashboard/pond-list');
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>ADD POND</Text>
            </View>

            {/* Form */}
            <ScrollView style={styles.scrollView}>
                <View style={styles.formContainer}>
                    {/* Pond Name Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Pond Name</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter pond name"
                                placeholderTextColor="#666666"
                                value={form.name}
                                onChangeText={(text) => setForm({ ...form, name: text })}
                            />
                        </View>
                    </View>

                    {/* Capacity Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Capacity (lt L)</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter pond capacity"
                                placeholderTextColor="#666666"
                                keyboardType="numeric"
                                value={form.capacity}
                                onChangeText={(text) => setForm({ ...form, capacity: text })}
                            />
                        </View>
                    </View>

                    {/* Filled Amount Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Filled Amount (lt L)</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter filled amount"
                                placeholderTextColor="#666666"
                                keyboardType="numeric"
                                value={form.filled}
                                onChangeText={(text) => setForm({ ...form, filled: text })}
                            />
                        </View>
                    </View>

                    {/* Fish Count Input */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Initial Fish Count</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter number of fish"
                                placeholderTextColor="#666666"
                                keyboardType="numeric"
                                value={form.fishCount}
                                onChangeText={(text) => setForm({ ...form, fishCount: text })}
                            />
                        </View>
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity 
                        style={styles.submitButton}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.submitButtonText}>Create Pond</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    backButton: {
        marginRight: 16,
        padding: 4,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    scrollView: {
        flex: 1,
    },
    formContainer: {
        padding: 20,
    },
    inputGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    inputContainer: {
        backgroundColor: '#2A2A2A',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 4,
    },
    input: {
        fontSize: 16,
        color: '#FFFFFF',
        height: 48,
    },
    submitButton: {
        backgroundColor: '#000000',
        borderRadius: 25,
        paddingVertical: 16,
        marginTop: 32,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
}); 