 import React from "react";
 import {
   ScrollView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
 } from "react-native";
 import Icon from "react-native-vector-icons/MaterialIcons";

 const IconButtons = () => {
   return (
     <ScrollView style={styles.container}>
       <Text style={styles.title}>Icon Buttons</Text>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Basic Icon Buttons</Text>
         <View style={styles.row}>
           <TouchableOpacity
             style={styles.iconButton}
             onPress={() => alert("Add pressed!")}
           >
             <Icon name="add" size={24} color="#fff" />
           </TouchableOpacity>

           <TouchableOpacity
             style={[styles.iconButton, styles.warningButton]}
             onPress={() => alert("Edit pressed!")}
           >
             <Icon name="edit" size={24} color="#fff" />
           </TouchableOpacity>

           <TouchableOpacity
             style={[styles.iconButton, styles.dangerButton]}
             onPress={() => alert("Delete pressed!")}
           >
             <Icon name="delete" size={24} color="#fff" />
           </TouchableOpacity>
         </View>
       </View>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Icon Buttons with Labels</Text>
         <View style={styles.row}>
           <TouchableOpacity
             style={styles.labeledIconButton}
             onPress={() => alert("Share pressed!")}
           >
             <Icon name="share" size={24} color="#2089dc" />
             <Text style={styles.buttonLabel}>Share</Text>
           </TouchableOpacity>

           <TouchableOpacity
             style={styles.labeledIconButton}
             onPress={() => alert("Favorite pressed!")}
           >
             <Icon name="favorite" size={24} color="#e91e63" />
             <Text style={styles.buttonLabel}>Like</Text>
           </TouchableOpacity>

           <TouchableOpacity
             style={styles.labeledIconButton}
             onPress={() => alert("Download pressed!")}
           >
             <Icon name="file-download" size={24} color="#4caf50" />
             <Text style={styles.buttonLabel}>Download</Text>
           </TouchableOpacity>
         </View>
       </View>

       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Outlined Icon Buttons</Text>
         <View style={styles.row}>
           <TouchableOpacity
             style={styles.outlinedButton}
             onPress={() => alert("Camera pressed!")}
           >
             <Icon name="camera-alt" size={24} color="#2089dc" />
           </TouchableOpacity>

           <TouchableOpacity
             style={[styles.outlinedButton, styles.warningOutlined]}
             onPress={() => alert("Location pressed!")}
           >
             <Icon name="location-on" size={24} color="#f1c40f" />
           </TouchableOpacity>

           <TouchableOpacity
             style={[styles.outlinedButton, styles.dangerOutlined]}
             onPress={() => alert("Notifications pressed!")}
           >
             <Icon name="notifications" size={24} color="#e74c3c" />
           </TouchableOpacity>
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
     marginBottom: 30,
   },
   sectionTitle: {
     fontSize: 18,
     fontWeight: "bold",
     marginBottom: 15,
   },
   row: {
     flexDirection: "row",
     justifyContent: "space-around",
     alignItems: "center",
   },
   iconButton: {
     backgroundColor: "#2089dc",
     padding: 10,
     borderRadius: 50,
     width: 50,
     height: 50,
     justifyContent: "center",
     alignItems: "center",
   },
   warningButton: {
     backgroundColor: "#f1c40f",
   },
   dangerButton: {
     backgroundColor: "#e74c3c",
   },
   labeledIconButton: {
     alignItems: "center",
     padding: 10,
   },
   buttonLabel: {
     marginTop: 5,
     fontSize: 12,
   },
   outlinedButton: {
     borderWidth: 2,
     borderColor: "#2089dc",
     padding: 10,
     borderRadius: 50,
     width: 50,
     height: 50,
     justifyContent: "center",
     alignItems: "center",
   },
   warningOutlined: {
     borderColor: "#f1c40f",
   },
   dangerOutlined: {
     borderColor: "#e74c3c",
   },
 });

 export default IconButtons;