 import React from "react";
 import { ScrollView, StyleSheet, View } from "react-native";
 import { Text, Card, Divider } from "react-native-elements";

 const TextExample = () => {
   return (
     <ScrollView style={styles.container}>
       <Card>
         <Text h1>Heading 1</Text>
         <Text h2>Heading 2</Text>
         <Text h3>Heading 3</Text>
         <Text h4>Heading 4</Text>
         <Divider style={styles.divider} />
         <Text>This is regular text</Text>
       </Card>

       <Card>
         <Card.Title>Text Styles</Card.Title>
         <Text style={styles.bold}>Bold Text</Text>
         <Text style={styles.italic}>Italic Text</Text>
         <Text style={styles.underline}>Underlined Text</Text>
         <Text style={styles.colored}>Colored Text</Text>
         <Text style={styles.alignCenter}>Center Aligned</Text>
         <Text style={styles.alignRight}>Right Aligned</Text>
       </Card>

       <Card>
         <Card.Title>Combined Styles</Card.Title>
         <Text style={[styles.bold, styles.colored]}>Bold and Colored</Text>
         <Text style={[styles.italic, styles.underline]}>
           Italic and Underlined
         </Text>
         <Text style={[styles.bold, styles.italic, styles.colored]}>
           Bold, Italic, and Colored
         </Text>
       </Card>

       <Card>
         <Card.Title>Font Sizes</Card.Title>
         <Text style={styles.tiny}>Tiny Text (10px)</Text>
         <Text style={styles.small}>Small Text (12px)</Text>
         <Text style={styles.medium}>Medium Text (16px)</Text>
         <Text style={styles.large}>Large Text (20px)</Text>
         <Text style={styles.xlarge}>Extra Large Text (24px)</Text>
       </Card>

       <Card>
         <Card.Title>Special Cases</Card.Title>
         <Text numberOfLines={2} style={styles.multiline}>
           This is a long text that will be truncated after two lines. Lorem
           ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua.
         </Text>
         <Text selectable style={styles.selectable}>
           This text is selectable - try to select me!
         </Text>
       </Card>

       <Card>
         <Card.Title>Text with Background</Card.Title>
         <View style={styles.textContainer}>
           <Text style={styles.textWithBackground}>Text with background</Text>
         </View>
         <View style={styles.textContainer}>
           <Text style={styles.textWithGradientBg}>
             Text with different background
           </Text>
         </View>
       </Card>
     </ScrollView>
   );
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 10,
   },
   divider: {
     marginVertical: 10,
   },
   bold: {
     fontWeight: "bold",
     marginVertical: 5,
   },
   italic: {
     fontStyle: "italic",
     marginVertical: 5,
   },
   underline: {
     textDecorationLine: "underline",
     marginVertical: 5,
   },
   colored: {
     color: "#2089dc", // React Native Elements default blue
     marginVertical: 5,
   },
   alignCenter: {
     textAlign: "center",
     marginVertical: 5,
   },
   alignRight: {
     textAlign: "right",
     marginVertical: 5,
   },
   tiny: {
     fontSize: 10,
     marginVertical: 2,
   },
   small: {
     fontSize: 12,
     marginVertical: 2,
   },
   medium: {
     fontSize: 16,
     marginVertical: 2,
   },
   large: {
     fontSize: 20,
     marginVertical: 2,
   },
   xlarge: {
     fontSize: 24,
     marginVertical: 2,
   },
   multiline: {
     marginVertical: 5,
     lineHeight: 20,
   },
   selectable: {
     marginVertical: 5,
     color: "#2089dc",
     fontWeight: "bold",
   },
   textContainer: {
     marginVertical: 5,
   },
   textWithBackground: {
     backgroundColor: "#e1e8ee",
     padding: 10,
     borderRadius: 5,
     overflow: "hidden",
     textAlign: "center",
   },
   textWithGradientBg: {
     backgroundColor: "#2089dc",
     color: "white",
     padding: 10,
     borderRadius: 5,
     overflow: "hidden",
     textAlign: "center",
   },
 });

 export default TextExample;