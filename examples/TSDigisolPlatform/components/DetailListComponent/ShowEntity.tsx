/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { ScrollView } from "react-native-gesture-handler";
import { routes } from "../../configs/routes/routesConfig";

const TextRender = ({ textFeild, value }: any) => {
  return (
    <Row
      style={{
        margin: 3,
        // borderWidth: 2,
      }}
    >
      <Col
        style={
          {
            // borderWidth: 2,
          }
        }
      >
        <Text>{textFeild} : </Text>
      </Col>
      <Col
        style={
          {
            // borderWidth: 2,
          }
        }
      >
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
      <Row>
        <Col>
          <Text style={detailViewStyles.title}>{item.displayName}</Text>
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
          <View>
            {Object.keys(item).map(function (keyName, keyIndex) {
              return <TextRender textFeild={keyName} value={item[keyName]} />;
            })}
          </View>
        </Col>
      </Row>
    </Grid>
  </TouchableOpacity>
);

export const ShowEntity = (props: {
  props: {
    appState: any;
    label: any;
    styles: any;
    children: any;
    setAppState: any;
    layoutConfig: any;
    setLayoutConfig: any;
    getEvents: any;
    events: any;
  };
  viewData: any;
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
  } = props.props;

  const viewData = props.viewData;

  // console.log(`label is ${label}`);
  // console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));
  // console.log("Props : : : : in ShowEntity : : : : ", appState);

  console.log("viewData : : : : ", props);

  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }: any) => {
    const backgroundColor = item.id === selectedId ? "#e0e0e0" : "#fff";

    return (
      <View>
        <ScrollView
          style={{
            borderWidth: 0.5,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 5,
            maxHeight: 400,
          }}
        >
          <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            style={{
              backgroundColor,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 5,
            }}
          />
        </ScrollView>
        <Grid>
          <Row>
            <Col>
              <View style={detailViewStyles.buttonView}>
                <TouchableOpacity
                  style={detailViewStyles.button}
                  onPress={() => {
                    console.log("Hello Button ");
                  }}
                >
                  <Text style={detailViewStyles.textStyle}>EDIT</Text>
                </TouchableOpacity>
              </View>
            </Col>
            <Col>
              <View style={detailViewStyles.buttonView}>
                <TouchableOpacity
                  style={detailViewStyles.button}
                  onPress={() => {
                    console.log("Hello Button ");
                  }}
                >
                  <Text style={detailViewStyles.textStyle}>DELETE</Text>
                </TouchableOpacity>
              </View>
            </Col>
          </Row>
        </Grid>
      </View>
    );
  };

  return (
    <View>
      <View style={detailViewStyles.container}>
        {/* <SafeAreaView style={styles.container}> */}
        {/* <Text>{JSON.stringify(viewData)}</Text>
        <Text>{JSON.stringify(data)}</Text> */}
        <FlatList
          data={[viewData]}
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
  buttonView: {
    marginLeft: 50,
    marginRight: 150,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5cabc5",
    height: 35,
    width: "100%",
    paddingTop: 7,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  textStyle: {
    justifyContent: "center",
    alignContent: "center",
    // marginLeft: 10,
    // marginRight: 10,
    color: "white",
    fontWeight: "bold",
  },
});
