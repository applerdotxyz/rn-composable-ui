/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
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
    colConfig: {
      colSize: 1,
    },
    // row no
    0: {
      rowConfig: {
        rowSize: 1,
        style: rowStyle,
      },
      // col no
      0: {
        layout: {
          colConfig: {
            colSize: 3,
          },
          0: {
            // row no
            rowConfig: {
              rowSize: 1,
              style: rowStyle,
            },
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "left-nav",
              colStyle: { borderWidth: 1, minHeight: 700 },
            },
          },
        },
      },
      1: {
        layout: {
          colConfig: {
            colSize: 11,
            colStyle: {
              borderWidth: 2,
              borderColor: "blue",
            },
          },
          0: {
            // row no
            rowConfig: {
              rowSize: 1,
              style: rowStyle,
            },
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "body-header",
              colStyle: { borderWidth: 2, borderColor: "yellow" },
            },
          },
          1: {
            // row no
            rowConfig: {
              rowSize: 7,
              style: rowStyle,
            },
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "body-content",
              colStyle: { borderWidth: 1, flex: 1 },
            },
          },
          2: {
            // row no
            rowConfig: {
              rowSize: 1,
              style: rowStyle,
            },
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "body-footer",
              colStyle: { borderWidth: 1 },
            },
          },
        },
      },
    },
    1: {
      // row no
      rowConfig: {
        rowSize: "0.21",
        style: rowStyle,
      },
      0: {
        // col no
        colSize: 1,
        idx: "Home",
        label: "footer",
        colStyle: { borderWidth: 4 },
      },
    },
  },
};
