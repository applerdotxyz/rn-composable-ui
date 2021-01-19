import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import SearchInput, { createFilter } from "react-native-search-filter";
import { TouchableHighlight } from "react-native";

{
  /* 
    <SearchList 
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
    /> 
*/
}

export default function SearchList({
  data,
  searchFields,
  visibleKeys,
  flexWidth,
  titleStyle,
  dataStyle,
  inputPlaceholder,
  searchBarWrapperStyle,
  searchBarStyle,
  ...props
}) {
  const [searchItem, setSearchItem] = useState("");

  const filterData = data.filter(createFilter(searchItem, searchFields));

  const keys = visibleKeys || Object.keys(data[0] || []);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-around",
          },
          searchBarWrapperStyle,
        ]}
      >
        <SearchInput
          placeholder={inputPlaceholder || "Enter Keyword to Search"}
          onChangeText={(value) => setSearchItem(value)}
          style={[
            { padding: 5, borderWidth: 1, borderColor: "grey", minWidth: 200 },
            searchBarStyle,
          ]}
        />
      </View>
      <ScrollView style={{ margin: 10 }}>
        {data.length && keys.length ? (
          <View style={styles.headerRow}>
            {keys.map((key, i) => (
              <Text
                key={i}
                style={[
                  styles.tableHead,
                  { flex: flexWidth ? flexWidth[i] : 1 },
                  titleStyle,
                ]}
              >
                {key.substring(0, 1).toUpperCase() + key.substring(1)}
              </Text>
            ))}
          </View>
        ) : null}
        {filterData.map((d) => {
          return (
            <TouchableHighlight key={d.id}>
              <View style={{ flexDirection: "row" }}>
                {keys.length
                  ? keys.map((key, i) => (
                      // Remove numberOfLines and ellipsizeMode, if the content row span doesn't bother us
                      // Doesn't seem too polished for web
                      <Text
                        key={i}
                        {...props}
                        style={[
                          styles.tableVal,
                          { flex: flexWidth ? flexWidth[i] : 1 },
                          dataStyle,
                        ]}
                      >
                        {d[key]}{" "}
                      </Text>
                    ))
                  : null}
              </View>
            </TouchableHighlight>
          );
        })}
      </ScrollView>
    </View>
  );
}

SearchList.propTypes = {
  data: PropTypes.array,
  searchFields: PropTypes.array,
  visibleKeys: PropTypes.array,
  flexWidth: PropTypes.array,
  titleStyle: PropTypes.object,
  dataStyle: PropTypes.object,
  inputPlaceholder: PropTypes.string,
  searchBarWrapperStyle: PropTypes.object,
  searchBarStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  tableHead: {
    flex: 1,
    margin: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
  tableVal: {
    flex: 1,
    margin: 8,
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    flex: 1,
  },
});
