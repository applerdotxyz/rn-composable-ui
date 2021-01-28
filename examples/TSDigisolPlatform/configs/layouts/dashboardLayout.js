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
import { DefaultScreen } from "../../../todo-app/TODOAPP/DefaultScreen";

// TSD COMPONENT
import { NavigationBar } from "../../components/NavigationBar/index";
import { HeaderBar } from "../../components/HeaderBar/index";
import { TabComponent } from "../../components/TabComponent/index";
import { ActionComponent } from "../../components/ActionComponent/index";

export const componentsSet = {
  // Comp5,
  // ActionComp,
  // Home,
  // About,
  // RandomPic,
  TodoApp1,
  TodoApp2,
  SideNavBar,
  DefaultScreen,
  NavigationBar,
  HeaderBar,
  TabComponent,
  ActionComponent,
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
    // row no
    0: {
      // col no : 1
      0: {
        layout: {
          colConfig: {
            colSize: 12,
            height: "100vh",
          },
          // row 1
          0: {
            0: {
              // col no
              idx: "HeaderBar",
              label: "headerBar",
              colStyle: { display: "flex", borderWidth: 0, height: "10vh" },
            },
          },
        },
      },
    },
    // row no
    1: {
      // col no : 1
      0: {
        layout: {
          colConfig: {
            colSize: 2.5,
            height: "100vh",
          },
          // row 1
          0: {
            0: {
              // col no
              idx: "NavigationBar",
              label: "navigationBar",
              colStyle: { display: "flex", borderWidth: 0, height: "100vh" },
            },
          },
        },
      },
      1: {
        layout: {
          colConfig: {
            colSize: 11.5,
            height: "100vh",
          },
          // row 1
          0: {
            0: {
              // col no
              idx: "ActionComponent",
              label: "actionComponent",
              colStyle: { display: "flex", borderWidth: 1, height: "10vh" },
            },
          },
        },
      },
    },
  },
};

// 1: {
//   layout: {
//     colConfig: {
//       colSize: 12,
//       height: "100vh",
//     },
//     0: {
//       // Row 1
//       0: {
//         // col no
//         colSize: 1,
//         idx: "ActionComponent",
//         label: "actionComponent",
//         colStyle: {
//           display: "flex",
//           borderWidth: 2,
//           //  borderColor: "yellow",
//           height: "10vh",
//         },
//       },
//     },
//     1: {
//       // Row 1
//       0: {
//         // col no
//         colSize: 1,
//         idx: "TabComponent",
//         label: "tabComponent",
//         colStyle: {
//           display: "flex",
//           borderWidth: 2,
//           //  borderColor: "yellow",
//           height: "10vh",
//         },
//       },
//     },
//   },
// },
