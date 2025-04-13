import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { ListItem, Avatar, Badge, Icon, Switch } from "react-native-elements";

const ListItemsExample = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const users = [
    {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      subtitle: "React Native Developer",
    },
    {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      subtitle: "UI Designer",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ListItem Examples</Text>

      {users.map((user, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar rounded source={{ uri: user.avatar }} />
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          <Badge value="99+" status="error" />
        </ListItem>
      ))}

      <ListItem bottomDivider>
        <Icon name="inbox" type="material" />
        <ListItem.Content>
          <ListItem.Title>Inbox</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <ListItem bottomDivider>
        <Icon name="settings" type="material" />
        <ListItem.Content>
          <ListItem.Title>Settings</ListItem.Title>
          <ListItem.Subtitle>Configure your app</ListItem.Subtitle>
        </ListItem.Content>
        <Switch
          value={switchValue}
          onValueChange={(value) => setSwitchValue(value)}
        />
      </ListItem>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  },
});

export default ListItemsExample;
