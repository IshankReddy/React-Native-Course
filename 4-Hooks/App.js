import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import HomeScreen from "./src/screens/HomeScreen";
import Counter from "./src/components/Counter";
import Timer from "./src/components/Timer";
import FocusInput from "./src/components/FocusInput";
import ExpensiveButton from "./src/components/ExpensiveButton";
import ExpensiveCalculation from "./src/components/ExpensiveCalculation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
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
          options={{ title: "React Hooks Examples" }}
        />
        <Stack.Screen
          name="Counter"
          component={Counter}
          options={{ title: "useState Hook" }}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{ title: "useEffect Hook" }}
        />
        <Stack.Screen
          name="FocusInput"
          component={FocusInput}
          options={{ title: "useRef Hook" }}
        />
        <Stack.Screen
          name="ExpensiveButton"
          component={ExpensiveButton}
          options={{ title: "useCallback Hook" }}
        />
        <Stack.Screen
          name="ExpensiveCalculation"
          component={ExpensiveCalculation}
          options={{ title: "useMemo Hook" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
