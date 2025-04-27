 import React, { useState, useMemo } from "react";
 import { View, Text, TextInput, StyleSheet } from "react-native";

 const ExpensiveCalculation = () => {
   const [number, setNumber] = useState("1");

   // Memoize the factorial calculation
   const factorial = useMemo(() => {
     const num = parseInt(number);
     if (isNaN(num)) return "Invalid input";
     if (num < 0) return "Cannot calculate factorial of negative numbers";
     if (num > 20) return "Number too large";

     let result = 1;
     for (let i = 2; i <= num; i++) {
       result *= i;
     }
     return result.toString();
   }, [number]);

   return (
     <View style={styles.container}>
       <Text style={styles.label}>Calculate Factorial:</Text>
       <TextInput
         style={styles.input}
         value={number}
         onChangeText={setNumber}
         keyboardType="numeric"
         maxLength={2}
       />
       <Text style={styles.result}>Result: {factorial}</Text>
     </View>
   );
 };

 const styles = StyleSheet.create({
   container: {
     padding: 20,
   },
   label: {
     fontSize: 18,
     marginBottom: 10,
   },
   input: {
     borderWidth: 1,
     borderColor: "#ccc",
     padding: 10,
     marginBottom: 20,
     borderRadius: 5,
   },
   result: {
     fontSize: 16,
   },
 });

 export default ExpensiveCalculation;