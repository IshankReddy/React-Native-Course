import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Input, Button, Text, useTheme, Icon } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";
import TodoItem from "./TodoItem";

const TodoList = ({ onToggleTheme }) => {
  const { theme } = useTheme();
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error("Error loading todos:", error);
    }
  };

  const saveTodos = async (updatedTodos) => {
    try {
      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
    } catch (error) {
      console.error("Error saving todos:", error);
    }
  };

  const addTodo = () => {
    if (newTitle.trim()) {
      const updatedTodos = [
        ...todos,
        {
          id: Date.now().toString(),
          title: newTitle.trim(),
          description: newDescription.trim(),
        },
      ];
      setTodos(updatedTodos);
      saveTodos(updatedTodos);
      setNewTitle("");
      setNewDescription("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const updateTodo = (id, updatedData) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedData } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Animatable.View
        animation="fadeIn"
        duration={1000}
        style={[
          styles.header,
          {
            backgroundColor: theme.colors.background,
            borderBottomColor: theme.mode === "dark" ? "#333" : "#e0e0e0",
          },
        ]}
      >
        <View style={styles.headerContent}>
          <Text h1 style={[styles.title, { color: theme.colors.text }]}>
            Todo List
          </Text>
          <Icon
            name={theme.mode === "light" ? "moon" : "sun"}
            type="feather"
            size={24}
            color={theme.colors.text}
            onPress={onToggleTheme}
          />
        </View>
      </Animatable.View>

      <ScrollView style={styles.content}>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            item={todo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
            index={index}
          />
        ))}
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.colors.background,
            borderTopColor: theme.mode === "dark" ? "#333" : "#e0e0e0",
          },
        ]}
      >
        <Input
          placeholder="Todo title"
          value={newTitle}
          onChangeText={setNewTitle}
          containerStyle={styles.input}
          inputStyle={{ color: theme.colors.text }}
          placeholderTextColor={theme.mode === "dark" ? "#888" : "#666"}
          inputContainerStyle={[
            styles.inputField,
            {
              borderColor: theme.mode === "dark" ? "#444" : "#e0e0e0",
              backgroundColor: theme.mode === "dark" ? "#222" : "#f5f5f5",
            },
          ]}
        />
        <Input
          placeholder="Todo description"
          value={newDescription}
          onChangeText={setNewDescription}
          multiline
          containerStyle={styles.input}
          inputStyle={{ color: theme.colors.text }}
          placeholderTextColor={theme.mode === "dark" ? "#888" : "#666"}
          inputContainerStyle={[
            styles.inputField,
            {
              borderColor: theme.mode === "dark" ? "#444" : "#e0e0e0",
              backgroundColor: theme.mode === "dark" ? "#222" : "#f5f5f5",
            },
          ]}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add Todo"
            onPress={addTodo}
            disabled={!newTitle.trim()}
            buttonStyle={styles.addButton}
            containerStyle={styles.buttonWrapper}
            titleStyle={styles.buttonTitle}
            disabledStyle={{
              backgroundColor: theme.mode === "dark" ? "#333" : "#cccccc",
            }}
            disabledTitleStyle={{
              color: theme.mode === "dark" ? "#666" : "#999",
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    padding: 10,
    borderTopWidth: 1,
  },
  input: {
    paddingHorizontal: 0,
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonWrapper: {
    width: "100%",
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: "#2089dc",
    borderRadius: 8,
    paddingVertical: 12,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default TodoList;
