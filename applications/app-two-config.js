import { rowStyle, styles } from "./common";

// components section
const schema = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" }
  }
};

export const appConfig = {
  links: {
    "/": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Home"
    },
    "/about": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Feed"
    },
    "/contact": {
      style: styles.navItem,
      linkStyle: styles.tabName,
      linkText: "Messages"
    }
  },
  layout: {
    // row no
    0: {
      rowConfig: {
        rowSize: 1,
        style: rowStyle
      },
      // col no
      0: {
        layout: {
          0: {
            // row no
            rowConfig: {
              rowSize: 1,
              style: rowStyle
            },
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "home",
              colStyle: { borderWidth: 4, minHeight: 212 }
            }
          },
          1: {
            // row no
            rowConfig: {
              rowSize: 1,
              style: rowStyle
            },
            0: {
              // col no
              colSize: 1,
              idx: "About",
              label: "about",
              colStyle: { borderWidth: 4, minHeight: 212 }
            },
            1: {
              // col no
              colSize: 1,
              idx: "Comp5",
              label: "comp5",
              colStyle: { borderWidth: 4, minHeight: 212 }
            }
          },
          2: {
            // row no
            rowConfig: {
              rowSize: 1,
              style: rowStyle
            },
            0: {
              // col no
              colSize: 4,
              idx: "RandomPic",
              label: "rpic",
              colStyle: { borderWidth: 4, minHeight: 212 }
            }
          }
        }
      },
      1: {
        // col no
        colSize: 2,
        idx: "Comp5",
        label: "comp5.1",
        schema,
        colStyle: { borderWidth: 4, minHeight: 212 }
      }
    },
    1: {
      // row no
      rowConfig: {
        rowSize: 1,
        style: rowStyle
      },
      0: {
        // col no
        colSize: 1,
        idx: "ActionComp",
        label: "actioncomp",
        colStyle: { borderWidth: 4, minHeight: 212 }
      },
      1: {
        // col no
        colSize: 2,
        idx: "Comp5",
        label: "comp51.2",
        colStyle: { borderWidth: 4, minHeight: 212 }
      }
    }
  }
};
