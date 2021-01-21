/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";

const TextRender = ({ textFeild, value }) => {
  return (
    <Row
      style={{
        margin: 5,
      }}
    >
      <Col>
        <Text>{textFeild} : </Text>
      </Col>
      <Col>
        <Text>{value}</Text>
      </Col>
    </Row>
  );
};

const Item = ({ item, onPress, style, match }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Grid
      style={{
        flex: 1,
      }}
    >
      <Row
        style={
          {
            // borderWidth: 1,
            // height: Dimensions.get("window").height - 500
          }
        }
      >
        <Col
          style={
            {
              // borderWidth: 1,
            }
          }
        >
          <Text style={styles.title}>Selected Order Line Detail</Text>
          {/* <Text>{JSON.stringify(match.params.orderKey)}</Text>
          <Text>{JSON.stringify(routes)}</Text> */}
        </Col>
      </Row>
      <Row
        style={{
          // borderWidth: 1,
          padding: 10,
          flex: 1,
          marginTop: 40,
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <Col
          style={
            {
              // borderWidth: 1,
            }
          }
        >
          {/* TODO : ADD display name feild in API to generate Display text of the field */}
          <TextRender textFeild={`Order Line Key`} value={item.orderLineKey} />
          <TextRender
            textFeild={`Order Header Key`}
            value={item.orderHeaderKey}
          />
          <TextRender textFeild={`Quantity`} value={item.quantity} />
          <TextRender textFeild={`Unit Price`} value={item.unitPrice} />
          <TextRender textFeild={`Cost Price`} value={item.costPrice} />
          <TextRender textFeild={`Address Key`} value={item.addressKey} />
          <TextRender textFeild={`Currency Code`} value={item.currencyCode} />
          <TextRender textFeild={`Ship Node`} value={item.shipNode} />
          <TextRender textFeild={`Order No`} value={item.orderNo} />
          <TextRender textFeild={`Order Status`} value={item.status} />
        </Col>
      </Row>
    </Grid>
  </TouchableOpacity>
);

export const OrderLineDetailComponent = ({ match }) => {
  const [selectedId, setSelectedId] = useState(null);

  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:8080/transaction-web/v1/orderline/${match.params.orderLineKey}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const resJSON = await res.json();
      // console.log(resJSON);
      setdata([resJSON]);

      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#e0e0e0" : "#fff";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
        match={match}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={styles.container}> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      {/* </SafeAreaView> */}
      {/* TODO : Remove before final demo */}
      {/* <Text>
    {JSON.stringify(props)}
  </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
  },
  item: {
    padding: 10,
    margin: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderStyle: "solid",
    opacity: 1,
    // borderRadius: 2,
    // height: 330,
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
    // borderWidth : 2,
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
