 import React from "react";
 import { ScrollView, View, StyleSheet, Text } from "react-native";
 import MaterialIcons from "react-native-vector-icons/MaterialIcons";
 import FontAwesome from "react-native-vector-icons/FontAwesome";
 import Ionicons from "react-native-vector-icons/Ionicons";
 import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
 import AntDesign from "react-native-vector-icons/AntDesign";

 const IconsShowcase = () => {
   return (
     <ScrollView style={styles.container}>
       <Text style={styles.title}>Icon Libraries</Text>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Material Icons</Text>
         <View style={styles.iconRow}>
           <View style={styles.iconContainer}>
             <MaterialIcons name="home" size={30} color="#2089dc" />
             <Text style={styles.iconLabel}>home</Text>
           </View>
           <View style={styles.iconContainer}>
             <MaterialIcons name="favorite" size={30} color="#e91e63" />
             <Text style={styles.iconLabel}>favorite</Text>
           </View>
           <View style={styles.iconContainer}>
             <MaterialIcons name="settings" size={30} color="#4caf50" />
             <Text style={styles.iconLabel}>settings</Text>
           </View>
         </View>
       </View>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Font Awesome</Text>
         <View style={styles.iconRow}>
           <View style={styles.iconContainer}>
             <FontAwesome name="rocket" size={30} color="#3498db" />
             <Text style={styles.iconLabel}>rocket</Text>
           </View>
           <View style={styles.iconContainer}>
             <FontAwesome name="heart" size={30} color="#e74c3c" />
             <Text style={styles.iconLabel}>heart</Text>
           </View>
           <View style={styles.iconContainer}>
             <FontAwesome name="user" size={30} color="#2c3e50" />
             <Text style={styles.iconLabel}>user</Text>
           </View>
         </View>
       </View>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Ionicons</Text>
         <View style={styles.iconRow}>
           <View style={styles.iconContainer}>
             <Ionicons name="camera" size={30} color="#9b59b6" />
             <Text style={styles.iconLabel}>camera</Text>
           </View>
           <View style={styles.iconContainer}>
             <Ionicons name="mail" size={30} color="#34495e" />
             <Text style={styles.iconLabel}>mail</Text>
           </View>
           <View style={styles.iconContainer}>
             <Ionicons name="map" size={30} color="#16a085" />
             <Text style={styles.iconLabel}>map</Text>
           </View>
         </View>
       </View>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Material Community Icons</Text>
         <View style={styles.iconRow}>
           <View style={styles.iconContainer}>
             <MaterialCommunityIcons name="food" size={30} color="#e67e22" />
             <Text style={styles.iconLabel}>food</Text>
           </View>
           <View style={styles.iconContainer}>
             <MaterialCommunityIcons name="music" size={30} color="#8e44ad" />
             <Text style={styles.iconLabel}>music</Text>
           </View>
           <View style={styles.iconContainer}>
             <MaterialCommunityIcons
               name="weather-sunny"
               size={30}
               color="#f1c40f"
             />
             <Text style={styles.iconLabel}>sunny</Text>
           </View>
         </View>
       </View>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>AntDesign</Text>
         <View style={styles.iconRow}>
           <View style={styles.iconContainer}>
             <AntDesign name="github" size={30} color="#333" />
             <Text style={styles.iconLabel}>github</Text>
           </View>
           <View style={styles.iconContainer}>
             <AntDesign name="android1" size={30} color="#a4c639" />
             <Text style={styles.iconLabel}>android</Text>
           </View>
           <View style={styles.iconContainer}>
             <AntDesign name="apple1" size={30} color="#666" />
             <Text style={styles.iconLabel}>apple</Text>
           </View>
         </View>
       </View>
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
     textAlign: "center",
     marginBottom: 20,
   },
   section: {
     marginBottom: 20,
   },
   sectionTitle: {
     fontSize: 18,
     fontWeight: "bold",
     marginBottom: 10,
   },
   iconRow: {
     flexDirection: "row",
     justifyContent: "space-around",
     flexWrap: "wrap",
   },
   iconContainer: {
     alignItems: "center",
     margin: 10,
   },
   iconLabel: {
     marginTop: 5,
     fontSize: 12,
   },
 });

 export default IconsShowcase;