/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import OrderLineListRender from "./OrderLineListRender";
// import { useRouting } from "expo-next-react-navigation";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const OrderLineListComponent = ({ match, routes }: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        // "https://run.mocky.io/v3/1683d639-a832-4ce5-9173-1dfeff6dd741",
        `http://localhost:8080/transaction-web/v1/listOrderLines/list`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // TODO : REMOVE this hardcoding
            orderHeaderKey: match.params.orderKey,
          }),
        }
      );
      // console.log("Res : : : : : : ", res);
      const resJSON = await res.json();
      setData(resJSON.response);

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
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Order Line List View</Text>
      {/* Component I rendered */}
      <OrderLineListRender
        data={data}
        searchFields={["orderLineKey", "itemCode", "costPrice", "unitPrice"]}
        visibleKeys={["orderLineKey", "itemCode", "costPrice", "unitPrice"]}
        titleStyle={null}
        dataStyle={{ color: "darkblue" }}
        routes={routes}
      />
      {/* COmponent Satyam Rendered */}
      {/* <SearchList 
        data={data} 
        searchFields={["name", "description", "category", "subCategory"]} 
        visibleKeys={["name", "category", "description"]}
        flexWidth={[1,1,3]} // Column-span (length of array should be equal to that of visibleKeys)
        numberOfLines={3} // Row-span
        searchBarWrapperStyle={null}
        searchBarStyle={null}
        titleStyle={null}
        dataStyle={{color: 'darkblue'}}
        inputPlaceholder="Search Here"
    />  */}
      {/* <View
        style={{
          marginLeft: 100,
          marginRight: 100,
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Button
          accessibilityLabel="link"
          onPress={() => {
            goBack();
          }}
          title="Go Back"
        />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    // minHeight: Dimensions.get("window").height - 50,
    // minWidth: Dimensions.get("window").width / 4,
    // alignItems: "center",
    // flexGrow: 1,
    // justifyContent: "center",
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  heading: {
    fontSize: 20,
    color: "#0d47a1",
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    color: "blue",
  },
});
