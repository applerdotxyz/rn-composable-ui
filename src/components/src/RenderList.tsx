import React, { useState } from "react";
import {
  ScrollView,
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import SearchInput, { createFilter } from "react-native-search-filter";

export function RenderList({
  data = [], // actual JSOn data to be displayed
  searchFields, // for non-custom filtering look in these columns
  visibleKeys, // displayed columns
  titleStyle, // styled for headings
  dataStyle, // style for columns data

  filterEnabled = true, // enable filtering or not
  customFilter = false, // custom filtering passed in
  customRender = false, // custom rendering for different row + column values
  hideHeader = false, //hide headings
}: any) {
  const [searchItem, setSearchItem] = useState("");

  // filtering logic
  const filterData = () => {
    if (!filterEnabled) {
      return data;
    } else if (customFilter) {
      return data.filter(customFilter(searchItem, searchFields));
    } else {
      switch (searchItem) {
        case "image":
          // data.filter(createFilter(searchItem, searchFields));
          // TODO: find in image alt
          break;
        case "text":
          return data.filter(createFilter(searchItem, searchFields));
        default:
          return data.filter(createFilter(searchItem, searchFields));
      }
    }
  };

  const keys = visibleKeys || Object.keys(data[0] || []);

  // render row column data as text (this is default)
  const renderText = (key, columnData) => (
    <Text
      key={key}
      numberOfLines={2}
      ellipsizeMode="tail"
      style={[styles.tableVal, dataStyle]}
    >
      {columnData}
    </Text>
  );

  // console.log(filterData);
  // rendering the grid
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {/* rending the search field */}
        {filterEnabled ? (
          <SearchInput
            placeholder="Enter Keyword to Search"
            onChangeText={(value) => setSearchItem(value)}
            style={{ padding: 5, borderWidth: 1, borderColor: "grey" }}
          />
        ) : null}
      </View>
      <ScrollView style={{ margin: 10 }}>
        {data.length && keys.length && !hideHeader ? (
          <View style={styles.headerRow}>
            {keys.map((key, i) => (
              <Text key={i} style={[styles.tableHead, titleStyle]}>
                {key.substring(0, 1).toUpperCase() + key.substring(1)}
              </Text>
            ))}
          </View>
        ) : null}
        {filterData().map((rowData) => {
          return (
            <TouchableHighlight key={rowData.id}>
              <View style={{ flexDirection: "row" }}>
                {keys.length
                  ? keys.map((columnKey, columnId) => {
                      // Remove numberOfLines and ellipsizeMode, if the content row span doesn't bother us
                      // Doesn't seem too polished for web
                      if (customRender && customRender[columnKey]) {
                        // custom rending logic being run
                        return customRender[columnKey](
                          rowData[columnKey],
                          rowData
                        );
                      } else {
                        switch (rowData[columnKey]) {
                          default:
                            return renderText(
                              `${rowData.id}-${columnId}`,
                              rowData[columnKey]
                            );
                        }
                      }
                    })
                  : null}
              </View>
            </TouchableHighlight>
          );
        })}
      </ScrollView>
    </View>
  );
}

RenderList.propTypes = {
  data: PropTypes.array,
  searchFields: PropTypes.array,
  visibleKeys: PropTypes.array,
  titleStyle: PropTypes.object,
  dataStyle: PropTypes.object,
  filterEnabled: PropTypes.bool,
  hideHeader: PropTypes.bool,
  customFilter: PropTypes.func,
  customRender: PropTypes.object,
};

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
