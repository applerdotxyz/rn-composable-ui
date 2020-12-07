import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import SearchInput, { createFilter } from "react-native-search-filter";

export default function RenderList({
  data,
  searchFields,
  visibleKeys,
  titleStyle,
  dataStyle,
}) {
  const [searchItem, setSearchItem] = useState("");

  const filterData = data.filter(createFilter(searchItem, searchFields));

  const keys = visibleKeys || Object.keys(data[0] || []);

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <SearchInput
          placeholder="Enter Keyword to Search"
          onChangeText={(value) => setSearchItem(value)}
          style={{ padding: 5, borderWidth: 1, borderColor: "grey" }}
        />
      </View>
      <ScrollView style={{ margin: 10 }}>
        {data.length && keys.length ? (
          <View style={styles.headerRow}>
            {keys.map((key, i) => (
              <Text key={i} style={[styles.tableHead, titleStyle]}>
                {key.substring(0, 1).toUpperCase() + key.substring(1)}
              </Text>
            ))}
          </View>
        ) : null}
        {filterData.map((d) => {
          return (
            <TouchableOpacity key={d.id}>
              <View style={{ flexDirection: "row" }}>
                {keys.length
                  ? keys.map((key, i) => (
                      // Remove numberOfLines and ellipsizeMode, if the content row span doesn't bother us
                      // Doesn't seem too polished for web
                      <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={[styles.tableVal, dataStyle]}
                      >
                        {d[key]}{" "}
                      </Text>
                    ))
                  : null}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tableHead: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  tableVal: {
    flex: 1,
    padding: 10,
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "grey",
  },
});
