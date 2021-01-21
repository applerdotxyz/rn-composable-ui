/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useHistory } from "react-router-native";
import SearchList from "../SearchList";
// import { useRouting } from "expo-next-react-navigation";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const OrderSearchList = (props) => {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(props.props);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      // const res = await fetch(
      //     "https://run.mocky.io/v3/56a7c1e0-434a-4773-b6b4-4cfc12fe1624"
      // );
      // const resJSON = await res.json();
      // setData(resJSON.ticketDetails);

      // TODO : props.props... not a good way to code ..
      setData(props.props.location.state.response);

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

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search Order Here</Text>
      <ScrollView style={styles.container}>
        <SearchList
          data={data}
          searchFields={[
            "orderName",
            "orderKey",
            "orderType",
            "status",
            "orderDate",
            "addressKey",
          ]}
          visibleKeys={[
            "orderKey",
            "orderName",
            "orderType",
            "status",
            "orderDate",
            "addressKey",
            "Action",
          ]}
          flexWidth={[1, 2, 1, 1, 2, 1, 0]} // Column-span (length of array should be equal to that of visibleKeys)
          numberOfLines={props.props.location.state.response.length} // Row-span
          searchBarWrapperStyle={null}
          searchBarStyle={null}
          titleStyle={null}
          dataStyle={{ color: "darkblue" }}
          inputPlaceholder="Search Here"
          buttonColor="#0e73ca"
          buttonTitle="Show"
          buttonPress={() => {
            history.push(`/orderdetails/10399/89930`);
          }}
        />
        <View
          style={{
            marginLeft: 100,
            marginRight: 100,
            marginBottom: 10,
            marginTop: 10,
          }}
        ></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    minHeight: Dimensions.get("window").height - 50,
    minWidth: Dimensions.get("window").width / 4,
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  link: {
    color: "blue",
  },
});
