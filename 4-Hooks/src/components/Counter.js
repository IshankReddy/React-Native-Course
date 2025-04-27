 import React, { useState } from "react";
 import { View, Text, Button, StyleSheet } from "react-native";

 const Counter = () => {
   const [count, setCount] = useState(0);

   return (
     <View style={styles.container}>
       <Text style={styles.text}>Count: {count}</Text>
       <View style={styles.buttonContainer}>
         <Button title="Increment" onPress={() => setCount(count + 1)} />
         <Button title="Decrement" onPress={() => setCount(count - 1)} />
       </View>
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     padding: 20,
     alignItems: "center",
   },
   text: {
     fontSize: 24,
     marginBottom: 20,
   },
   buttonContainer: {
     flexDirection: "row",
     gap: 10,
   },
 });

 export default Counter;