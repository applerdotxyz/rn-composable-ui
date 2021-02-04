import React from "react";
import { Text, View } from "react-native";

const rowStyle = {};
const styles = {};

export const routes = {};

const Home = ({ label }) => {
  return (
    <View>
      <Text style={{}}>Home *** {label}</Text>
    </View>
  );
};

const About = ({ label }) => {
  return (
    <View>
      <Text style={{}}>About *** {label}</Text>
    </View>
  );
};

export const componentsSet = {
  Home,
  About,
};

export const appConfig = {
  componentsSet,
  links: {
    "/": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Home",
    },
    "/about": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Feed",
    },
    "/contact": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Messages",
    },
  },
  layout: {
    // row no
    0: {
      // col no
      0: {
        layout: {
          colConfig: {
            colSize: 1,
            height: "100vh",
          },
          0: {
            0: {
              // col no
              idx: "Home",
              label: "left-nav",
              colStyle: { borderWidth: 1, height: "10vh" },
            },
          },
          1: {
            0: {
              // col no
              idx: "About",
              label: "footer",
              colStyle: { borderWidth: 4, height: "90vh" },
            },
          },
        },
      },
      1: {
        layout: {
          colConfig: {
            colSize: 12,
            height: "100vh",
          },
          0: {
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "body-header",
              colStyle: {
                borderWidth: 2,
                borderColor: "yellow",
                height: "10vh",
              },
            },
          },
          1: {
            0: {
              layout: {
                colConfig: {
                  colStyle: {
                    borderWidth: 2,
                    borderColor: "yellow",
                    height: "80vh",
                  },
                },
                0: {
                  0: {
                    // col no
                    colSize: 1,
                    idx: "Home",
                    label: "body-content-1",
                    colStyle: {
                      borderWidth: 2,
                      borderColor: "yellow",
                    },
                  },
                  1: {
                    // col no
                    colSize: 13,
                    idx: "Home",
                    label: "body-content-2",
                    colStyle: {
                      borderWidth: 5,
                      borderColor: "red",
                    },
                  },
                },
              },
            },
            // layout: {
            //   colConfig: {
            //     colSize: 12,
            //     height: "100vh",
            //   },
            //   0: {
            //     0: {
            //       // col no
            //       idx: "Home",
            //       label: "body-content-1",
            //       colSize: 2,
            //       colStyle: {
            //         borderWidth: 2,
            //         borderColor: "red",
            //         width: "90vw",
            //         height: "100vh",
            //       },
            //     },
            //     1: {
            //       // col no
            //       idx: "Home",
            //       label: "body-content-2",
            //       colSize: 11,
            //       colStyle: {
            //         borderWidth: 2,
            //         borderColor: "red",
            //         width: "10vw",
            //         height: "100vh",
            //       },
            //     },
            //   },
            // },
          },
          2: {
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "body-footer",
              colStyle: { borderWidth: 1, height: "10vh" },
            },
          },
        },
      },
    },
  },
};

// *************************************************
//  "../applications/app-one/screen-one";
// *************************************************
// bind events to
//  logic that binds

export const events = {
  /// <label>
  //<label>-<element-id> : <handler>
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
export const getEvents = (elId, setLayoutConfig, setAppState) => {
  const elEvents = {};
  events[elId] &&
    Object.keys(events[elId]).map((eventName) => {
      // console.log({ [eventName]: events[elId][eventName] });
      elEvents[eventName] = () =>
        events[elId] && events[elId][eventName] && events[elId][eventName]
          ? events[elId][eventName](setLayoutConfig, setAppState)
          : {};
    });
  // console.log(elEvents);
  return elEvents;
};
