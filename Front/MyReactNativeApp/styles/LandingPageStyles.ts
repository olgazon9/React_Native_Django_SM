import { StyleSheet } from 'react-native';

// Define theme colors and font sizes
const theme = {
  colors: {
    primary: '#007bff',   // Blue
    secondary: '#6c757d', // Gray
    light: '#f8f9fa',     // Light gray
    dark: '#343a40',      // Dark gray
    white: '#ffffff',     // White
  },
  fontSizes: {
    title: 24,
    regular: 16,
    small: 12,
  },
};

// Common style patterns (like mixins in SCSS)
const centerContent = {
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonStyle = {
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginVertical: 10,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
    padding: 20,
  },
  title: {
    fontSize: theme.fontSizes.title,
    color: theme.colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    ...buttonStyle,
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.regular,
    textAlign: 'center',
  },
  secondaryButton: {
    ...buttonStyle,
    backgroundColor: theme.colors.secondary,
  },
  secondaryButtonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.regular,
    textAlign: 'center',
  },
  footerText: {
    fontSize: theme.fontSizes.small,
    color: theme.colors.dark,
    textAlign: 'center',
    marginTop: 20,
  },
  // Add more styles as needed
});

export default styles;
