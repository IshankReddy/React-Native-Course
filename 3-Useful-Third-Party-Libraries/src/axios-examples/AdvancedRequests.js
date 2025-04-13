 import React, { useState } from "react";
 import {
   ScrollView,
   StyleSheet,
   Text,
   View,
   ActivityIndicator,
 } from "react-native";
 import { Button } from "react-native-elements";
 import axios from "axios";

 const AdvancedRequests = () => {
   // State for managing responses and loading states
   const [loading, setLoading] = useState(false);
   const [response, setResponse] = useState(null);
   const [error, setError] = useState(null);

   // Example of concurrent requests using Promise.all
   const fetchMultipleResources = async () => {
     setLoading(true);
     setError(null);
     try {
       // Make multiple requests simultaneously
       const [posts, comments, users] = await Promise.all([
         axios.get("https://jsonplaceholder.typicode.com/posts?_limit=2"),
         axios.get("https://jsonplaceholder.typicode.com/comments?_limit=2"),
         axios.get("https://jsonplaceholder.typicode.com/users?_limit=2"),
       ]);

       setResponse({
         type: "Multiple Requests",
         data: {
           posts: posts.data,
           comments: comments.data,
           users: users.data,
         },
       });
     } catch (err) {
       setError("Error fetching multiple resources: " + err.message);
     }
     setLoading(false);
   };

   // Example of request with custom headers and params
   const customHeaderRequest = async () => {
     setLoading(true);
     setError(null);
     try {
       const response = await axios.get(
         "https://jsonplaceholder.typicode.com/posts",
         {
           headers: {
             "Custom-Header": "custom-value",
             Accept: "application/json",
           },
           params: {
             _limit: 2,
             _sort: "id",
             _order: "desc",
           },
         }
       );

       setResponse({
         type: "Custom Headers & Params",
         data: response.data,
       });
     } catch (err) {
       setError("Error with custom header request: " + err.message);
     }
     setLoading(false);
   };

   // Example of request with timeout and error handling
   const timeoutRequest = async () => {
     setLoading(true);
     setError(null);
     try {
       const response = await axios.get(
         "https://jsonplaceholder.typicode.com/posts/1",
         {
           timeout: 5000, // 5 second timeout
         }
       );

       setResponse({
         type: "Timeout Request",
         data: response.data,
       });
     } catch (err) {
       if (err.code === "ECONNABORTED") {
         setError("Request timed out!");
       } else {
         setError("Error with timeout request: " + err.message);
       }
     }
     setLoading(false);
   };

   return (
     <ScrollView style={styles.container}>
       <Text style={styles.title}>Advanced Axios Examples</Text>

       {/* Request Buttons */}
       <View style={styles.buttonContainer}>
         <Button
           title="Fetch Multiple Resources"
           onPress={fetchMultipleResources}
           containerStyle={styles.buttonWrapper}
         />
         <Button
           title="Custom Headers & Params"
           onPress={customHeaderRequest}
           containerStyle={styles.buttonWrapper}
         />
         <Button
           title="Timeout Request"
           onPress={timeoutRequest}
           containerStyle={styles.buttonWrapper}
         />
       </View>

       {/* Loading Indicator */}
       {loading && (
         <View style={styles.loadingContainer}>
           <ActivityIndicator size="large" color="#2089dc" />
         </View>
       )}

       {/* Error Display */}
       {error && (
         <View style={styles.responseContainer}>
           <Text style={styles.errorText}>{error}</Text>
         </View>
       )}

       {/* Response Display */}
       {response && (
         <View style={styles.responseContainer}>
           <Text style={styles.responseTitle}>{response.type} Response:</Text>
           <Text style={styles.responseText}>
             {JSON.stringify(response.data, null, 2)}
           </Text>
         </View>
       )}
     </ScrollView>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 15,
     backgroundColor: "#f5f5f5",
   },
   title: {
     fontSize: 24,
     fontWeight: "bold",
     marginBottom: 20,
     textAlign: "center",
   },
   buttonContainer: {
     marginBottom: 20,
   },
   buttonWrapper: {
     marginBottom: 10,
   },
   loadingContainer: {
     padding: 20,
     alignItems: "center",
   },
   responseContainer: {
     backgroundColor: "white",
     padding: 15,
     borderRadius: 8,
     marginBottom: 15,
   },
   responseTitle: {
     fontSize: 18,
     fontWeight: "bold",
     marginBottom: 10,
     color: "#2c3e50",
   },
   responseText: {
     fontSize: 14,
     color: "#34495e",
   },
   errorText: {
     color: "#e74c3c",
     fontSize: 16,
   },
 });

 export default AdvancedRequests;