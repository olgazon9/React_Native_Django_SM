import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from '../styles/LandingPageStyles'; // Importing styles

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  // ... other screens and their parameters
};

const LandingPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LandingPage;
