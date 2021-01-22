import { rowStyle, styles } from "../common";

// /*
// {

export const routes = {};

routes.routeOne = {
  0: {
    0: {
      // layout: null // evict the earlier 1st column, other way is to hide it
      layout: {
        colConfig: {
          colSize: 2, // *** change the colSize
          style: { display: "block" }, // *** hide the 1st column
        },
      },
    },
    1: {
      layout: {
        colConfig: {
          colSize: 9, // *** change the colSize
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

// export const getEvents = (events, elId, setLayoutConfig, setAppState) => {
//   const elEvents = {};
//   Object.keys(events[elId]).map((eventName) => {
//     // console.log({ [eventName]: events[elId][eventName] });
//     elEvents[eventName] = () =>
//       events[elId][eventName](setLayoutConfig, setAppState);
//   });
//   // console.log(elEvents);
//   return elEvents;
// };

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

// }
// */

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
  },
  layout: {
    // colConfig: {
    //   colSize: 1,
    // },
    0: {
      layout: {
        // row no
        rowConfig: {
          rowSize: 1,
          style: rowStyle,
        },
      },
      0: {
        // col no
        colSize: 3,
        idx: "RandomPic",
        label: "rpic",
        colStyle: { borderWidth: 4 },
      },
      1: {
        // col no
        colSize: 9,
        idx: "RandomPic",
        label: "rpic",
        colStyle: { borderWidth: 4 },
      },
    },
  },
};
