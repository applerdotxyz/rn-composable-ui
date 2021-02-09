/* eslint-disable @typescript-eslint/ban-types */
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const ExpandableComponent = ({ props, item, onClickFunction }: any) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(100);

  console.log("Props in Expandable Component : : : : ", props);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={ExpandableComStyles.header}
      >
        {/* <Link to='/home'> */}
        <Text style={ExpandableComStyles.headerText}>{item.functionName}</Text>
        {/* </Link> */}
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        {/*Content under the header of the Expandable List Item*/}
        {item.modules.map((item, key: string | number | null | undefined) => (
          <TouchableOpacity
            key={key}
            style={ExpandableComStyles.content}
            onPress={() =>
              alert("Id: " + item.moduleKey + " val: " + item.moduleName)
            }
          >
            {/* Link config should API */}
            {/* <Link to={item.link} underlayColor="#adc650"> */}
            <Text style={ExpandableComStyles.text}>
              {/* {key}.  */}
              {item.moduleDisplayName}
            </Text>
            {/* </Link> */}

            {/* <View style={styles.separator} /> */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const ExpandableComStyles = StyleSheet.create({
  header: {
    backgroundColor: "#5cabc5",
    padding: 20,
    flex: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    fontStyle: "italic",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "95%",
    marginLeft: 16,
    marginRight: 16,
    elevation: 15,
  },
  text: {
    fontSize: 16,
    color: "white",
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#82bed2",
  },
});

export default ExpandableComponent;
