import React, { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import update from "immutability-helper";

import { Button, Header, Input } from "react-native-elements";

import store from "./store";
import List from "./components/List";

const App = () => {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const [listToDos, setListToDos] = useState([]);

  const color = "#009999";

  const add = () => {
    if (value !== "") {
      setListToDos([value, ...listToDos]);
      setValue("");
    }
  };
  const deleteToDo = (id) => {
    setListToDos(update(listToDos, { $splice: [[id, 1]] }));
  };

  useEffect(() => {
    console.log(listToDos);
  }, [listToDos]);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header
          backgroundColor={color}
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
          value={value}
          onChangeText={(value) => setValue(value)}
          onSubmitEditing={add}
        />

        <View style={{ alignItems: "center", padding: 0 }}>
          <Button
            title="Отправить"
            onPress={add}
            buttonStyle={{
              width: "100%",
              backgroundColor: color,
            }}
          />
        </View>

        <List listToDos={listToDos} color={color} deleteToDo={deleteToDo} />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    color: "#000",
  },
});

export default App;
