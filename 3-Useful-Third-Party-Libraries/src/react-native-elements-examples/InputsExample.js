import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Input } from "react-native-elements";

const InputsExample = () => {
  const [text, setText] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Input Examples</Text>

      <Input placeholder="Basic input" />

      <Input
        placeholder="Input with icon"
        leftIcon={{ type: "font-awesome", name: "user" }}
      />

      <Input
        placeholder="Email input"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Password input"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        secureTextEntry
      />

      <Input
        placeholder="Input with error"
        errorStyle={{ color: "red" }}
        errorMessage="Please enter a valid value"
      />

      <Input placeholder="Multiline input" multiline numberOfLines={4} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default InputsExample;
