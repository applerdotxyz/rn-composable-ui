import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import SearchInput, { createFilter } from "react-native-search-filter";

{/* 
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
*/}

export default function SearchList({data, searchFields, visibleKeys, flexWidth, titleStyle, dataStyle, inputPlaceholder, searchBarWrapperStyle, searchBarStyle, ...props}) {
  const [searchItem, setSearchItem] = useState("");

  const filterData = data.filter(
    createFilter(searchItem, searchFields)
  )

  const keys = visibleKeys || Object.keys(data[0] || []);

  return (
    <View>
        <View style={[{ flexDirection: "row", justifyContent: "space-around" }, searchBarWrapperStyle]}>
            <SearchInput
              placeholder={inputPlaceholder || "Enter Keyword to Search"}
              onChangeText={(value) => setSearchItem(value)}
              style={[{ padding: 5, borderWidth: 1, borderColor: 'grey' }, searchBarStyle]}
            />
        </View>
      <ScrollView style={{ margin: 10 }}>
        {data.length && keys.length ? (
          <View style={styles.headerRow}>
            {
              keys.map((key, i) => (
                <Text key={i} style={[styles.tableHead, {flex: flexWidth ? flexWidth[i] : 1}, titleStyle]}>
                    {key.substring(0,1).toUpperCase()+ key.substring(1)}
                </Text>
              ))
            }
          </View>
        ): null}
        {filterData.map((d) => {
          return (
            <TouchableOpacity key={d.id}>
              <View style={{ flexDirection: "row" }}>
                {
                keys.length ? keys.map((key, i) => (
                    // Remove numberOfLines and ellipsizeMode, if the content row span doesn't bother us
                    // Doesn't seem too polished for web
                    <Text {...props} style={[styles.tableVal, {flex: flexWidth ? flexWidth[i] : 1}, dataStyle]}>{d[key]} </Text>
                )) : null
                }
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
        margin: 8,
        fontSize: 14,
        fontWeight: "bold"
    },
    tableVal: {
        flex: 1,
        margin: 8,
    },
    headerRow: {
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "grey",
    }
})