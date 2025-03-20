import { Link, router, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';

export default function SignIn() {
  const [form, setForm] = React.useState({ 
    email: '',
    password: ''
  });

  const navigation = useNavigation();
      
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);



  return (
    <SafeAreaView style={styling.container}>
      <View style={styling.view}>
        <Image 
          source={require('../../assets/img/logo.png')}
          style={styling.logo}
          alt='logo'
        />

        <Text style={styling.title}> ReelView</Text>

        <Text style={styling.subtitle}> Create An Account</Text>

        <View style={styling.form}>
          <View style={styling.inputContainer}>
            <Text style={styling.label}> Email Address </Text>
            <TextInput
              style={styling.input}
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Text style={styling.label}> Password </Text>
            <TextInput
              style={styling.input}
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
              placeholder="Enter your password"
              secureTextEntry
            />
            <TouchableOpacity style={styling.button} onPress={() => Alert.alert('Sign In', 'Sign In button pressed')}>
              <Text style={styling.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styling = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width: '80%',
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});


