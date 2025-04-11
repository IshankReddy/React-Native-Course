import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const ButtonExample = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Button Examples</Text>

      {/* Disabled Button */}
      <Button title="Disabled Button" disabled={true} onPress={() => {}} />

      <View style={styles.spacing} />

      {/* Success Button */}
      <Button
        title="Success Button"
        onPress={() => alert("Success!")}
        color="#4CAF50"
      />

      <View style={styles.spacing} />

      {/* Warning Button */}
      <Button
        title="Warning Button"
        onPress={() => alert("Warning!")}
        color="#FFC107"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  spacing: {
    height: 20,
  },
  counter: {
    textAlign: "center",
    marginTop: 10,
    color: "#666",
  },
});

export default ButtonExample;
