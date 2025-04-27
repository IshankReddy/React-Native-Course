import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider, useTheme } from "./src/components/Theme";
import { ThemeToggle } from "./src/components/ThemeToggle";
import { ScreenTransition } from "./src/components/Transitions";
import {
  LoadingScreen,
  AnimatedButton,
  AnimationShowcase,
} from "./src/components/Animations";

const AppContent = () => {
  const [currentScreen, setCurrentScreen] = useState("loading");
  const { colors } = useTheme();

  const handleScreenChange = () => {
    // Directly toggle the screen without checking transition state
    setCurrentScreen((current) =>
      current === "loading" ? "buttons" : "loading"
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.screenContainer}>
        <ScreenTransition isVisible={currentScreen === "loading"}>
          <LoadingScreen />
        </ScreenTransition>

        <ScreenTransition isVisible={currentScreen === "buttons"}>
          <AnimationShowcase />
        </ScreenTransition>
      </View>

      <View style={styles.controls}>
        <AnimatedButton
          title={currentScreen === "loading" ? "Show Buttons" : "Show Loading"}
          onPress={handleScreenChange}
          style="shine"
        />
        <ThemeToggle />
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
  controls: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 20,
    gap: 20,
    alignItems: "center",
  },
});
