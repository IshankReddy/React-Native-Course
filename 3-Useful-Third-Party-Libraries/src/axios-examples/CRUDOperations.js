 import React, { useState } from "react";
 import {
   ScrollView,
   StyleSheet,
   Text,
   View,
   TextInput,
   ActivityIndicator,
 } from "react-native";
 import { Button } from "react-native-elements";
 import axios from "axios";

 const CRUDOperations = () => {
   // State management for form inputs and responses
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [loading, setLoading] = useState(false);
   const [response, setResponse] = useState(null);
   const [error, setError] = useState(null);

   // Base URL for all requests
   const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

   // CREATE - POST request
   const createPost = async () => {
     setLoading(true);
     setError(null);
     try {
       const response = await axios.post(BASE_URL, {
         title,
         body,
         userId: 1, // Dummy user ID
       });
       setResponse({
         type: "POST",
         data: response.data,
       });
     } catch (err) {
       setError("Error creating post: " + err.message);
     }
     setLoading(false);
   };

   // READ - GET request
   const getPost = async () => {
     setLoading(true);
     setError(null);
     try {
       const response = await axios.get(`${BASE_URL}/1`);
       setResponse({
         type: "GET",
         data: response.data,
       });
     } catch (err) {
       setError("Error fetching post: " + err.message);
     }
     setLoading(false);
   };

   // UPDATE - PUT request
   const updatePost = async () => {
     setLoading(true);
     setError(null);
     try {
       const response = await axios.put(`${BASE_URL}/1`, {
         title,
         body,
         userId: 1,
       });
       setResponse({
         type: "PUT",
         data: response.data,
       });
     } catch (err) {
       setError("Error updating post: " + err.message);
     }
     setLoading(false);
   };

   // DELETE - DELETE request
   const deletePost = async () => {
     setLoading(true);
     setError(null);
     try {
       const response = await axios.delete(`${BASE_URL}/1`);
       setResponse({
         type: "DELETE",
         data: { message: "Post deleted successfully" },
       });
     } catch (err) {
       setError("Error deleting post: " + err.message);
     }
     setLoading(false);
   };

   return (
     <ScrollView style={styles.container}>
       <Text style={styles.title}>CRUD Operations with Axios</Text>

       {/* Input Form */}
       <View style={styles.inputContainer}>
         <TextInput
           style={styles.input}
           placeholder="Enter title"
           value={title}
           onChangeText={setTitle}
         />
         <TextInput
           style={[styles.input, styles.bodyInput]}
           placeholder="Enter body"
           value={body}
           onChangeText={setBody}
           multiline
         />
       </View>

       {/* CRUD Buttons */}
       <View style={styles.buttonContainer}>
         <Button
           title="Create Post"
           onPress={createPost}
           containerStyle={styles.buttonWrapper}
         />
         <Button
           title="Get Post"
           onPress={getPost}
           containerStyle={styles.buttonWrapper}
         />
         <Button
           title="Update Post"
           onPress={updatePost}
           containerStyle={styles.buttonWrapper}
         />
         <Button
           title="Delete Post"
           onPress={deletePost}
           containerStyle={styles.buttonWrapper}
           buttonStyle={{ backgroundColor: "#e74c3c" }}
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
   inputContainer: {
     marginBottom: 20,
   },
   input: {
     backgroundColor: "white",
     padding: 10,
     borderRadius: 5,
     marginBottom: 10,
     borderWidth: 1,
     borderColor: "#ddd",
   },
   bodyInput: {
     height: 100,
     textAlignVertical: "top",
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

 export default CRUDOperations;