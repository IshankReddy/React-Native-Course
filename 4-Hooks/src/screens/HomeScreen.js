import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const HookCard = ({ title, description, onPress, color }) => (
  <TouchableOpacity
    style={[styles.card, { backgroundColor: color }]}
    onPress={onPress}
  >
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <View style={styles.learnMore}>
        <Text style={styles.learnMoreText}>Learn More</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const hooks = [
    {
      title: "useState()",
      description: "Manage local state in functional components",
      color: "#FF6B6B",
      screen: "Counter",
    },
    {
      title: "useEffect()",
      description: "Handle side effects and lifecycle events",
      color: "#4ECDC4",
      screen: "Timer",
    },
    {
      title: "useRef()",
      description: "Access and manipulate DOM elements directly",
      color: "#45B7D1",
      screen: "FocusInput",
    },
    {
      title: "useCallback()",
      description: "Optimize performance with memoized callbacks",
      color: "#96CEB4",
      screen: "ExpensiveButton",
    },
    {
      title: "useMemo()",
      description: "Memoize expensive calculations",
      color: "#9B59B6",
      screen: "ExpensiveCalculation",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>React Hooks</Text>
        <Text style={styles.headerSubtitle}>Interactive Examples</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardsContainer}>
          {hooks.map((hook, index) => (
            <HookCard
              key={index}
              title={hook.title}
              description={hook.description}
              color={hook.color}
              onPress={() => navigation.navigate(hook.screen)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  cardsContainer: {
    padding: 20,
    gap: 20,
  },
  card: {
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    minHeight: 140,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.9,
    marginBottom: 20,
  },
  learnMore: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  learnMoreText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

export default HomeScreen;
