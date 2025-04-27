 import React, { useState, useEffect } from "react";
 import { View, Text, Button, StyleSheet } from "react-native";

 const Timer = () => {
   const [seconds, setSeconds] = useState(0);
   const [isRunning, setIsRunning] = useState(false);

   useEffect(() => {
     let intervalId;

     if (isRunning) {
       intervalId = setInterval(() => {
         setSeconds((prev) => prev + 1);
       }, 1000);
     }

     // Cleanup function
     return () => {
       if (intervalId) {
         clearInterval(intervalId);
       }
     };
   }, [isRunning]);

   return (
     <View style={styles.container}>
       <Text style={styles.text}>Timer: {seconds}s</Text>
       <Button
         title={isRunning ? "Stop" : "Start"}
         onPress={() => setIsRunning(!isRunning)}
       />
       <Button title="Reset" onPress={() => setSeconds(0)} />
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
 });

 export default Timer;