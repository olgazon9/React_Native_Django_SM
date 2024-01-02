import React, { useState, FC } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { register } from '../services/api'; // Adjust the path as necessary
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  // Add other screens and their parameters as needed
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type RegisterProps = {
  navigation: RegisterScreenNavigationProp;
};

const Register: FC<RegisterProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = async () => {
    console.log('Attempting to register:', { username, email, password }); // Log data being sent

    try {
      const response = await register(username, password, email);
      console.log('Registration response:', response); // Log the response

      if (response.authToken) {
        await AsyncStorage.setItem('authToken', response.authToken);
        Alert.alert('Registration Successful', 'Your account has been created!', [
          { text: 'OK', onPress: () => navigation.navigate('Login') }
        ]);
      } else {
        Alert.alert('Registration Failed', 'Please check your information.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Registration Error', 'An error occurred during registration.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
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
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Register;
