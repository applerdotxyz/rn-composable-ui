import React, { useState, useEffect } from "react";
import { View, Button, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

export default function AgendaScroll({ route, navigation }: any) {
  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/9e6ea260-665c-4bc3-ac12-aebaf3b022aa")
      .then((res) => {
        // console.log(res)
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function renderItem(items) {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 45 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>{items.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        selected={"2020-11-02"}
        renderItem={renderItem}
        pastScrollRange={1}
        futureScrollRange={1}
      />
    </View>
  );
}
