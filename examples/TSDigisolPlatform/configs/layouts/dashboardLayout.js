import { About } from "../../../../src/components/About";
import { ActionComp } from "../../../../src/components/ActionComp";
import { Comp5 } from "../../../../src/components/Comp5";
// import { JsonForm } from "./components/JsonForm";
import { Home } from "../../../../src/components/Home";
import { RandomPic } from "../../../../src/components/RandomPic";
import { rowStyle, styles } from "../../styles/common";

// ******************** TODO APP EXAMPLE ************************* //
import { TodoApp1 } from "../../../todo-app/TODOAPP/TodoApp1";
import { TodoApp2 } from "../../../todo-app/TODOAPP/TodoApp2";
import { SideNavBar } from "../../../todo-app/TODOAPP/SideNavBar";

// TSD COMPONENT
import { NavigationBar } from "../../components/NavigationBar";
import { HeaderBar } from "../../components/HeaderBar";
import { TabComponent } from "../../components/TabComponent";
import { ActionComponent } from "../../components/ActionComponent";
import { JsonFormComponent } from "../../components/JsonFormComponent";
import { DefaultScreen } from "../../components/DefaultScreen";

export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic,
  TodoApp1,
  TodoApp2,
  SideNavBar,
  DefaultScreen,
  NavigationBar,
  HeaderBar,
  TabComponent,
  ActionComponent,
  JsonFormComponent,
  // JsonForm
};
// *************************************************
//  Layout config
// *************************************************
export const appConfig = {
  /// 1st layout
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
    "1.container": {
      rowConfig: {
        rowSize: 1,
        // rowStyle: rowStyle,
      },
      Header: {
        // col no
        colSize: 1,
        idx: "HeaderBar",
        label: "headerBar",
        // colStyle: { borderWidth: 4 },
      },
    },
    "2.container": {
      rowConfig: {
        rowSize: 1,
        // rowStyle: rowStyle,
      },
      // col no
      "2.1.leftNavCol": {
        layout: {
          colConfig: {
            colSize: 2,
          },
          "2.1.leftNavBodyRow": {
            rowConfig: {
              rowSize: 12,
              // rowStyle: rowStyle,
            },
            leftNavBody: {
              // col no
              colSize: 1,
              idx: "NavigationBar",
              label: "navigationBar",
              colStyle: { borderWidth: 0, height: "100vh" },
            },
          },
        },
      },
      "2.2.bodyCol": {
        rowConfig: {
          rowSize: 12,
          // rowStyle: rowStyle,
        },
        layout: {
          colConfig: {
            colSize: 11,
            // colStyle: { borderColor: "cyan", borderWidth: 4 },
          },
          "2.2.1.bodyHeaderRow": {
            rowConfig: {
              rowSize: 1.2, // TODO : Adjusted Height with Upper component using calculation of Row Config
              // rowStyle: rowStyle,
              // rowStyle: { borderColor: "red", borderWidth: 1, height: "20vh" },
            },
            bodyHeader: {
              // col no
              colSize: 1,
              idx: "ActionComponent",
              label: "actionComponent",
              // colStyle: {
              //   borderColor: "blue",
              //   borderWidth: 0,
              //   height: "20vh",
              // },
            },
          },
          "2.2.2.bodyTabRow": {
            rowConfig: {
              rowSize: 1.3,
              // rowStyle: rowStyle,
              // rowStyle: { borderColor: "red", borderWidth: 4, height: "80vh" },
            },
            bodyContent: {
              // col no
              idx: "TabComponent",
              colSize: 1,
              label: "tabComponent",
              colStyle: {
                borderColor: "blue",
                // borderWidth: 1,
                // height: "89.2vh", // TODO : Adjusted Height with Upper component using calculation of Row Config
              },
            },
          },
          "2.2.3.bodyContentRow": {
            rowConfig: {
              rowSize: 10,
              // rowStyle: rowStyle,
              // rowStyle: { borderColor: "red", borderWidth: 4, height: "80vh" },
            },
            "2.2.3.1.bodyContent": {
              // col no
              // idx: "JsonFormComponent",
              idx: "JsonFormComponent",
              colSize: 2,
              label: "jsonFormComponent",
              colStyle: {
                borderColor: "blue",
                // borderWidth: 1,
                height: "80vh", // TODO : Adjusted Height with Upper component using calculation of Row Config
              },
            },
            "2.2.3.2.bodyContent2": {
              layout: {
                colConfig: {
                  colSize: 3,
                },
                "2.2.3.1.1.bodyContent2": {
                  rowConfig: {
                    rowSize: 12,
                    // rowStyle: rowStyle,
                  },
                  leftNavBody: {
                    // col no
                    colSize: 1,
                    idx: "DefaultScreen",
                    label: "defaultScreen",
                    colStyle: { borderWidth: 0, height: "80vh" },
                  },
                },
              },
            },
            // "2.2.3.2.bodyContent2": {
            //   layout: {
            //     colConfig: {
            //       colSize: 1,
            //     },
            //     "2.2.3.1.2.bodyContent2": {
            //       rowConfig: {
            //         rowSize: 12,
            //         // rowStyle: rowStyle,
            //       },
            //       leftNavBody: {
            //         // col no
            //         colSize: 1,
            //         idx: "DefaultScreen",
            //         label: "defaultScreen",
            //         colStyle: { borderWidth: 0, height: "80vh" },
            //       },
            //     },
            //   },
            // },
          },
        },
      },
    },
  },
};

export const appConfig2 = {
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
    "1.container": {
      rowConfig: {
        rowSize: 1,
      },
      Header: {
        // col no
        colSize: 1,
        idx: "HeaderBar",
        label: "headerBar",
      },
    },
    "2.container": {
      rowConfig: {
        rowSize: 1,
      },
      // col no
      "2.1.leftNavCol": {
        layout: {
          colConfig: {
            colSize: 2,
          },
          "2.1.leftNavBodyRow": {
            rowConfig: {
              rowSize: 12,
            },
            leftNavBody: {
              // col no
              colSize: 1,
              idx: "NavigationBar",
              label: "navigationBar",
              colStyle: { borderWidth: 0, height: "100vh" },
            },
          },
        },
      },
      "2.2.bodyCol": {
        rowConfig: {
          rowSize: 12,
        },
        layout: {
          colConfig: {
            colSize: 11,
            colStyle: {
              borderColor: "cyan",
              borderWidth: 0,
            },
          },
          "2.2.1.bodyHeaderRow": {
            rowConfig: {
              rowSize: 1.2,
            },
            bodyHeader: {
              // col no
              colSize: 1,
              idx: "ActionComponent",
              label: "actionComponent",
              // colStyle: {
              //   borderColor: "blue",
              //   borderWidth: 0,
              //   height: "20vh",
              // },
            },
          },
          "2.2.2.bodyTabRow": {
            rowConfig: {
              rowSize: 1.3,
              // rowStyle: rowStyle,
              // rowStyle: { borderColor: "red", borderWidth: 4, height: "80vh" },
            },
            bodyContent: {
              // col no
              idx: "TabComponent",
              colSize: 1,
              label: "tabComponent",
              colStyle: {
                borderColor: "blue",
              },
            },
          },
          "2.2.3.bodyContentRow": {
            rowConfig: {
              rowSize: 10,
            },
            bodyContent1: {
              // col no
              // idx: "JsonFormComponent",
              idx: "JsonFormComponent",
              colSize: 2,
              label: "jsonFormComponent",
              colStyle: {
                borderColor: "blue",
                // borderWidth: 1,
                height: "80vh",
              },
            },
            bodyContent2: {
              // col no
              // idx: "JsonFormComponent",
              idx: "DefaultScreen",
              colSize: 3,
              label: "defaultScreen",
              colStyle: {
                borderColor: "blue",
                borderWidth: 0,
                height: "80vh",
              },
            },
          },
        },
      },
    },
  },
};

// Order Screen
export const appConfig3 = {
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
    "1.container": {
      rowConfig: {
        rowSize: 1,
      },
      Header: {
        // col no
        colSize: 1,
        idx: "HeaderBar", // component name
        label: "headerBar",
      },
    },
    "2.container": {
      rowConfig: {
        rowSize: 1,
      },
      // col no
      "2.1.leftNavCol": {
        layout: {
          colConfig: {
            colSize: 2,
          },
          "2.1.leftNavBodyRow": {
            rowConfig: {
              rowSize: 12,
            },
            leftNavBody: {
              // col no
              colSize: 1,
              idx: "NavigationBar",
              label: "navigationBar",
              colStyle: { borderWidth: 0, height: "100vh" },
            },
          },
        },
      },
      "2.2.bodyCol": {
        rowConfig: {
          rowSize: 12,
        },
        layout: {
          colConfig: {
            colSize: 11,
            colStyle: {
              borderColor: "cyan",
              borderWidth: 0,
            },
          },
          "2.2.1.bodyHeaderRow": {
            rowConfig: {
              rowSize: 1.2,
            },
            bodyHeader: {
              // col no
              colSize: 1,
              idx: "ActionComponent",
              label: "actionComponent",
              // colStyle: {
              //   borderColor: "blue",
              //   borderWidth: 0,
              //   height: "20vh",
              // },
            },
          },
          "2.2.2.bodyTabRow": {
            rowConfig: {
              rowSize: 1.3,
              // rowStyle: rowStyle,
              // rowStyle: { borderColor: "red", borderWidth: 4, height: "80vh" },
            },
            bodyContent: {
              // col no
              idx: "TabComponent",
              colSize: 1,
              label: "tabComponent",
              colStyle: {
                borderColor: "blue",
              },
            },
          },
          // Add this row
          "2.2.2.bodyContentRow": {
            rowConfig: {
              rowSize: 5,
              // rowStyle: rowStyle,
              rowStyle: { borderColor: "red", borderWidth: 1, height: "30vh" },
            },
            bodyContent: {
              // col no
              idx: "JsonFormComponent",
              colSize: 1,
              label: "tabComponent",
              colStyle: {
                borderColor: "blue",
                borderWidth: 1,
                // height: "30vh",
              },
            },
          },
          // Add this row
          "2.2.3.bodyContentRow": {
            rowConfig: {
              rowSize: 5,
            },
            // col 1
            bodyContent1: {
              // col no
              // idx: "JsonFormComponent",
              idx: "DefaultScreen",
              colSize: 2,
              label: "listView",
              colStyle: {
                borderColor: "blue",
                borderWidth: 1,
                height: "40vh",
              },
            },
            // col 2
            bodyContent2: {
              // col no
              // idx: "JsonFormComponent",
              idx: "DefaultScreen",
              colSize: 3,
              label: "detailView",
              colStyle: {
                borderColor: "blue",
                borderWidth: 0,
                height: "40vh",
              },
            },
          },
        },
      },
    },
  },
};
