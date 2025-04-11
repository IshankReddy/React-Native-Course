import React from "react";
import { Image, View, StyleSheet } from "react-native";

const ImageExample = () => {
  return (
    <View style={styles.container}>
      {/* Square Image */}
      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
        style={styles.squareImage}
      />

      {/* Wide Image */}
      <Image
        source={{ uri: "https://picsum.photos/400/200" }}
        style={styles.wideImage}
        resizeMode="cover"
      />

      {/* Circle Image */}
      <Image
        source={{ uri: "https://picsum.photos/300/300" }}
        style={styles.circleImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  squareImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#f4511e",
  },
  wideImage: {
    width: "100%",
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  circleImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#f4511e",
  },
});

export default ImageExample;
