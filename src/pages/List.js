import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";
import SearchList from './components/SearchList';
// import { useRouting } from "expo-next-react-navigation";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const List = () => {
  const { goBack } = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch('https://run.mocky.io/v3/56a7c1e0-434a-4773-b6b4-4cfc12fe1624');
      const resJSON = await res.json();
      setData(resJSON.ticketDetails);

      setLoading(false);
    }
    fetchData()
  }, [])

  if(loading) return (
    <View style={styles.container}>
        <ActivityIndicator />
    </View>
  )

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Search Filter Example</Text>
        <SearchList 
            data={data} 
            searchFields={["name", "description", "category", "subCategory"]} 
            visibleKeys={["name", "category", "subCategory"]}
            titleStyle={null}
            dataStyle={{color: 'darkblue'}}
        />
        <Button
            style={styles.link}
            accessibilityRole="link"
            onPress={() => {
            goBack();
            }}
            title="Go Back"
        />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10
  },
  link: {
    color: "blue",
  },
});
