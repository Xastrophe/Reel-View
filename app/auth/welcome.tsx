import { Redirect } from 'expo-router';
import React from 'react';
import { Image, View, Text, StyleSheet, Dimensions, ActivityIndicator, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const login = false;


const UserPage = () => {

    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.logoTop}>
                    <Image 
                        source={require('../../assets/img/logo.jpg')}
                        style={styles.logo}
                        alt='logo'
                    />

                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.signup}>
                        <Text style={styles.signupText}> Sign Up </Text>
                    </TouchableOpacity>
                    
                    <Text style={styles.mid}> or </Text>

                    <TouchableOpacity style={styles.login}>
                    <Text style={styles.loginText}> Create a new account </Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#ffffff' },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    card: { backgroundColor: '#ffffff', padding: 15, borderRadius: 10, marginVertical: 5, width: '100%', alignItems: 'center' },
    sensorName: { fontSize: 18, fontWeight: 'bold' },
    text: { fontSize: 16, marginVertical: 2 },
    activity: { marginTop: 20 },
    buttonContainer: {
        marginTop: 20
    },
    signup: {
        marginTop: 20,
        backgroundColor: "#000000",
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 20,
        shadowColor: "#000000",

    },
    mid: {
        marginTop: 20,
        alignSelf: "center",
    },
    login: {
        marginTop: 20,
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 20,
        
    },
    signupText: {
        color: "#ffffff",
        alignSelf: "center"
    },
    loginText: {
        color: "#000000",
        alignSelf: "center"
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
});

export default UserPage;
