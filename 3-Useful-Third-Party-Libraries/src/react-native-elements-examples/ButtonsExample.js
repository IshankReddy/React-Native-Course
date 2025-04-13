import React from "react";
import { ScrollView, StyleSheet } from "react-native";
// Import Text from react-native instead
import { Text } from "react-native";
import { Button } from "react-native-elements";

const ButtonsExample = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Button Examples</Text>

      <Button title="Solid Button" containerStyle={styles.buttonContainer} />

      <Button
        title="Outline Button"
        type="outline"
        containerStyle={styles.buttonContainer}
      />

      <Button
        title="Clear Button"
        type="clear"
        containerStyle={styles.buttonContainer}
      />

      <Button
        title="Loading Button"
        loading
        containerStyle={styles.buttonContainer}
      />

      <Button
        icon={{
          name: "arrow-right",
          size: 15,
          color: "white",
        }}
        title="Button with Icon"
        containerStyle={styles.buttonContainer}
      />

      <Button
        title="Disabled Button"
        disabled
        containerStyle={styles.buttonContainer}
      />
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
  buttonContainer: {
    marginVertical: 5,
  },
});

export default ButtonsExample;
