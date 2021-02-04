import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  Button,
  ScrollView,
  Dimensions,
  View,
} from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";

const DATA = [
  {
    id: "1",
    title: "Details",
    description:
      "We provide service for music sessions.\nYou will learn here:\nClassical\nPop",
    subInfo: " 2 batches a week\nTimings are 1pm-2pm 2pm-3pm ",
  },
  {
    id: "2",
    title: "Details",
    description:
      "We provide service for music sessions.\nYou will learn here:\nClassical\nPop",
    subInfo: " 2 batches a week\nTimings are 1pm-2pm 2pm-3pm ",
  },
  {
    id: "3",
    title: "Details",
    description:
      "We provide service for music sessions.\nYou will learn here:\nClassical\nPop",
    subInfo: " 2 batches a week\nTimings are 1pm-2pm 2pm-3pm ",
  },
  {
    id: "4",
    title: "Details",
    description:
      "We provide service for music sessions.\nYou will learn here:\nClassical\nPop",
    subInfo: " 2 batches a week\nTimings are 1pm-2pm 2pm-3pm ",
  },
];

const Item = ({ item, onPress, style }: any) => (
  <TouchableHighlight onPress={onPress} style={[styles.item, style]}>
    {/* <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.subInfo}>{item.subInfo}</Text> */}
    <Grid
      style={{
        flex: 1,
      }}
    >
      <Row
        style={
          {
            // borderWidth : 1,
            // height: Dimensions.get("window").height - 500
          }
        }
      >
        <Col
          style={
            {
              // borderWidth: 1
            }
          }
        >
          <Text style={styles.title}>{item.title}</Text>
        </Col>
      </Row>
      <Row
        style={
          {
            // borderWidth: 1
          }
        }
      >
        <Col
          style={
            {
              // borderWidth: 1
            }
          }
        >
          <Text style={styles.description}>{item.description}</Text>
        </Col>
      </Row>
      <Row
        style={
          {
            // borderWidth: 1
          }
        }
      >
        <Col
          style={{
            // borderWidth: 1,
            justifyContent: "center",
          }}
        >
          <Text style={styles.subInfo}>{item.subInfo}</Text>
        </Col>
      </Row>
    </Grid>
  </TouchableHighlight>
);

export const ShowEntity = (props: any) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }: any) => {
    const backgroundColor = item.id === selectedId ? "#e0e0e0" : "#fff";
    // const titleBackgroundColor = item.id === selectedId ? "#fff" : "#0d47a1";
    // const descriptionBackgroundColor = item.id === selectedId ? "#fff" : "#0d47a1";
    // const subInfoBackgroundColor = item.id === selectedId ? "#fff" : "#1565c0";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.container}> */}
      <ScrollView style={{}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </ScrollView>
      {/* </SafeAreaView> */}
      {/* TODO : Remove before final demo */}
      {/* <Text>
    {JSON.stringify(props)}
  </Text> */}
      <View
        style={{
          marginLeft: 100,
          marginRight: 100,
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Button
          title="Book"
          color="#0e73ca"
          onPress={() => {
            // props.navigation.navigate("Cal");
            alert("Booked Successfully");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    borderWidth: 0,
    // TODO :  this calculation of screen should come from props
    minHeight: Dimensions.get("window").height - 85,
    minWidth: Dimensions.get("window").width / 4,
  },
  item: {
    padding: 10,
    margin: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "#D3D6D6",
    // backgroundColor: "#FFFFFF",
    opacity: 1,
    // borderRadius: 2,
    height: 200,
    // alignItems: 'center',
    justifyContent: "center",
    elevation: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 1,
  },
  title: {
    fontSize: 20,
    color: "#0d47a1",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    color: "#0d47a1",
    textAlign: "left",
  },
  subInfo: {
    fontSize: 12,
    color: "#1565c0",
    textAlign: "center",
    fontWeight: "bold",
  },
});
