/* eslint-disable react/prop-types */
import { match } from "assert";
import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import { routes } from "../../configs/routes/routesConfig";

const TextRender = ({ textFeild, value }: any) => {
  return (
    <Row
      style={{
        margin: 10,
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

const Item = ({ item, onPress, style }: any) => (
  <TouchableOpacity onPress={onPress} style={[detailViewStyles.item, style]}>
    <Grid
      style={{
        flex: 1,
        // borderWidth: 3,
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
          <Text style={detailViewStyles.title}>Bill To Address Details</Text>
          {/* <Text>{JSON.stringify(match.params.orderKey)}</Text>
          <Text>{JSON.stringify(routes)}</Text> */}
        </Col>
      </Row>
      <Row
        style={{
          // borderWidth: 1,
          padding: 10,
          flex: 1,
          marginTop: 30,
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
          <TextRender
            textFeild={`Address Info Key`}
            value={item.addressInfoKey}
          />
          <TextRender textFeild={`First Name`} value={item.firstName} />
          <TextRender textFeild={`Last Name`} value={item.lastName} />
          <TextRender textFeild={`City`} value={item.city} />
          <TextRender textFeild={`State`} value={item.state} />
          <TextRender textFeild={`Postal code`} value={item.postalCode} />
        </Col>
      </Row>
    </Grid>
  </TouchableOpacity>
);

export const DetailListComponent = (props: {
  appState: any;
  label: any;
  styles: any;
  children: any;
  setAppState: any;
  layoutConfig: any;
  setLayoutConfig: any;
  getEvents: any;
  events: any;
}) => {
  const {
    appState,
    label,
    styles,
    children,
    setAppState,
    layoutConfig,
    setLayoutConfig,
    getEvents,
  } = props;

  console.log(`label is ${label}`);
  console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));

  const [selectedId, setSelectedId] = useState(null);

  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:8080/transaction-web/v1/address/1122150101`,
        // `https://run.mocky.io/v3/31e2c2ab-c3de-464a-9f75-17324669aa95`,
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
      <View style={detailViewStyles.container}>
        <ActivityIndicator />
      </View>
    );

  const renderItem = ({ item }: any) => {
    const backgroundColor = item.id === selectedId ? "#e0e0e0" : "#fff";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
        match={match}
        routes={routes}
      />
    );
  };

  return (
    <View>
      <Text style={{}}>DetailListComponent *** {label}</Text>
      <Text>
        <h1>{label}</h1>
      </Text>
      <View style={detailViewStyles.container}>
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
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};

const detailViewStyles = StyleSheet.create({
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
