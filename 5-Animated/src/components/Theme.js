import React, { createContext, useContext, useState } from "react";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const switchPosition = useSharedValue(0);

  const colors = {
    light: {
      background: "#F2F2F7",
      text: "#000000",
      primary: "#007AFF",
      secondary: "#5856D6",
      accent: "#FF2D55",
      card: "#FFFFFF",
      border: "#E5E5EA",
      switchTrack: "#E9E9EA",
      switchThumb: "#FFFFFF",
    },
    dark: {
      background: "#000000",
      text: "#FFFFFF",
      primary: "#0A84FF",
      secondary: "#5E5CE6",
      accent: "#FF375F",
      card: "#1C1C1E",
      border: "#38383A",
      switchTrack: "#39393D",
      switchThumb: "#FFFFFF",
    },
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      switchPosition.value = withSpring(newTheme === "dark" ? 20 : 0);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        colors: colors[theme],
        switchPosition,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
