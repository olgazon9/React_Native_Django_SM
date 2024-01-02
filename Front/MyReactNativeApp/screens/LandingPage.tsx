import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define the stack navigator's screen params list if you haven't done so already
export type RootStackParamList = {
  Login: undefined; // Assuming 'Login' is the name of your screen for login
  Register: undefined; // Assuming 'Register' is the name of your screen for registration
  // ... other screens and their parameters
};

// Type the navigation hook with the appropriate navigation prop based on your stack
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LandingPage;
