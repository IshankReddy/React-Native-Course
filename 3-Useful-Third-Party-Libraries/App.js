import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import all example components
import ButtonsExample from "./src/react-native-elements-examples/ButtonsExample";
import InputsExample from "./src/react-native-elements-examples/InputsExample";
import CardsExample from "./src/react-native-elements-examples/CardsExample";
import ListItemsExample from "./src/react-native-elements-examples/ListItemsExample";
import TextExample from "./src/react-native-elements-examples/TextExample";
import IconsShowcase from "./src/vector-icons-examples/IconsShowcase";
import IconButtons from "./src/vector-icons-examples/IconButtons";
import AnimatedIcons from "./src/vector-icons-examples/AnimatedIcons";
import BasicRequests from "./src/axios-examples/BasicRequests";
import CRUDOperations from "./src/axios-examples/CRUDOperations";
import AdvancedRequests from "./src/axios-examples/AdvancedRequests";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>Useful Third-Party Libraries</Text>

      {/* React Native Elements Section */}
      <Text style={styles.sectionTitle}>React Native Elements</Text>
      <Button
        title="Text Components"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("TextExample")}
      />
      <Button
        title="Button Components"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("ButtonsExample")}
      />
      <Button
        title="Input Components"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("InputsExample")}
      />
      <Button
        title="Card Components"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("CardsExample")}
      />
      <Button
        title="List Components"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("ListItemsExample")}
      />

      {/* Vector Icons Section */}
      <Text style={styles.sectionTitle}>React Native Vector Icons</Text>
      <Button
        title="Basic Icons Showcase"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("IconsShowcase")}
      />
      <Button
        title="Interactive Icon Buttons"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("IconButtons")}
      />
      <Button
        title="Animated Icons"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("AnimatedIcons")}
      />

      {/* Axios Section */}
      <Text style={styles.sectionTitle}>Axios Examples</Text>
      <Button
        title="Basic HTTP Requests"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("BasicRequests")}
      />
      <Button
        title="CRUD Operations"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("CRUDOperations")}
      />
      <Button
        title="Advanced Requests"
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate("AdvancedRequests")}
      />
    </ScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2089dc",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Third-Party Libraries Demo" }}
        />
        <Stack.Screen
          name="TextExample"
          component={TextExample}
          options={{ title: "Text Components" }}
        />
        <Stack.Screen
          name="ButtonsExample"
          component={ButtonsExample}
          options={{ title: "Button Components" }}
        />
        <Stack.Screen
          name="InputsExample"
          component={InputsExample}
          options={{ title: "Input Components" }}
        />
        <Stack.Screen
          name="CardsExample"
          component={CardsExample}
          options={{ title: "Card Components" }}
        />
        <Stack.Screen
          name="ListItemsExample"
          component={ListItemsExample}
          options={{ title: "List Components" }}
        />
        <Stack.Screen
          name="IconsShowcase"
          component={IconsShowcase}
          options={{ title: "Icons Showcase" }}
        />
        <Stack.Screen
          name="IconButtons"
          component={IconButtons}
          options={{ title: "Icon Buttons" }}
        />
        <Stack.Screen
          name="AnimatedIcons"
          component={AnimatedIcons}
          options={{ title: "Animated Icons" }}
        />
        <Stack.Screen
          name="BasicRequests"
          component={BasicRequests}
          options={{ title: "Basic Requests" }}
        />
        <Stack.Screen
          name="CRUDOperations"
          component={CRUDOperations}
          options={{ title: "CRUD Operations" }}
        />
        <Stack.Screen
          name="AdvancedRequests"
          component={AdvancedRequests}
          options={{ title: "Advanced Requests" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#2089dc",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#2c3e50",
  },
  buttonContainer: {
    marginVertical: 5,
  },
});

export default App;
