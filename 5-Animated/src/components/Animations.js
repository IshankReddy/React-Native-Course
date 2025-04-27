import React from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  withRepeat,
  withSequence,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { useTheme } from "./Theme";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Loading Spinner Component
export const LoadingScreen = () => {
  const { colors } = useTheme();
  const rotation = useSharedValue(0);
  const rotationInner = useSharedValue(0);
  const rotationOuter = useSharedValue(0);

  React.useEffect(() => {
    // Outer spinner rotation
    rotationOuter.value = withRepeat(
      withTiming(360, {
        duration: 3000,
        easing: Easing.linear,
      }),
      -1
    );

    // Middle spinner rotation
    rotation.value = withRepeat(
      withTiming(-360, {
        duration: 2000,
        easing: Easing.linear,
      }),
      -1
    );

    // Inner spinner rotation
    rotationInner.value = withRepeat(
      withTiming(360, {
        duration: 1500,
        easing: Easing.linear,
      }),
      -1
    );
  }, []);

  const spinnerOuterStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationOuter.value}deg` }],
  }));

  const spinnerStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const spinnerInnerStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationInner.value}deg` }],
  }));

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.spinnerContainer}>
        <Animated.View
          style={[
            styles.spinnerOuter,
            spinnerOuterStyle,
            { borderColor: colors.primary },
          ]}
        />
        <Animated.View
          style={[
            styles.spinnerMiddle,
            spinnerStyle,
            { borderColor: colors.secondary },
          ]}
        />
        <Animated.View
          style={[
            styles.spinnerInner,
            spinnerInnerStyle,
            { borderColor: colors.accent },
          ]}
        />
        <View
          style={[styles.spinnerCenter, { backgroundColor: colors.primary }]}
        />
      </View>
    </View>
  );
};

// Animated Button Component
export const AnimatedButton = ({
  title = "Press Me!",
  onPress,
  style = "default", // 'default', 'bounce', 'scale', 'shine'
}) => {
  const { colors } = useTheme();
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);
  const shine = useSharedValue(-100);

  const handlePress = () => {
    switch (style) {
      case "bounce":
        translateY.value = withSequence(withSpring(-10), withSpring(0));
        break;
      case "shine":
        shine.value = withTiming(SCREEN_WIDTH, { duration: 1000 });
        setTimeout(() => {
          shine.value = -100;
        }, 1000);
        break;
      default:
        scale.value = withSequence(withSpring(0.95), withSpring(1));
    }
    onPress?.();
  };

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
  }));

  const shineStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shine.value }],
  }));

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        style={[
          styles.button,
          buttonStyle,
          { backgroundColor: colors.primary },
        ]}
      >
        {style === "shine" && (
          <Animated.View style={[styles.shine, shineStyle]} />
        )}
        <Text style={styles.buttonText}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

// Animation Showcase Component
export const AnimationShowcase = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.showcaseContainer}>
        <AnimatedButton title="Default Button" style="default" />
        <AnimatedButton title="Bounce Button" style="bounce" />
        <AnimatedButton title="Shine Button" style="shine" />
      </View>
    </View>
  );
};

// Theme Toggle Component
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AnimatedButton
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
      style="shine"
      onPress={toggleTheme}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerOuter: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
  },
  spinnerMiddle: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
  },
  spinnerInner: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
  },
  spinnerCenter: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
  },
  button: {
    height: 50,
    paddingHorizontal: 20,
    minWidth: 150,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  shine: {
    position: "absolute",
    top: -50,
    bottom: -50,
    width: 30,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transform: [{ rotate: "25deg" }],
  },
  showcaseContainer: {
    gap: 20,
    alignItems: "center",
  },
});
