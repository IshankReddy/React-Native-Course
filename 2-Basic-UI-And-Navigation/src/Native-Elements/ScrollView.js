 import React from "react";
 import { ScrollView, View, Text, StyleSheet } from "react-native";

 const ScrollViewExample = () => {
   return (
     <View style={styles.container}>
       {/* Vertical ScrollView */}
       <Text style={styles.title}>Vertical ScrollView</Text>
       <ScrollView style={styles.verticalScroll}>
         {[...Array(20)].map((_, i) => (
           <View key={i} style={styles.box}>
             <Text>Item {i + 1}</Text>
           </View>
         ))}
       </ScrollView>

       {/* Horizontal ScrollView */}
       <Text style={styles.title}>Horizontal ScrollView</Text>
       <ScrollView
         horizontal
         style={styles.horizontalScroll}
         showsHorizontalScrollIndicator={false}
       >
         {[...Array(10)].map((_, i) => (
           <View key={i} style={styles.horizontalBox}>
             <Text>Item {i + 1}</Text>
           </View>
         ))}
       </ScrollView>
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 20,
   },
   title: {
     fontSize: 18,
     fontWeight: "bold",
     marginBottom: 10,
   },
   verticalScroll: {
     height: 300,
     marginBottom: 20,
   },
   horizontalScroll: {
     height: 100,
   },
   box: {
     padding: 20,
     marginVertical: 5,
     backgroundColor: "#f0f0f0",
     borderRadius: 5,
   },
   horizontalBox: {
     width: 100,
     height: 100,
     marginRight: 10,
     backgroundColor: "#f0f0f0",
     borderRadius: 5,
     justifyContent: "center",
     alignItems: "center",
   },
 });

 export default ScrollViewExample;