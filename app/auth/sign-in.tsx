import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRouter, Link } from 'expo-router';

const auth = getAuth();

export default function SignIn() {
  const [form, setForm] = React.useState({ 
    name: '',
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
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('hello');
      router.push('../users/1');
    } catch (error) {
      Alert.alert('Login Error', 'Invalid Credentials');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image 
          source={require('../../assets/img/logo.jpg')}
          style={styles.logo}
          alt="logo"
        />
        <Text style={styles.title}> Create Your Password </Text>
        <Text style={styles.subtitle}></Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}> //TODO: Add icons
            <Text style={styles.label}> Name </Text>
            <View style={styles.inputWrapper}>
              <AntDesign name="user" size={20} color="#ccc" style={styles.icon} />
              <TextInput
                style={styles.input}
                value={form.name}
                placeholder="Enter name"
                onChangeText={(text) => setForm({ ...form, name: text })}
                autoComplete="name"
                textContentType="name"
              />
            </View>
            <Text style={styles.label}> Email </Text>
            <View style={styles.inputWrapper}>
              <AntDesign name="mail" size={20} color="#ccc" style={styles.icon} />
              <TextInput
                style={styles.input}
                value={form.email}
                placeholder="kevin@reeltimetech.com"
                onChangeText={(text) => setForm({ ...form, email: text })}
                autoComplete="email"
                textContentType="emailAddress"
              />
            </View>
            <Text style={styles.label}> Password </Text> //TODO: Add password visibility toggle
            <TextInput 
              style={styles.input}  
              value={form.password}
              placeholder='Enter password'
              secureTextEntry={true}
              onChangeText={(text) => setForm({ ...form, password: text })}
            />
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  view: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingLeft: 35, // Add padding to make space for the icon
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 10,
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
    color: '#4285F4'
  },
});