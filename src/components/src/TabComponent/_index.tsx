/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const Tab = (props: {
  appState: any;
  label: any;
  styles: any;
  children: any;
  setAppState: any;
  layoutConfig: any;
  setLayoutConfig: any;
  getEvents: any;
  events: any;
}) => {
  const {
    appState,
    label,
    styles,
    children,
    setAppState,
    layoutConfig,
    setLayoutConfig,
    getEvents,
  } = props.props;

  useEffect(() => {
    // setAppState({ global: { total: 1 } });
  }, []);
  return (
    <View>
      <ScrollView>
        <Text style={{}}>Tab *** {JSON.stringify(appState)}</Text>
      </ScrollView>
    </View>
  );
};
