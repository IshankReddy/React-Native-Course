 import React from "react";
 import { Text, View, StyleSheet } from "react-native";

 const TextExample = () => {
   return (
     <View style={styles.container}>
       <Text style={styles.title}>This is a Title</Text>
       <Text style={styles.regular}>This is regular text</Text>
       <Text style={styles.colored}>This is colored text</Text>
       <Text style={styles.bold}>This is bold text</Text>
       <Text numberOfLines={1} ellipsizeMode="tail">
         This is a very long text that will be truncated if it exceeds one
         line...
       </Text>
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     padding: 20,
   },
   title: {
     fontSize: 24,
     fontWeight: "bold",
     marginBottom: 10,
   },
   regular: {
     fontSize: 16,
     marginBottom: 5,
   },
   colored: {
     color: "blue",
     fontSize: 16,
     marginBottom: 5,
   },
   bold: {
     fontWeight: "bold",
     fontSize: 16,
   },
 });

 export default TextExample;