import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Card, Button } from "react-native-elements";

const CardsExample = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Card Examples
      </Text>

      <Card>
        <Card.Title>BASIC CARD</Card.Title>
        <Card.Divider />
        <Text>This is a basic card with some text content.</Text>
      </Card>

      <Card>
        <Card.Title>CARD WITH IMAGE</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={{ height: 100 }}
        />
        <Text style={styles.cardText}>
          This is a card with an image and a button.
        </Text>
        <Button title="VIEW NOW" containerStyle={styles.buttonContainer} />
      </Card>

      <Card>
        <Card.Title>FEATURED CARD</Card.Title>
        <Card.FeaturedSubtitle>With Featured Subtitle</Card.FeaturedSubtitle>
        <Card.Divider />
        <Card.Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={{ height: 180 }}
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  cardText: {
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});


export default CardsExample;
