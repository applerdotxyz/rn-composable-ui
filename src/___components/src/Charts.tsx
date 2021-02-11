/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React from "react";

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

import { PieChart } from "react-native-chart-kit";

const MyPieChart = () => {
  return (
    <>
      <Text style={styles.header}>India's corona cases</Text>
      <PieChart
        data={[
          {
            name: "Total cases",
            recovery: 107890656,
            color: "grey",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Total deaths",
            recovery: 2365917,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Total recoverd",
            recovery: 79913802,
            color: "yellow",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Active cases",
            recovery: 25462431,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Closed cases",
            recovery: 82428225,
            color: "orange",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={Dimensions.get("window").width - 16}
        height={400}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "red",
          backgroundGradientTo: "blue",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="recovery"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </>
  );
};

export const Charts = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <MyPieChart />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});
