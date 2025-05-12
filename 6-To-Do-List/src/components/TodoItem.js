import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  ListItem,
  Icon,
  Button,
  Input,
  Overlay,
  useTheme,
} from "@rneui/themed";
import * as Animatable from "react-native-animatable";

const TodoItem = ({ item, onDelete, onUpdate, index }) => {
  const { theme } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item.title);
  const [editedDescription, setEditedDescription] = useState(item.description);

  const handleUpdate = () => {
    if (editedTitle.trim()) {
      onUpdate(item.id, {
        title: editedTitle.trim(),
        description: editedDescription.trim(),
      });
      setIsEditing(false);
    }
  };

  return (
    <>
      <Animatable.View
        animation="fadeInRight"
        duration={500}
        delay={index * 100}
        style={styles.animatedContainer}
      >
        <ListItem.Swipeable
          leftContent={() => (
            <View style={styles.deleteContainer}>
              <Icon
                name="trash"
                type="font-awesome"
                color="white"
                size={24}
                onPress={() => onDelete(item.id)}
              />
            </View>
          )}
          rightContent={() => (
            <View style={styles.editContainer}>
              <Icon
                name="edit"
                type="font-awesome"
                color="white"
                size={24}
                onPress={() => setIsEditing(true)}
              />
            </View>
          )}
          containerStyle={[
            styles.itemContainer,
            {
              backgroundColor: theme.mode === "dark" ? "#2a2a2a" : "#ffffff",
              shadowColor: theme.mode === "dark" ? "#000000" : "#000000",
            },
          ]}
        >
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <ListItem.Title
                style={[styles.title, { color: theme.colors.text }]}
              >
                {item.title}
              </ListItem.Title>
              {item.description ? (
                <ListItem.Subtitle
                  style={[
                    styles.description,
                    { color: theme.mode === "dark" ? "#bebebe" : "#666666" },
                  ]}
                >
                  {item.description}
                </ListItem.Subtitle>
              ) : null}
            </View>
            <View style={styles.actionButtons}>
              <Icon
                name="edit"
                type="feather"
                color={theme.mode === "dark" ? "#73c0ff" : "#2089dc"}
                size={20}
                onPress={() => setIsEditing(true)}
                containerStyle={styles.iconSpacing}
              />
              <Icon
                name="trash-2"
                type="feather"
                color={theme.mode === "dark" ? "#ff7070" : "#dc2020"}
                size={20}
                onPress={() => onDelete(item.id)}
              />
            </View>
          </View>
        </ListItem.Swipeable>
      </Animatable.View>

      <Overlay
        isVisible={isEditing}
        onBackdropPress={() => setIsEditing(false)}
        overlayStyle={[
          styles.overlay,
          {
            backgroundColor: theme.mode === "dark" ? "#2a2a2a" : "#ffffff",
          },
        ]}
      >
        <View style={styles.modalContent}>
          <Input
            label="Title"
            value={editedTitle}
            onChangeText={setEditedTitle}
            placeholder="Enter title"
            labelStyle={{ color: theme.colors.text }}
            inputStyle={{ color: theme.colors.text }}
            placeholderTextColor={theme.colors.grey3}
            inputContainerStyle={[
              styles.inputField,
              {
                borderColor: theme.mode === "dark" ? "#444" : "#e0e0e0",
                backgroundColor: theme.mode === "dark" ? "#222" : "#f5f5f5",
              },
            ]}
          />
          <Input
            label="Description"
            value={editedDescription}
            onChangeText={setEditedDescription}
            placeholder="Enter description"
            multiline
            labelStyle={{ color: theme.colors.text }}
            inputStyle={{ color: theme.colors.text }}
            placeholderTextColor={theme.colors.grey3}
            inputContainerStyle={[
              styles.inputField,
              {
                borderColor: theme.mode === "dark" ? "#444" : "#e0e0e0",
                backgroundColor: theme.mode === "dark" ? "#222" : "#f5f5f5",
              },
            ]}
          />
          <View style={styles.modalButtons}>
            <Button
              title="Cancel"
              type="outline"
              onPress={() => setIsEditing(false)}
              containerStyle={styles.modalButton}
              buttonStyle={{
                borderColor: theme.mode === "dark" ? "#73c0ff" : "#2089dc",
              }}
              titleStyle={{
                color: theme.mode === "dark" ? "#73c0ff" : "#2089dc",
              }}
            />
            <Button
              title="Update"
              onPress={handleUpdate}
              containerStyle={styles.modalButton}
              disabled={!editedTitle.trim()}
              buttonStyle={{
                backgroundColor: theme.mode === "dark" ? "#73c0ff" : "#2089dc",
              }}
            />
          </View>
        </View>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    marginHorizontal: 12,
    marginVertical: 6,
  },
  itemContainer: {
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 4,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    padding: 8,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  deleteContainer: {
    flex: 1,
    backgroundColor: "#ff4444",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 6,
    marginLeft: 12,
    marginRight: 6,
  },
  editContainer: {
    flex: 1,
    backgroundColor: "#2089dc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 6,
    marginLeft: 6,
    marginRight: 12,
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
  },
  iconSpacing: {
    marginRight: 16,
  },
  overlay: {
    width: "90%",
    borderRadius: 16,
    padding: 20,
  },
  modalContent: {
    width: "100%",
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  modalButton: {
    width: "40%",
  },
});

export default TodoItem;
