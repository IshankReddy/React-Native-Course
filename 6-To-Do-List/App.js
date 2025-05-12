import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider, createTheme } from "@rneui/themed";
import TodoList from "./src/components/TodoList";

export default function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    lightColors: {
      primary: "#2089dc",
      background: "#ffffff",
      text: "#000000",
      grey3: "#666666",
      error: "#ff0000",
    },
    darkColors: {
      primary: "#73c0ff",
      background: "#1a1a1a",
      text: "#ffffff",
      grey3: "#999999",
      error: "#ff4444",
    },
    mode: mode,
  });

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <TodoList onToggleTheme={toggleTheme} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
