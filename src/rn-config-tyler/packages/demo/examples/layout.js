import {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic,
} from "../components/src/index.js";
// } from "composable-components/dist/index.es.js";
import { rowStyle, styles } from "../helpers/lib/src/styles";

// All component which will be rendered
export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic,
  // JsonForm
};

// components section

export const routes = {};

// dotted notation config route
routes.routeOne = {
  "1container.11leftNavCol.layout.colConfig.colStyle.display": "block",
  "1container.12bodyCol.layout.colConfig.colSize": 11,
  "1container.12bodyCol.layout.121bodyHeaderRow.bodyHeader.idx": "ActionComp",
  "1container.12bodyCol.layout.122bodyContentRow.bodyContent.idx": "RandomPic",
  "1container.12bodyCol.layout.123bodyFooterRow.bodyFooter.idx": "ActionComp",
};

// dotted notation config route
routes.routeTwo = {
  "1container.11leftNavCol.layout.colConfig.colStyle.display": "none",
  "1container.12bodyCol.layout.colConfig.colSize": 11,
  "1container.12bodyCol.layout.121bodyHeaderRow.bodyHeader.idx": "ActionComp",
  "1container.12bodyCol.layout.122bodyContentRow.bodyContent.idx": "RandomPic",
  "1container.12bodyCol.layout.123bodyFooterRow.bodyFooter.idx": "About",
};

// expanded (non-dottend notation) route config
routes.routeThree = {
  // row no
  "1container": {
    "11leftNavCol": {
      layout: {
        colConfig: {
          colStyle: { display: "block" },
        },
      },
      // layout: null,
    },
    // col no
    "12bodyCol": {
      layout: {
        colConfig: {
          colSize: 18,
        },
        "122bodyContentRow": {
          bodyContent: {
            idx: "Home",
          },
        },
      },
    },
  },
};
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
  "/contact": {
    style: styles.navItem,
    linkStyle: styles.tabName,
    linkText: "Messages",
  },
};

export const appConfig = {
  /// 1st layout
  componentsSet,
  links,
  layout: {
    // row no
    "1container": {
      rowConfig: {
        rowSize: 1,
        rowStyle: rowStyle,
      },
      // col no
      "11leftNavCol": {
        layout: {
          colConfig: {
            colSize: 2,
          },
          "11leftNavHeaderRow": {
            // row no
            rowConfig: {
              rowSize: 0.5,
              rowStyle: rowStyle,
            },
            leftNavHeader: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "leftNavHeader",
              colStyle: { borderWidth: 1, height: "10vh" },
            },
          },
          "11leftNavBodyRow": {
            rowConfig: {
              rowSize: 5,
              // rowStyle: rowStyle,
            },
            leftNavBody: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "leftNavBody",
              colStyle: { borderWidth: 1, height: "90vh" },
            },
          },
        },
      },
      "12bodyCol": {
        rowConfig: {
          rowSize: 1,
          rowStyle: rowStyle,
        },
        layout: {
          colConfig: {
            colSize: 11,
            colStyle: { borderColor: "cyan", borderWidth: 4 },
          },
          "121bodyHeaderRow": {
            rowConfig: {
              rowSize: 1,
              rowStyle: rowStyle,
            },
            bodyHeader: {
              // col no
              colSize: 1,
              idx: "About",
              label: "bodyHeader",
              colStyle: { borderColor: "red", borderWidth: 2, height: "10vh" },
            },
          },
          "122bodyContentRow": {
            rowConfig: {
              rowSize: 12,
              rowStyle: rowStyle,
            },
            bodyContent: {
              // col no
              idx: "Home",
              colSize: 1,
              label: "bodyContent",
              colStyle: { borderColor: "red", borderWidth: 2, height: "80vh" },
            },
          },
          "123bodyFooterRow": {
            rowConfig: {
              rowSize: 1,
              rowStyle: rowStyle,
            },
            bodyFooter: {
              // col no
              idx: "Home",
              colSize: 1,
              label: "bodyFooter",
              colStyle: { borderColor: "red", borderWidth: 2, height: "10vh" },
            },
          },
        },
      },
    },
    "2container": {
      rowConfig: {
        rowSize: 1,
        rowStyle: rowStyle,
      },
      footer: {
        // col no
        colSize: 1,
        idx: "Home",
        label: "footer",
        colStyle: { borderWidth: 4 },
      },
    },
  },
};
