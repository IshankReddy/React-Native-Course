 import React, { useRef } from "react";
 import { View, TextInput, Button, StyleSheet } from "react-native";

 const FocusInput = () => {
   const inputRef = useRef(null);

   const focusInput = () => {
     inputRef.current.focus();
   };

   return (
     <View style={styles.container}>
       <TextInput
         ref={inputRef}
         style={styles.input}
         placeholder="Type something..."
       />
       <Button title="Focus Input" onPress={focusInput} />
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     padding: 20,
   },
   input: {
     borderWidth: 1,
     borderColor: "#ccc",
     padding: 10,
     marginBottom: 20,
     borderRadius: 5,
   },
 });

 export default FocusInput;