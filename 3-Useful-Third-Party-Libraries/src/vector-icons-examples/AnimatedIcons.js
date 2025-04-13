 import React, { useState } from "react";
 import {
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   Animated,
   View,
 } from "react-native";
 import Icon from "react-native-vector-icons/MaterialIcons";

 const AnimatedIcon = Animated.createAnimatedComponent(Icon);

 const AnimatedIcons = () => {
   const [heartScale] = useState(new Animated.Value(1));
   const [starRotation] = useState(new Animated.Value(0));
   const [bellShake] = useState(new Animated.Value(0));

   const animateHeart = () => {
     Animated.sequence([
       Animated.spring(heartScale, {
         toValue: 1.5,
         useNativeDriver: true,
       }),
       Animated.spring(heartScale, {
         toValue: 1,
         useNativeDriver: true,
       }),
     ]).start();
   };

   const animateStar = () => {
     Animated.sequence([
       Animated.timing(starRotation, {
         toValue: 1,
         duration: 1000,
         useNativeDriver: true,
       }),
       Animated.timing(starRotation, {
         toValue: 0,
         duration: 0,
         useNativeDriver: true,
       }),
     ]).start();
   };

   const animateBell = () => {
     Animated.sequence([
       ...Array(4).fill(
         Animated.sequence([
           Animated.timing(bellShake, {
             toValue: 1,
             duration: 100,
             useNativeDriver: true,
           }),
           Animated.timing(bellShake, {
             toValue: -1,
             duration: 100,
             useNativeDriver: true,
           }),
         ])
       ),
       Animated.timing(bellShake, {
         toValue: 0,
         duration: 100,
         useNativeDriver: true,
       }),
     ]).start();
   };

   const spin = starRotation.interpolate({
     inputRange: [0, 1],
     outputRange: ["0deg", "360deg"],
   });

   const shake = bellShake.interpolate({
     inputRange: [-1, 0, 1],
     outputRange: ["-15deg", "0deg", "15deg"],
   });

   return (
     <ScrollView style={styles.container}>
       <Text style={styles.title}>Animated Icons</Text>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Scale Animation</Text>
         <TouchableOpacity onPress={animateHeart} style={styles.iconContainer}>
           <AnimatedIcon
             name="favorite"
             size={50}
             color="#e91e63"
             style={[{ transform: [{ scale: heartScale }] }]}
           />
           <Text style={styles.iconLabel}>Tap to Scale</Text>
         </TouchableOpacity>
       </View>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Rotation Animation</Text>
         <TouchableOpacity onPress={animateStar} style={styles.iconContainer}>
           <AnimatedIcon
             name="star"
             size={50}
             color="#f1c40f"
             style={[{ transform: [{ rotate: spin }] }]}
           />
           <Text style={styles.iconLabel}>Tap to Rotate</Text>
         </TouchableOpacity>
       </View>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Shake Animation</Text>
         <TouchableOpacity onPress={animateBell} style={styles.iconContainer}>
           <AnimatedIcon
             name="notifications"
             size={50}
             color="#3498db"
             style={[{ transform: [{ rotate: shake }] }]}
           />
           <Text style={styles.iconLabel}>Tap to Shake</Text>
         </TouchableOpacity>
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
     marginBottom: 30,
     alignItems: "center",
   },
   sectionTitle: {
     fontSize: 18,
     fontWeight: "bold",
     marginBottom: 15,
   },
   iconContainer: {
     alignItems: "center",
   },
   iconLabel: {
     marginTop: 10,
     fontSize: 14,
     color: "#666",
   },
 });

 export default AnimatedIcons;