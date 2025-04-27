 import React from "react";
 import { Pressable, StyleSheet, View } from "react-native";
 import Animated, { useAnimatedStyle } from "react-native-reanimated";
 import { useTheme } from "./Theme";

 export const ThemeToggle = () => {
   const { colors, toggleTheme, switchPosition } = useTheme();

   const thumbStyle = useAnimatedStyle(() => ({
     transform: [{ translateX: switchPosition.value }],
   }));

   return (
     <Pressable onPress={toggleTheme}>
       <View style={[styles.track, { backgroundColor: colors.switchTrack }]}>
         <Animated.View
           style={[
             styles.thumb,
             { backgroundColor: colors.switchThumb },
             thumbStyle,
           ]}
         />
       </View>
     </Pressable>
   );
 };

 const styles = StyleSheet.create({
   track: {
     width: 50,
     height: 30,
     borderRadius: 15,
     padding: 5,
   },
   thumb: {
     width: 20,
     height: 20,
     borderRadius: 10,
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5,
   },
 });