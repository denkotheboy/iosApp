import React from "react";
import { ListItem, Icon } from "react-native-elements";

const List = ({ listToDos, color, deleteToDo }) => {
  return listToDos.map((toDo, i) => (
    <ListItem key={i} bottomDivider>
      <Icon name="angle-right" type="font-awesome" color={color} />
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
  ));
};

export default List;
