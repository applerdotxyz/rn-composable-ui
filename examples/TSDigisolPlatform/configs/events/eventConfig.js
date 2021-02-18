/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { Text } from "react-native";
import { routes } from "../routes/routesConfig";

export const events = {
  /// <label>
  //<label>-<element-id> : <handler>
  // the below logic to be run in component load phase for each mounting like componentDidMount
  "headerBar-$init": (setLayoutConfig, setAppState, appState) => {
    setAppState({ $global: { ...appState?.$global, key: "Loaded..." } });
  },
  "sideNavBar-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      setLayoutConfig(routes["routeThree"]);
      setAppState({
        bodyFooter: {
          ui: "ActionComp",
          props: { label: "bodyFooter" },
          children: <Text>Hello from RandomPic</Text>,
        },
        bodyContent: {
          ui: "RandomPic",
          props: { label: "actioncomp-2" },
          children: null,
        },
      });
    },
  },
  "sideNavBar-btn-two": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      console.log("Back button clicked");
      setLayoutConfig(routes["routeFour"]);
      setAppState({
        bodyFooter: {
          ui: "ActionComp",
          props: { label: "bodyFooter" },
          children: <Text>Hello from RandomPic</Text>,
        },
        bodyContent: {
          ui: "RandomPic",
          props: { label: "actioncomp-2" },
          children: null,
        },
      });
    },
  },
  "todoAppComponent1-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      setLayoutConfig(routes["routeFour"]);
      // setAppState({
      //   bodyFooter: {
      //     ui: "ActionComp",
      //     props: { label: "bodyFooter" },
      //     children: <Text>Hello from RandomPic</Text>,
      //   },
      //   bodyContent: {
      //     ui: "RandomPic",
      //     props: { label: "actioncomp-2" },
      //     children: null,
      //   },
      // });
    },
  },
  "leftNavHeader-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      // setLayoutConfig(routes["routeTwo"]);
      setAppState({
        bodyFooter: {
          ui: "ActionComp",
          props: { label: "bodyFooter" },
          children: <Text>Hello from RandomPic</Text>,
        },
        bodyContent: {
          ui: "RandomPic",
          props: { label: "actioncomp-2" },
          children: null,
        },
      });
    },
  },
  //<label>-<element-id>
  "leftNavHeader-btn-two": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      setLayoutConfig(routes["routeOne"]);
    },
  },

  // <label>
  "leftNavBody-btn-two": {},
  "leftNavBody-btn-one": {},
};

// *************************************************
//  Helper Util
// *************************************************
// bind events based on the layout config
export const getEvents = (elId, setLayoutConfig, setAppState, appState) => {
  console.log(`elId is ${elId}`);
  const elEvents = {};
  events[elId] &&
    Object.keys(events[elId]).map((eventName) => {
      elEvents[eventName] = (args) => {
        return events[elId] &&
          events[elId][eventName] &&
          events[elId][eventName]
          ? events[elId][eventName](
              setLayoutConfig,
              setAppState,
              appState,
              args
            )
          : {};
      };
    });
  return elEvents;
};

// logic for init logic for components `<label>-$init` in events object
export const getInitEvents = (elId, setLayoutConfig, setAppState, appState) => {
  if (elId && events[elId]) {
    console.log(`*** getInitEvents ${elId}`);
    events[elId](setLayoutConfig, setAppState, appState);
  }
};
