/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  About,
  ActionComp,
  Comp5,
  Home,
  RandomPic,
  JsonForm,
} from "../../src/components/src";
import { rowStyle, styles } from "../common";

import { TabDashboard } from "./component-for-dashboard/TabDashboard";
import { ActionDashboard } from "./component-for-dashboard/ActionDashboard";
import { JsonFormDashboard } from "./component-for-dashboard/JsonFormDashboard";
import { DefaultScreen } from "./component-for-dashboard/DefaultScreen";
import { NavigationBarDashboard } from "./component-for-dashboard/NavigationBarDashboard";
import { HeaderDashboard } from "./component-for-dashboard/HeaderDashboard";

// All component which will be rendered
export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic,
  JsonForm,

  // Dashboard Demo Example Component
  TabDashboard,
  ActionDashboard,
  JsonFormDashboard,
  DefaultScreen,
  NavigationBarDashboard,
  HeaderDashboard,
};

// ****************** Routes for Dashboard naming *************************
export const routes = {};

// ****************** End of Routes ***************************************

// *************************************************
//  Layout config
// *************************************************

// links row
const links = {
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
};

// Main appConfig for Default load
export const appConfig = {
  /// 1st layout
  componentsSet,
  links,
  layout: {
    "1.container": {
      rowConfig: {
        rowSize: 1,
        rowStyle: { height: "100%" },
      },
      Header: {
        colSize: 12,
        idx: "HeaderDashboard",
        label: "header-label",
        colStyle: { borderWidth: 0 },
      },
    },
    "2.container": {
      rowConfig: {
        rowSize: 11,
        rowStyle: { height: "100%" },
      },
      "2.1.leftNavCol": {
        layout: {
          colConfig: {
            colSize: 2,
          },
          "2.1.leftNavBodyRow": {
            rowConfig: {
              rowSize: 12,
              rowStyle: { height: "100%" },
            },
            leftNavBody: {
              // col no
              colSize: 2,
              idx: "NavigationBarDashboard",
              label: "navigationBar",
              colStyle: { borderWidth: 0 },
            },
          },
        },
      },
      "2.2.bodyCol": {
        layout: {
          colConfig: {
            colSize: 10,
          },
          "2.2.1.BodyRow": {
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "100%" },
            },
            actionView: {
              colSize: 2,
              idx: "ActionDashboard",
              label: "actionComponent",
              colStyle: { borderWidth: 1 },
            },
          },
          "2.2.2.BodyRow": {
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "20vh" },
            },
            tabView: {
              colSize: 2,
              idx: "TabDashboard",
              label: "tabComponent",
              colStyle: { borderWidth: 1 },
            },
          },
          "2.2.3.BodyRow": {
            rowConfig: {
              rowSize: 8,
              rowStyle: { height: "20vh" },
            },
            jsonFormComponent: {
              colSize: 1,
              idx: "JsonFormDashboard",
              label: "jsonFormComponent",
              colStyle: { borderWidth: 2, borderColor: "red" },
            },
            emptyComponent: {
              colSize: 2,
              idx: "DefaultScreen",
              label: "DefaultScreenComponent",
              colStyle: { borderWidth: 1 },
            },
          },
        },
      },
    },
  },
};

export const appConfig2 = {
  /// 1st layout
  componentsSet,
  links,
  layout: {
    "1.container": {
      rowConfig: { rowSize: 1, rowStyle: { height: "100%" } },
      Header: { colSize: 12, idx: "Home", label: "header-label", colStyle: {} },
    },
    "2.container": {
      rowConfig: { rowSize: 11, rowStyle: { height: "100%" } },
      "2.1.leftNavCol": {
        layout: {
          colConfig: { colSize: 2 },
          "2.1.leftNavBodyRow": {
            rowConfig: { rowSize: 12, rowStyle: { height: "100%" } },
            leftNavBody: {
              colSize: 2,
              idx: "Home",
              label: "navigationBar",
              colStyle: {},
            },
          },
        },
      },
      "2.2.bodyCol": {
        layout: {
          colConfig: { colSize: 10 },
          "2.2.1.BodyRow": {
            rowConfig: { rowSize: 1, rowStyle: { height: "100%" } },
            actionView: {
              colSize: 2,
              idx: "Home",
              label: "actionComponent",
              colStyle: {},
            },
          },
          "2.2.2.BodyRow": {
            rowConfig: { rowSize: 1, rowStyle: { height: "100%" } },
            tabView: {
              colSize: 2,
              idx: "Home",
              label: "tabComponent",
              colStyle: {},
            },
          },
          "2.2.3.BodyRow": {
            rowConfig: { rowSize: 8, rowStyle: { height: "100%" } },
            jsonFormComponent: {
              colSize: 1,
              idx: "Home",
              label: "jsonFormComponent",
              colStyle: {},
            },
            emptyComponent: {
              colSize: 2,
              idx: "Home",
              label: "DefaultScreenComponent",
              colStyle: {},
            },
          },
        },
      },
    },
  },
};

export const appConfig3 = {
  /// 1st layout
  componentsSet,
  links,
  layout: {
    "1.container": {
      rowConfig: {
        rowSize: 1,
        rowStyle: { height: "100%" },
      },
      Header: {
        colSize: 12,
        idx: "HeaderDashboard",
        label: "header-label",
        colStyle: { borderWidth: 0 },
      },
    },
    "2.container": {
      rowConfig: {
        rowSize: 11,
        rowStyle: { height: "100%" },
      },
      "2.1.leftNavCol": {
        layout: {
          colConfig: {
            colSize: 2,
          },
          "2.1.leftNavBodyRow": {
            rowConfig: {
              rowSize: 12,
              rowStyle: { height: "100%" },
            },
            leftNavBody: {
              // col no
              colSize: 2,
              idx: "NavigationBarDashboard",
              label: "navigationBar",
              colStyle: { borderWidth: 0 },
            },
          },
        },
      },
      "2.2.bodyCol": {
        layout: {
          colConfig: {
            colSize: 10,
          },
          "2.2.1.BodyRow": {
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "100%" },
            },
            actionView: {
              colSize: 2,
              idx: "Home",
              label: "actionComponent",
              colStyle: { borderWidth: 1 },
            },
          },
          "2.2.2.BodyRow": {
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "100%" },
            },
            tabView: {
              colSize: 2,
              idx: "Home",
              label: "tabComponent",
              colStyle: { borderWidth: 1 },
            },
          },
          "2.2.3.BodyRow": {
            rowConfig: {
              rowSize: 8,
              rowStyle: { height: "100%" },
            },
            orderDetailView: {
              colSize: 4,
              idx: "Home",
              label: "orderDetailView",
              colStyle: { borderWidth: 2, borderColor: "red" },
            },
          },
          "2.2.4.BodyRow": {
            rowConfig: {
              rowSize: 8,
              rowStyle: { height: "100%" },
            },
            orderLineListView: {
              colSize: 2,
              idx: "Home",
              label: "orderLineListView",
              colStyle: { borderWidth: 2, borderColor: "red" },
            },
            billToAddressDetailView: {
              colSize: 2,
              idx: "DefaultScreen",
              label: "billToAddressDetailView",
              colStyle: { borderWidth: 1 },
            },
          },
          "2.2.5.BodyRow": {
            rowConfig: {
              rowSize: 8,
              rowStyle: { height: "100%" },
            },
            orderLineDetail: {
              colSize: 2,
              idx: "Home",
              label: "orderLineDetail",
              colStyle: { borderWidth: 2, borderColor: "red" },
            },
            orderLineAddressDetail: {
              colSize: 2,
              idx: "DefaultScreen",
              label: "orderLineAddressDetail",
              colStyle: { borderWidth: 1 },
            },
          },
        },
      },
    },
  },
};

// End of Main appConfig for Default Load

// *************************************************
//  End of Layout config
// *************************************************

// *************************************************
// Events to be defined here
// *************************************************

export const events = {
  //<label>-<element-id> : <handler>
  "leftNavHeader-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig) => {
      setLayoutConfig(routes["routeOne"]);
    },
  },
  "header-label-btn-one": {
    // <envet> : <Handler>
  },

  "bodyHeader-changed at 1st-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig) => {
      setLayoutConfig(routes["routeTwo"]);
    },
  },
  "bodyContent-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig) => {
      setLayoutConfig(routes["routeThree"]);
    },
  },
};

// *************************************************
//  Helper Util
// *************************************************
// bind events based on the layout config
export const getEvents = (elId, setLayoutConfig, setAppState) => {
  const elEvents = {};
  events[elId] &&
    Object.keys(events[elId]).map((eventName) => {
      elEvents[eventName] = () =>
        events[elId] && events[elId][eventName] && events[elId][eventName]
          ? events[elId][eventName](setLayoutConfig, setAppState)
          : {};
    });
  return elEvents;
};
