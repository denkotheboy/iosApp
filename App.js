import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import update from "immutability-helper";

import {
  Icon,
  Button,
  Header,
  Input,
  ListItem,
  Avatar,
} from "react-native-elements";

export default function App() {
  const inputRef = useRef();
  const [value, setValue] = useState("Введите сообщение");
  const [listToDos, setListToDos] = useState([]);

  const add = () => {
    setListToDos([...listToDos, value.trim()]);
    inputRef.current.clear();
  };
  const deleteToDo = (id) => {
    setListToDos(update(listToDos, { $splice: [[id, 1]] }));
  };

  useEffect(() => {
    console.log(listToDos);
  }, [listToDos]);

  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#06baba"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "Моё первое приложение",
          style: { color: "#fff" },
        }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <Input
        inputStyle={{ marginTop: 5 }}
        ref={inputRef}
        placeholder="Введите задание"
        onChangeText={(value) => setValue(value)}
        onSubmitEditing={add}
      />

      <View style={{ alignItems: "center", padding: 0 }}>
        <Button
          title="Отправить"
          onPress={add}
          buttonStyle={{ width: "100%", backgroundColor: "#06baba" }}
        />
      </View>

      {listToDos.map((toDo, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name="angle-right" type="font-awesome" color="#06baba" />
          <ListItem.Content>
            <ListItem.Subtitle>{toDo}</ListItem.Subtitle>
          </ListItem.Content>
          <Icon
            name="times-circle"
            type="font-awesome"
            color="#f00"
            onPress={() => deleteToDo(i)}
          />
        </ListItem>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    color: "#000",
  },
});
