import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Image, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const UserPage = () => {
    const router = useRouter();

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
                <TouchableOpacity 
                    style={styles.signup} 
                    onPress={() => router.push('/auth/sign-up')}
                >
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.divider}>
                    <View style={styles.underscoreOr}></View>
                    <Text style={styles.mid}>or</Text>
                    <View style={styles.underscoreOr}></View>
                </View>

                <TouchableOpacity style={styles.login}>
                    <AntDesign name="google" size={20} style={styles.googlelogo}/>
                    <Text style={styles.loginText}>Log In with Google</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.acclog}>
                <Text style={styles.accountCreation}>Already have an account?</Text>
                <Link href="/auth/sign-in" style={styles.footerText}>
                    <Text> Log In</Text>
                </Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20, 
        backgroundColor: '#ffffff' 
    },
    header: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 10 
    },
    card: { 
        backgroundColor: '#ffffff', 
        padding: 15, 
        borderRadius: 10, 
        marginVertical: 5, 
        width: '100%', 
        alignItems: 'center' },
    sensorName: { 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    text: { 
        fontSize: 16, 
        marginVertical: 2 
    },
    activity: { 
        marginTop: 20 
    },
    logoTop: {

    },
    buttonContainer: {
        marginTop: 20
    },
    signup: {
        marginTop: 30,
        backgroundColor: "#000000",
        paddingVertical: 18,
        paddingHorizontal: 100,
        borderRadius: 50,
        shadowColor: "#000000",

    },
    login: {
        flexDirection: "row",
        marginTop: 30,
        backgroundColor: "#ffffff",
        paddingVertical: 18,
        paddingHorizontal: 90,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 50,
        
    },
    loginText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',
    },
    googlelogo: {
        marginHorizontal: 10,
    },
    signupText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'center',
    },
    
    logo: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
    
    divider: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
    },
    underscoreOr: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    accountCreation: {
        marginTop: 20,
        color: "#000000",
        alignSelf: "center",
        fontSize: 16,
    },
    footerText: {
        marginTop: 20,
        color: "#000000",
        alignSelf: "center",
        fontSize: 16,
        fontWeight: '600',
    },
    mid: {
        marginHorizontal: 20,
        fontSize: 16,
        color: "#555"
    },
    acclog: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    }
});

export default UserPage;
