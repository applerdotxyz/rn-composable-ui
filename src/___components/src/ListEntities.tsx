// import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { RenderList } from "./RenderList";
// import { useRouting } from "expo-next-react-navigation";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ListEntities = () => {
  // const { goBack } = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        "https://run.mocky.io/v3/15c75559-42b2-45ed-bcf2-06c48aa51bdf"
      );
      const resJSON = await res.json();

      setData(resJSON.ticketDetails);

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
      <Text style={styles.heading}>Search Filter Example</Text>
      {/* Component I rendered */}
      <RenderList
        data={data}
        searchFields={["name", "description", "category", "subCategory"]}
        visibleKeys={["name", "category", "subCategory"]}
        titleStyle={null}
        dataStyle={{ color: "darkblue" }}
      />

      {/* No Filtering Demo-ed */}
      {/* <RenderList
        data={data}
        searchFields={["name", "description", "category", "subCategory"]}
        visibleKeys={["name", "category", "subCategory"]}
        filterEnabled={false}
      /> */}

      {/* Custom Rendering Demo-ed, hedings hidden */}
      {/* <RenderList
        data={data}
        searchFields={[
          "name",
          "description",
          "categoryImg",
          "category",
          "subCategory",
        ]}
        visibleKeys={["categoryImg"]}
        titleStyle={null}
        dataStyle={{ color: "red" }}
        filterEnabled={true}
        customFilter={false}
        hideHeader={true}
        customRender={{
          categoryImg: (val, allData) => {
            return (
              <View style={{}}>
                <Image
                  source={{ uri: val }}
                  style={{
                    height: 250,
                    width: 400,
                    alignSelf: "center",
                    padding: 10,
                  }}
                />
                <View
                  style={{
                    alignSelf: "center",
                    padding: 15,
                  }}
                >
                  <Text>Name: {allData.name}</Text>
                  <Text>Category: {allData.category}</Text>
                  <Text>Sub Category: {allData.subCategory}</Text>
                </View>
              </View>
            );
          },
        }}
      /> */}
{/* 
      <RenderList
        data={data}
        searchFields={[
          "name",
          "description",
          "categoryImg",
          "category",
          "subCategory",
        ]}
        visibleKeys={["categoryImg"]}
        hideHeader={true}
        customRender={{
          categoryImg: (val, allData) => (
            <View style={{}}>
              <Image
                source={{ uri: val }}
                style={{
                  height: 250,
                  width: 400,
                  alignSelf: "center",
                  padding: 10,
                }}
              />
              <View
                style={{
                  alignSelf: "center",
                  padding: 15,
                }}
              >
                <Text>Name: {allData.name}</Text>
                <Text>Category: {allData.category}</Text>
                <Text>Sub Category: {allData.subCategory}</Text>
              </View>
            </View>
          ),
        }}
      /> */}

      <View
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
            // goBack();
          }}
          title="Go Back"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    minHeight: Dimensions.get("window").height - 50,
    minWidth: Dimensions.get("window").width / 4,
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
    fontWeight: "bold",
    marginVertical: 10,
  },
  link: {
    color: "blue",
  },
});
