/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, StyleSheet, View, Platform } from "react-native";
import { Calendar } from "react-native-calendars";
import { FontAwesome } from "@expo/vector-icons";

export const Cal = (props) => {
  const [transactionTime, setTransactionTime] = useState(null);
  const today = new Date();
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <Calendar
        style={{
          height: 400,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 30,
        }}
        theme={{
          arrowColor: "#165c96",
          todayTextColor: "#2196f3",
          selectedDayTextColor: "black",
          selectedDayBackgroundColor: "grey",
        }}
        renderArrow={(direction) =>
          direction === "left" ? (
            <FontAwesome
              name="chevron-left"
              size={28}
              color="#2196f3"
              style={{ position: "absolute", alignSelf: "flex-start" }}
            />
          ) : (
            <FontAwesome
              name="chevron-right"
              color="#2196f3"
              size={28}
              style={{ position: "absolute", alignSelf: "flex-end" }}
            />
          )
        }
        markedDates={{
          [transactionTime]: { selected: true },
        }}
        minDate={`2020-${("0" + (today.getMonth() + 1)).slice(
          -2
        )}-${today.getUTCDate()}`}
        // // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          // console.log('selected day', day.dateString);
          setTransactionTime(day.dateString);
        }}
        maxDate={"2021-06-30"}
        onDayLongPress={(day) => {
          console.log("selected day", day);
        }}
        monthFormat={"MMM yyyy"}
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Btns: {
    padding: 20,
    width: 200,
    marginHorizontal: Platform.OS === "web" ? 680 : 110,
  },
});
