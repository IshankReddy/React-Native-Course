import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";

// Child component that receives the callback
const ExpensiveChild = React.memo(({ onPress }) => {
  console.log("ExpensiveChild rendered!"); // To demonstrate render optimization
  return (
    <View style={styles.childContainer}>
      <Text style={styles.button} onPress={onPress}>
        Click me (Expensive Operation)
      </Text>
      <Text style={styles.explanation}>
        Check console logs - this component only re-renders when necessary
      </Text>
    </View>
  );
});

const ExpensiveButton = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // This callback is memoized and won't change between renders
  const handleExpensiveOperation = useCallback(() => {
    setCount((c) => c + 1);
    // Simulate expensive operation
    console.log("Performing expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
  }, []); // Empty dependency array since we're using functional updates

  // This will cause a re-render but won't affect our memoized callback
  const handleOtherStateUpdate = () => {
    setOtherState((s) => s + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Text style={styles.text}>Other State: {otherState}</Text>

      {/* This component won't re-render unnecessarily */}
      <ExpensiveChild onPress={handleExpensiveOperation} />

      <Text
        style={[styles.button, styles.secondaryButton]}
        onPress={handleOtherStateUpdate}
      >
        Update Other State
      </Text>

      <Text style={styles.explanation}>
        The ExpensiveChild component uses React.memo and only re-renders when
        its props change. Since handleExpensiveOperation is wrapped in
        useCallback, it doesn't change between renders, preventing unnecessary
        re-renders of ExpensiveChild. Try clicking "Update Other State" and
        notice that ExpensiveChild doesn't re-render!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  childContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    color: "white",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  secondaryButton: {
    backgroundColor: "#5856D6",
  },
  explanation: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default ExpensiveButton;
