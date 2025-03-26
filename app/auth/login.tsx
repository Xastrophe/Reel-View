import { Link, useNavigation, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { getAuth } from 'firebase/auth';
import { AntDesign } from '@expo/vector-icons';

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

        <Text style={styles.title}> Welcome!</Text>
        <Text style={styles.subtitle}></Text>
        <View style={styles.form}>
          <Text style={styles.label}> Email </Text>
              
              <View style={styles.inputContainer}>
                <AntDesign name='mail' size={25} style={styles.googlelogo}/>
                  <TextInput
                      style={styles.input}
                      value={form.email}
                      placeholder='kevin@reeltimetech.com'
                      onChangeText={(text) => setForm({ ...form, email: text })}
                      autoComplete='email'
                      textContentType='emailAddress'
                    />
              </View>
                      
            <Text style={styles.label}> Password </Text>
              <View style={styles.inputContainer}>
                  <AntDesign name="eye" size={25} style={styles.googlelogo}/>
                    <TextInput 
                      style={styles.input}  
                      value={form.password}
                      placeholder='Enter password'
                      secureTextEntry={true}
                      onChangeText={(text) => setForm({ ...form, password: text })}
                    />
              </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonLabel}> Sign In </Text>
            </TouchableOpacity>
            <View style={styles.divider}>
                <View style={styles.underscoreOr}></View>
                    <Text style={styles.mid}> or </Text>
                <View style={styles.underscoreOr}></View>
            </View>

            <TouchableOpacity style={styles.login}>
                    <AntDesign name="google" size={25} style={styles.googlelogo}/>
                        <Text style={styles.loginText}> Log In with Google </Text>
            </TouchableOpacity>

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
      backgroundColor: '#fff',
    },
    view: {
      padding:24,
      flex: 1,
    },
    logo: {
      marginTop: 40,
      width: 110,
      height: 110,
      alignSelf: 'center',
    },
    title: {
      letterSpacing: 0.3,
      fontSize: 24,
      fontWeight: 800,
      marginTop: 10,
      marginBottom: 5,
      color: '#1e1e1e',
      fontFamily: 'Jakarta'
    },
    subtitle: {
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'center',
      color: '#1e1e1e',
    },
    label: {
      fontWeight: '800',
      fontFamily: 'Jakarta',
      fontSize: 17,
      color: '#696969',
      marginTop: 10,
    },
    input: {
      fontFamily: 'Jakarta',
      borderRadius: 50,
    },
    form: {
      marginTop: 30,
    },
    inputContainer: {
      marginTop: 10,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#f2f2f2',
      padding: 10,
      borderRadius: 50,
    },
    button: {
      backgroundColor: '#1e1e1e',
      color: '#fff',
      padding: 15,
      borderRadius: 100,
      marginTop: 30,
      textAlign: 'center',
      fontWeight: '500',
      fontFamily: 'Jakarta',
    },
    buttonLabel: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 20,
    },
    footer: {
      bottom: 100,
      position: 'absolute',
      alignSelf: 'center',
      fontFamily: 'Jakarta',
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
      
    },
    underscoreOr: {
      flex: 1,
      height: 1,
      backgroundColor: '#ccc',
    },
    accountCreation: {
      marginTop: 20,
      color: '#000',
      alignSelf: 'center'
    },
    mid: {
      marginHorizontal: 20,
      fontSize: 16,
      color: "#555"
    },
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30,
    },
    login: {
      flexDirection: 'row',
      marginTop: 30,
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 90,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 50,
      
    },
    loginText: {
      fontFamily: 'Jakarta',
      color: '#000',
      alignSelf: 'center',
      fontSize: 16,
      fontWeight: '400',
    },
    googlelogo: {
      marginHorizontal: 10,
      color: '#000'
    },
  });