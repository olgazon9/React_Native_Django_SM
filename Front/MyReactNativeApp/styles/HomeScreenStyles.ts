import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically in the center
    justifyContent: 'space-between', // Distribute space between items horizontally
    marginBottom: 10,
    padding: 10,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    flex: 1, // Allows text to take up remaining space
  },
  textNotCompleted: {
    textDecorationLine: 'none',
    flex: 1, // Allows text to take up remaining space
  },
  // Add more styles as needed
});

export default styles;
