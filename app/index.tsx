import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, FlatList } from 'react-native';
import { PieChart, LineChart } from 'react-native-chart-kit';
import { onAuthStateChanged, User } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { useNavigation, router } from 'expo-router';
import { io } from 'socket.io-client';

const login = false;


const UserPage = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>User Dashboard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    card: { backgroundColor: '#f8f8f8', padding: 15, borderRadius: 10, marginVertical: 5, width: '100%', alignItems: 'center' },
    sensorName: { fontSize: 18, fontWeight: 'bold' },
    text: { fontSize: 16, marginVertical: 2 },
    activity: { marginTop: 20 },
});

export default UserPage;
