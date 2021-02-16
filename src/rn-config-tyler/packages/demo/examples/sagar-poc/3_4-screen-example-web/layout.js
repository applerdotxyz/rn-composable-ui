/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  About,
  ActionComp,
  Comp5,
  Home,
  RandomPic,
  JsonForm,
  ListEntities,
  RenderList,
  NavigationBar,
  TabComponent,
} from "../../../components";
import { styles, rowStyle } from "../../common";

// All component which will be rendered
export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic,
  JsonForm,
  ListEntities,
  RenderList,
  NavigationBar,
  TabComponent,
};
export const routes = {};
routes.routeOne = {
  // row no
  "1container": {
    // col no
    "11leftNavCol": {
      layout: {
        colConfig: {
          colStyle: { display: "none" },
        },
      },
    },
    "12bodyCol": {
      layout: {
        colConfig: {
          colSize: 11,
        },
        "121bodyHeaderRow": {
          rowConfig: {
            rowSize: 2,
            rowStyle: rowStyle,
          },
          bodyHeader: {
            colSize: 1,
            idx: "About",
            label: "bodyHeader-changed at 1st",
            colStyle: {
              borderColor: "cyan",
              alignSelf: "none",
              borderWidth: 4,
              height: "100vh",
              backgroundColor: "skyblue",
            },
          },
        },
      },
    },
  },
};

routes.routeTwo = {
  // row no
  "1container": {
    // col no
    "11leftNavCol": {
      layout: {
        colConfig: {
          colStyle: { display: "none" },
        },
      },
    },
    "12bodyCol": {
      layout: {
        colConfig: {
          colSize: 11,
        },
        "121bodyHeaderRow": {
          rowConfig: {
            rowSize: 2,
            rowStyle: rowStyle,
          },
          bodyHeader: {
            colSize: 1,
            idx: "About",
            label: "bodyHeader-changed at 2nd",
            colStyle: {
              borderColor: "cyan",
              alignSelf: "none",
              borderWidth: 4,
              height: "50vh",
              backgroundColor: "skyblue",
            },
          },
          bodyHeader1: {
            colSize: 1,
            idx: "About",
            label: "bodyHeader1",
            colStyle: {
              borderColor: "cyan",
              alignSelf: "none",
              borderWidth: 4,
              height: "50vh",
              backgroundColor: "red",
            },
          },
        },
        "122bodyContentRow": {
          bodyContent: {
            colSize: 1,
            idx: "Home",
            label: "bodyContent",
            colStyle: {
              borderColor: "cyan",
              alignSelf: "none",
              borderWidth: 4,
              height: "50vh",
              backgroundColor: "yellow",
            },
          },
        },
      },
    },
  },
};

routes.routeThree = {
  // row no
  "1.container": {
    // col no
    "1.1.leftNavCol": {
      layout: {
        colConfig: {
          colStyle: { display: "none" },
        },
      },
    },
    "1.2.bodyCol": {
      layout: {
        colConfig: {
          colSize: 11,
        },
        "1.2.1.bodyHeaderRow": {
          rowConfig: {
            rowSize: 1,
            rowStyle: rowStyle,
          },
          bodyHeader: {
            colStyle: { display: "none" },
          },
          bodyHeader1: {
            colSize: 11,
            idx: "About",
            label: "bodyHeader1-changed 1st",
            colStyle: {
              height: "100vh",
            },
          },
        },
        "1.2.2.bodyContentRow": {
          bodyContent: {
            colStyle: {
              display: "none",
            },
          },
        },
      },
    },
  },
};

// show listing below the form
routes.showListing = () => {
  return {
    "1container": {
      "12bodyCol": {
        layout: {
          "121bodyHeaderRow": {
            bodyHeader: {
              idx: "Comp5",
              label: "bodyContent-changed",
            },
          },
        },
      },
    },
  };
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

let data = [];
const _formData = {
  phone: 8654787549,
  otp: 654789,
};

const schema = {
  type: "object",
  properties: {
    phone: { type: "number" },
    otp: { type: "number" },
  },
};

const uiSchema = {
  phone: {
    "ui:title": "Phone No. ",
  },
};

export const appConfig = {
  /// 1st layout
  componentsSet,
  links, // FIXME: links mess up the styling in dynamic page transitions. pls look at the fix
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
            colSize: 3,
            colStyle: { backgroundColor: "grey" },
          },
          "11leftNavHeaderRow": {
            // row no
            rowConfig: {
              rowSize: 1,
            },
            leftNavHeader: {
              // col no
              colSize: 1,
              idx: "NavigationBar",
              label: "leftNavHeader",
              colStyle: {
                borderColor: "cyan",
                borderWidth: 4,
                height: "100vh",
                backgroundColor: "lightgreen",
              },
            },
          },
        },
      },
      "12bodyCol": {
        layout: {
          colConfig: {
            colSize: 11,
          },
          "121bodyHeaderRow": {
            rowConfig: {
              rowSize: 4,
            },
            bodyHeader: {
              // col no
              idx: "JsonForm",
              label: "bodyHeader",
              colStyle: {
                borderColor: "cyan",
                backgroundColor: "skyblue",
              },
              passProps: {
                _formData: { ..._formData },
                schema,
                uiSchema,
              },
            },
          },
          "122bodyContentRow": {
            rowConfig: {
              rowSize: 12,
            },
            bodyContent: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "bodyContent",
              colStyle: {
                borderColor: "red",
                height: "90vh",
                backgroundColor: "lightgray",
              },
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
  // FIXME: fix the below logic to be run in component load phase for each mounting like componentDidMount
  $appInit: (setLayoutConfig, setAppState) => {},

  //<label>-<element-id> : <handler>
  "leftNavHeader-button-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState, appState) => {
      // components section
    },
  },
  "bodyHeader-form": {
    // form data mutator
    onSuccess: (setLayoutConfig, setAppState, appState, args) => {
      console.log(args.params.values);
      // PREPARING THE DATA
      // FIXME: MOVE THIS TO EVENT MANAGEMENT SIDE
      const res = fetch(
        "https://run.mocky.io/v3/15c75559-42b2-45ed-bcf2-06c48aa51bdf"
      )
        .then((res) => res.json())
        .then((_data) => {
          const _formData = args.params.values;

          const schema = {
            type: "object",
            properties: {
              phone: { type: "number" },
              otp: { type: "number" },
            },
          };

          const uiSchema = {
            phone: {
              "ui:title": "Phone No. ",
            },
          };

          console.log(`*** _data.ticketDetails`);
          console.log(_data.ticketDetails);

          setAppState({
            $global: {
              list_of_complaints: {
                data: _data.ticketDetails,
              },
              form: {
                formData: args.params.values,
                schema,
                uiSchema,
              },
            },
          });
          console.log(appState?.$global?.list_of_complaints?.data);

          setLayoutConfig(
            {
              // "1container.12bodyCol.layout.121bodyHeaderRow.bodyHeader.idx":
              //   "Home",
              "1container.12bodyCol.layout.122bodyContentRow.bodyContent.idx":
                "RenderList",
              "1container.12bodyCol.layout.122bodyContentRow.bodyContent.label":
                "bodyContent-changed",
              "1container.12bodyCol.layout.122bodyContentRow.bodyContent.passProps": {
                data: appState?.$global?.list_of_complaints?.data,
                searchFields: [
                  "name",
                  "description",
                  "category",
                  "subCategory",
                ],
                visibleKeys: ["name", "category", "subCategory"],
                titleStyle: null,
                dataStyle: { color: "darkblue" },
              },
            },
            true
          );
        });
      // FIXME: below change is not immedeately reflected , fix the bug
    },
    // onSubmit: (setLayoutConfig) => {
    //   console.log("submitted");
    //   // FIXME: fill in data
    //   // setLayoutConfig(routes.showListing);
    // },
  },
  "bodyHeader-changed at 1st-btn-one": {
    onPress: (setLayoutConfig) => {
      setLayoutConfig(routes["routeTwo"]);
    },
  },
  "bodyHeader1-btn-one": {
    onPress: (setLayoutConfig) => {
      setLayoutConfig(routes["routeThree"]);
    },
  },
};

// *************************************************
//  Helper Util
// *************************************************
// bind events based on the layout config
export const getEvents = (elId, setLayoutConfig, setAppState, appState) => {
  // if (elId === "$appInit") {
  //   await events["$appInit"](setLayoutConfig, setAppState);
  // } else {
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
  // }
};
