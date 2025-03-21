import { Link, useNavigation, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { getAuth } from 'firebase/auth';

const auth = getAuth();
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function login() {

  const [form, setForm] = React.useState({ 
    email: '',
    password: ''
  });
    const router = useRouter();
     const navigation = useNavigation();
      
      useEffect(() => {
          navigation.setOptions({ headerShown: false });
        }, [navigation]);

        const handleLogin = async () => {
            const { email, password } = form;
            try{
                await signInWithEmailAndPassword(auth, email, password);
                console.log('hello')
                router.push('../users/1');
            } catch (error) {
                Alert.alert('Login Error', 'Invalid Credentials');
            }
        }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image 
          source={require('../../assets/img/logo.jpg')}
          style={styles.logo}
          alt='logo'
        />

        <Text style={styles.title}> ReelView</Text>
        <Text style={styles.subtitle}> Log-In To Your Account</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}> Email Address </Text>
            <TextInput
              style={styles.input}
              value={form.email}
              placeholder='johndoe@gmail.com'
              onChangeText={(text) => setForm({ ...form, email: text })}
              autoComplete='email'
              textContentType='emailAddress'
            />
            <Text style={styles.label}> Password </Text>
            <TextInput 
              style={styles.input}  
              value={form.password}
              placeholder='password'
              secureTextEntry={true}
              onChangeText={(text) => setForm({ ...form, password: text })}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonLabel}> Sign In </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
                <Text style={styles.footertitle}> Don't have an account? <Link style={styles.signupLabel} href='/auth/sign-in'> Sign Up </Link></Text>
              </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e8ecf4',
    },
    view: {
      padding:24,
      flex: 1,
    },
    logo: {
      marginTop: 80,
      width: 150,
      height: 150,
      alignSelf: 'center',
    },
    title: {
      letterSpacing: 0.5,
      fontSize: 24,
      fontWeight: 800,
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 5,
      color: '#1e1e1e'
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'center',
      color: '#1e1e1e',
    },
    label: {
      fontWeight: '800',
      fontFamily: 'Open-Sans',
      fontSize: 17,
      color: '#696969',
      marginTop: 10,
    },
    input: {
      backgroundColor: '#f2f2f2',
      padding: 15,
      borderRadius: 25,
      marginTop: 5,
    },
    form: {
      marginTop: 30,
    },
    inputContainer: {
      marginTop: 20,
    },
    button: {
      backgroundColor: '#1e1e1e',
      color: '#fff',
      padding: 15,
      borderRadius: 25,
      marginTop: 30,
      textAlign: 'center',
      fontWeight: '500',
    },
    buttonLabel: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 20,
    },
    footer: {
      bottom: 30,
      position: 'absolute',
      alignSelf: 'center',
    },
  
    footertitle: {
      fontSize: 20,
      fontWeight: '600',
      textAlign: 'center',
      color: '#1e1e1e',
      marginTop: 20,
    },
    signupLabel: {
      color: '#1e1e1e',
      textDecorationLine: 'underline',
    }
  
  });