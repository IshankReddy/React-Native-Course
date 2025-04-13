 import React, { useState, useEffect } from "react";
 import {
   ScrollView,
   StyleSheet,
   Text,
   View,
   ActivityIndicator,
 } from "react-native";
 import axios from "axios";

 const BasicRequests = () => {
   // State management for posts and loading/error states
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
     // Function to fetch posts when component mounts
     fetchPosts();
   }, []);

   // Function to fetch posts from JSONPlaceholder API
   const fetchPosts = async () => {
     try {
       // Make GET request to fetch first 5 posts
       const response = await axios.get(
         "https://jsonplaceholder.typicode.com/posts",
         {
           params: {
             _limit: 5, // Limit to 5 posts
           },
         }
       );

       // Update state with fetched posts
       setPosts(response.data);
       setLoading(false);
     } catch (err) {
       // Handle any errors that occur during the request
       setError("Error fetching posts: " + err.message);
       setLoading(false);
     }
   };

   // Show loading spinner while data is being fetched
   if (loading) {
     return (
       <View style={styles.centerContainer}>
         <ActivityIndicator size="large" color="#2089dc" />
         <Text style={styles.loadingText}>Loading posts...</Text>
       </View>
     );
   }

   // Show error message if request failed
   if (error) {
     return (
       <View style={styles.centerContainer}>
         <Text style={styles.errorText}>{error}</Text>
       </View>
     );
   }

   // Render posts if request was successful
   return (
     <ScrollView style={styles.container}>
       <Text style={styles.title}>Basic GET Request Example</Text>

       {/* Map through posts and display them */}
       {posts.map((post) => (
         <View key={post.id} style={styles.postContainer}>
           <Text style={styles.postTitle}>{post.title}</Text>
           <Text style={styles.postBody}>{post.body}</Text>
         </View>
       ))}
     </ScrollView>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 15,
     backgroundColor: "#f5f5f5",
   },
   centerContainer: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     padding: 20,
   },
   title: {
     fontSize: 24,
     fontWeight: "bold",
     marginBottom: 20,
     textAlign: "center",
   },
   postContainer: {
     backgroundColor: "white",
     padding: 15,
     borderRadius: 8,
     marginBottom: 15,
     elevation: 2,
     shadowColor: "#000",
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.1,
     shadowRadius: 4,
   },
   postTitle: {
     fontSize: 18,
     fontWeight: "bold",
     marginBottom: 8,
     color: "#2c3e50",
   },
   postBody: {
     fontSize: 14,
     color: "#34495e",
     lineHeight: 20,
   },
   loadingText: {
     marginTop: 10,
     fontSize: 16,
     color: "#666",
   },
   errorText: {
     color: "red",
     fontSize: 16,
     textAlign: "center",
   },
 });

 export default BasicRequests;