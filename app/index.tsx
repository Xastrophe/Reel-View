import { Redirect } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';

const login = false;


const UserPage = () => {

    return (
            <Redirect href="auth/welcome" />

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
