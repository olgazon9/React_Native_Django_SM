import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { login } from '../services/api'; // Make sure this path is correct

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Attempting login with:', username);
    try {
      const response = await login(username, password);
      console.log('Login response:', response);

      // Check if the response has an access token
      if (response.access) {
        await AsyncStorage.setItem('authToken', response.access); // Store the access token
        Alert.alert('Login Successful', 'You have been logged in!');
        console.log('Navigation to HomeScreen successful'); // Log successful navigation
        navigation.navigate('HomeScreen'); // Make sure 'HomeScreen' is a valid route in your navigator
      } else {
        Alert.alert('Login Failed', 'Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login Error', 'An error occurred during login.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default Login;
