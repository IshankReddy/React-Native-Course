// Import necessary dependencies
import "react-native-gesture-handler"; // Required for drawer navigation
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // For navigation icons
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

// Import all our example components from the Native-Elements directory
import ViewExample from "./src/Native-Elements/View";
import TextExample from "./src/Native-Elements/Text";
import ImageExample from "./src/Native-Elements/Image";
import ButtonExample from "./src/Native-Elements/Button";
import TextInputExample from "./src/Native-Elements/TextInput";
import ScrollViewExample from "./src/Native-Elements/ScrollView";

// Create navigation objects
const Tab = createBottomTabNavigator(); // For bottom tab navigation
const Drawer = createDrawerNavigator(); // For drawer (side menu) navigation

/**
 * Home Screen Component
 * This is the main screen that shows a grid of navigation buttons
 * @param {object} navigation - Navigation prop for routing
 */
const HomeScreen = ({ navigation }) => {
  // Custom button component for the grid
  const NavigationButton = ({ title, screenName, icon }) => (
    <TouchableOpacity
      style={styles.navButton}
      onPress={() => navigation.navigate(screenName)}
    >
      <Ionicons name={icon} size={24} color="#2196F3" />
      <Text style={styles.navButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Elements</Text>
      {/* Grid of navigation buttons */}
      <View style={styles.buttonGrid}>
        <NavigationButton title="View" screenName="View" icon="grid-outline" />
        <NavigationButton title="Text" screenName="Text" icon="text-outline" />
        <NavigationButton
          title="Image"
          screenName="Image"
          icon="image-outline"
        />
        <NavigationButton
          title="Button"
          screenName="Button"
          icon="radio-button-off"
        />
        <NavigationButton
          title="TextInput"
          screenName="Input"
          icon="create-outline"
        />
        <NavigationButton
          title="ScrollView"
          screenName="Scroll"
          icon="list-outline"
        />
      </View>
    </ScrollView>
  );
};

/**
 * Bottom Tab Navigator Component
 * Configures and returns the bottom tab navigation
 */
const TabNavigator = () => {
  return (
    <Tab.Navigator
      // Configuration for all tab screens
      screenOptions={({ route }) => ({
        // Configure the tab bar icons
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // Choose icon based on route name and whether it's focused
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "View":
              iconName = focused ? "grid" : "grid-outline";
              break;
            case "Text":
              iconName = focused ? "text" : "text-outline";
              break;
            case "Image":
              iconName = focused ? "image" : "image-outline";
              break;
            case "Button":
              iconName = focused ? "radio-button-on" : "radio-button-off";
              break;
            case "Input":
              iconName = focused ? "create" : "create-outline";
              break;
            case "Scroll":
              iconName = focused ? "list" : "list-outline";
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        // Tab bar styling
        tabBarActiveTintColor: "#2196F3", // Color for active tab
        tabBarInactiveTintColor: "#757575", // Color for inactive tabs
        headerShown: false, // Hide the header for tab screens
      })}
    >
      {/* Define all tab screens */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="View" component={ViewExample} />
      <Tab.Screen name="Text" component={TextExample} />
      <Tab.Screen name="Image" component={ImageExample} />
      <Tab.Screen name="Button" component={ButtonExample} />
      <Tab.Screen name="Input" component={TextInputExample} />
      <Tab.Screen name="Scroll" component={ScrollViewExample} />
    </Tab.Navigator>
  );
};

/**
 * Main App Component
 * Sets up the overall navigation structure with drawer and tabs
 */
export default function App() {
  return (
    <NavigationContainer>
      {/* Drawer Navigator as the root navigator */}
      <Drawer.Navigator
        screenOptions={{
          // Styling for the drawer header
          headerStyle: {
            backgroundColor: "#2196F3",
          },
          headerTintColor: "#fff", // Header text color
          drawerActiveTintColor: "#2196F3", // Active drawer item color
          drawerStyle: {
            backgroundColor: "#fff", // Drawer background color
          },
        }}
      >
        {/* Main tabs screen in drawer - contains bottom tabs */}
        <Drawer.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{
            title: "Home",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        {/* Individual screens in drawer */}
        <Drawer.Screen
          name="View"
          component={ViewExample}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Text"
          component={TextExample}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="text-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Image"
          component={ImageExample}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="image-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Button"
          component={ButtonExample}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="radio-button-off" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Input"
          component={TextInputExample}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="create-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Scroll"
          component={ScrollViewExample}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/**
 * Styles for the components
 * Contains all the styling information for the app
 */
const styles = StyleSheet.create({
  // Container for the main content
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // Title styling
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#2196F3",
  },
  // Grid layout for navigation buttons
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
    justifyContent: "space-between",
  },
  // Individual navigation button styling
  navButton: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 16,
    alignItems: "center",
    borderRadius: 10,
    elevation: 3,
    // Shadow styling for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Border styling
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  // Text styling for navigation buttons
  navButtonText: {
    marginTop: 8,
    fontSize: 16,
    color: "#2196F3",
    fontWeight: "500",
  },
});
