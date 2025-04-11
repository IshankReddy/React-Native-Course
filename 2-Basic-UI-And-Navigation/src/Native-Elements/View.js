 import React from "react";
 import { View, StyleSheet } from "react-native";

 const ViewExample = () => {
   return (
     <View style={styles.container}>
       <View style={styles.box1} />
       <View style={styles.box2} />
       <View style={styles.box3} />
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 20,
     flexDirection: "row",
     justifyContent: "space-between",
   },
   box1: {
     width: 100,
     height: 100,
     backgroundColor: "red",
   },
   box2: {
     width: 100,
     height: 100,
     backgroundColor: "green",
   },
   box3: {
     width: 100,
     height: 100,
     backgroundColor: "blue",
   },
 });

 export default ViewExample;