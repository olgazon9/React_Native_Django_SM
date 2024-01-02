import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../services/api'; // Importing API functions
import styles from '../styles/HomeScreenStyles'; // Importing styles

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const fetchedTodos = await fetchTodos();
      setTodos(fetchedTodos);
    } catch (error) {
      console.error('Failed to load todos:', error);
    }
  };

  const handleAddTodo = async () => {
    if (!newTodoTitle.trim()) {
      console.error('Todo title is required');
      return;
    }
    if (!newTodoDescription.trim()) {
      console.error('Todo description is required');
      return;
    }
    try {
      await addTodo(newTodoTitle, newTodoDescription);
      setNewTodoTitle('');
      setNewTodoDescription('');
      loadTodos();
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  const handleToggleComplete = async (todo) => {
    try {
      await updateTodo(todo.id, { ...todo, completed: !todo.completed });
      loadTodos();
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  const handleDeleteTodo = async (todoId) => {
    try {
      await deleteTodo(todoId);
      loadTodos();
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Todo Title"
        value={newTodoTitle}
        onChangeText={setNewTodoTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Todo Description"
        value={newTodoDescription}
        onChangeText={setNewTodoDescription}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={item.completed ? styles.textCompleted : styles.textNotCompleted}>
              {item.title} - {item.description}
            </Text>
            <Button title={item.completed ? 'Unmark' : 'Complete'} onPress={() => handleToggleComplete(item)} />
            <Button title="Delete" onPress={() => handleDeleteTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
