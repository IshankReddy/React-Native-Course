import React from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { StyleSheet, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const ScreenTransition = ({ children, isVisible }) => {
  const translateX = useSharedValue(SCREEN_WIDTH);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    if (isVisible) {
      // Enter animation
      translateX.value = withSpring(0, {
        damping: 20,
        stiffness: 90,
      });
      opacity.value = withTiming(1, { duration: 300 });
    } else {
      // Exit animation
      translateX.value = withSpring(SCREEN_WIDTH, {
        damping: 20,
        stiffness: 90,
      });
      opacity.value = withTiming(0, { duration: 300 });
    }
  }, [isVisible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: opacity.value,
    display: opacity.value === 0 ? "none" : "flex",
  }));

  return (
    <Animated.View style={[styles.screen, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
