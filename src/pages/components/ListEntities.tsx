import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RenderList from "../components/RenderList";
// import { useRouting } from "expo-next-react-navigation";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ListEntities = () => {
  const { goBack } = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        "https://run.mocky.io/v3/56a7c1e0-434a-4773-b6b4-4cfc12fe1624"
      );
      console.log("Res : : : : : : ", res);
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
            goBack();
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
