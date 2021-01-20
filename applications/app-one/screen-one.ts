/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { rowStyle, styles } from "../common";

// components section
const schema = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" },
  },
};

export const routes = {};

routes.routeOne = {
  0: {
    0: {
      // layout: null // evict the earlier 1st column, other way is to hide it
      layout: {
        colConfig: {
          // colSize: 0, // *** change the colSize

          style: { display: "none" }, // *** hide the 1st column
        },
      },
    },
    1: {
      layout: {
        colConfig: {
          colSize: 8, // *** change the colSize
        },

        1: {
          // *** below we are adding a new row(this will replace current layout config values), and this will have 2 columns
          0: {
            // col no
            colSize: 10,
            idx: "RandomPic",
            label: "comp5 >> changed at runtime 1",
          },
          1: {
            // col no
            colSize: 10,
            idx: "RandomPic",
            label: "comp5 >> changed at runtime 2",
          },
        },
      },
    },
  },
};

routes.routeTwo = {
  0: {
    0: {
      // layout: null // evict the earlier 1st column, other way is to hide it
      layout: {
        colConfig: {
          // colSize: 0, // *** change the colSize
          style: { display: "block" }, // *** hide the 1st column
        },
      },
    },
    1: {
      layout: {
        colConfig: {
          colSize: 3, // *** change the colSize
        },

        1: {
          // *** below we are adding a new row(this will replace current layout config values), and this will have 2 columns
          0: {
            // col no
            colSize: 10,
            idx: "About",
            label: "comp5 >> changed at runtime 1",
          },
          1: {
            // col no
            colSize: 10,
            idx: "About",
            label: "comp5 >> changed at runtime 2",
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
  home: {
    //<label>-<element-id> : <handler>
    "home-btn-one": {
      // <event> :: <handler>
      onPress: (setLayoutConfig, setAppState) => {
        setLayoutConfig(routes["routeOne"]);
      },
    },
    //<label>-<element-id>
    "home-btn-two": {
      // <event> :: <handler>
      onPress: (setLayoutConfig, setAppState) => {
        setLayoutConfig(routes["routeTwo"]);
      },
    },
  },

  /// <label>
  about: {
    //<label>-<element-id> : <handler>
    "about-btn-one": {
      // <event> :: <handler>
      onPress: (setLayoutConfig, setAppState) => {
        setAppState({
          "comp5.11": {
            ui: "RandomPic",
            props: { label: "comp5.11" },
            children: "<Text>I am 2nd Child</Text>", // FIXME:: from events file, passing in children part which is JSX
          },
        });
      },
    },
  },

  actioncomp: {
    // <label>
    "actioncomp-btn-two": {
      // <event> :: <handler>
      onPress: (setLayoutConfig, setAppState) => {
        setLayoutConfig(routes["routeTwo"]);
      },
    },
    "actioncomp-btn-one": {
      onPress: (setLayoutConfig, setAppState) => {
        setAppState({
          about: {
            ui: "About",
            props: { label: "about" },
            children: "<Text>I am 2nd Child</Text>", // FIXME:: from events file, passing in children part which is JSX
          },
        });
      },
    },
  },
};

// *************************************************
//  Helper Util
// *************************************************
// bind events based on the layout config
export const getEvents = (events, elId, setLayoutConfig, setAppState) => {
  const elEvents = {};
  events[elId]
    ? Object.keys(events[elId]).map((eventName) => {
        // console.log({ [eventName]: events[elId][eventName] });
        elEvents[eventName] = () =>
          events[elId][eventName](setLayoutConfig, setAppState);
      })
    : null;
  // console.log(elEvents);
  return elEvents;
};

// *************************************************
//  Layout config
// *************************************************
export const screenOne = {
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
            colSize: 2,
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
              label: "home",
              colStyle: { borderWidth: 4 },
            },
          },
          1: {
            // row no
            rowConfig: {
              rowSize: 1,
              style: rowStyle,
            },
            0: {
              // col no
              colSize: 1,
              idx: "About",
              label: "about",
              colStyle: { borderWidth: 4 },
            },
            1: {
              // col no
              colSize: 1,
              idx: "Comp5",
              label: "comp5",
              colStyle: { borderWidth: 4 },
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
              colSize: 4,
              idx: "RandomPic",
              label: "rpic",
              colStyle: { borderWidth: 4 },
            },
          },
        },
      },
      1: {
        layout: {
          colConfig: {
            colSize: 5,
          },
          0: {
            // row no
            rowConfig: {
              rowSize: 1,
              style: rowStyle,
            },
            0: {
              // col no
              colSize: 24,
              idx: "Comp5",
              label: "comp5.11",
              schema,
              colStyle: { borderWidth: 4 },
            },
          },
          1: {
            // row no
            rowConfig: {
              rowSize: 12,
              style: rowStyle,
            },
            0: {
              // col no
              colSize: 1,
              idx: "Comp5",
              label: "comp5.12",
              schema,
              colStyle: { borderWidth: 4 },
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
              idx: "Comp5",
              label: "comp5.13",
              schema,
              colStyle: { borderWidth: 4 },
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
        idx: "ActionComp",
        label: "actioncomp",
        colStyle: { borderWidth: 4 },
      },
    },
  },
};

export const screenTwo = {
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
              schema,
              colStyle: { borderWidth: 1 },
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
              schema,
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
              schema,
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
