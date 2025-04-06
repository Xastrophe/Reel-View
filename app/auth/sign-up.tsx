import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    SafeAreaView,
    Alert,
    ActivityIndicator,
    Image
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { auth } from '../../src/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function SignUp() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = async () => {
        if (!form.name || !form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (form.password.length < 6) {
            Alert.alert('Error', 'Password should be at least 6 characters');
            return;
        }

        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
            
            // Update user profile with name
            await updateProfile(userCredential.user, {
                displayName: form.name
            });

            console.log('User account created:', userCredential.user.uid);
            router.replace('/dashboard');
        } catch (error: any) {
            console.error('Sign up error:', error);
            let errorMessage = 'An error occurred during sign up';
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'Email address is already in use';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email address';
            } else if (error.code === 'auth/weak-password') {
                errorMessage = 'Password is too weak';
            }
            Alert.alert('Error', errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            
            <View style={styles.header}>
                <Image
                    source={require('../../assets/img/logo.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Sign up to get started</Text>
            </View>

            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Name</Text>
                    <View style={styles.inputContainer}>
                        <AntDesign name="user" size={20} color="#666666" />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                            placeholderTextColor="#666666"
                            value={form.name}
                            onChangeText={(text) => setForm({ ...form, name: text })}
                        />
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputContainer}>
                        <AntDesign name="mail" size={20} color="#666666" />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#666666"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={form.email}
                            onChangeText={(text) => setForm({ ...form, email: text })}
                        />
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputContainer}>
                        <AntDesign name="lock" size={20} color="#666666" />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="#666666"
                            secureTextEntry={!showPassword}
                            value={form.password}
                            onChangeText={(text) => setForm({ ...form, password: text })}
                        />
                        <TouchableOpacity 
                            onPress={() => setShowPassword(!showPassword)}
                            style={styles.eyeIcon}
                        >
                            <AntDesign 
                                name={showPassword ? "eye" : "eyeo"} 
                                size={20} 
                                color="#666666" 
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity 
                    style={styles.signUpButton}
                    onPress={handleSignUp}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#FFFFFF" />
                    ) : (
                        <Text style={styles.signUpButtonText}>Create Account</Text>
                    )}
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already have an account? </Text>
                    <Link href="/auth/sign-in" asChild>
                        <TouchableOpacity>
                            <Text style={styles.signInLink}>Sign In</Text>
                        </TouchableOpacity>
                    </Link>
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
        padding: 24,
        alignItems: 'center',
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
    },
    form: {
        flex: 1,
        padding: 24,
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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2A2A2A',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 4,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#FFFFFF',
        height: 48,
        marginLeft: 12,
    },
    eyeIcon: {
        padding: 4,
    },
    signUpButton: {
        backgroundColor: '#000000',
        borderRadius: 12,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
    },
    signUpButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 24,
    },
    footerText: {
        color: '#666666',
        fontSize: 16,
    },
    signInLink: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
}); 