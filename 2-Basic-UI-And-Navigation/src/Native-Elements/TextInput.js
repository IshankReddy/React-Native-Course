 import React from "react";
 import { TextInput, View, StyleSheet } from "react-native";

 const TextInputExample = () => {
   return (
     <View style={styles.container}>
       <TextInput
         style={styles.input}
         placeholder="Enter text here"
       />

       <TextInput
         style={styles.input}
         placeholder="Enter password"
         secureTextEntry
       />

       <TextInput
         style={styles.multilineInput}
         placeholder="Multiline text input"
         multiline
         numberOfLines={4}
       />
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     padding: 20,
   },
   input: {
     height: 40,
     borderColor: "gray",
     borderWidth: 1,
     marginBottom: 20,
     padding: 10,
     borderRadius: 5,
   },
   multilineInput: {
     height: 100,
     borderColor: "gray",
     borderWidth: 1,
     marginBottom: 20,
     padding: 10,
     borderRadius: 5,
     textAlignVertical: "top",
   },
   label: {
     fontSize: 16,
     marginTop: 10,
   },
 });

 export default TextInputExample;