// TODO : Remove the Projects Component Screen segreagation notes...
import { Index } from "../pages/Index";
import { First } from "../pages/First";
import { Alternate } from "../pages/Alternate";
import { Test } from "../pages/Test";
import { AddEditEntity } from "../pages/components/AddEditEntity";
import { ListEntities } from "../pages/components/ListEntities";
import { ShowEntity } from "../pages/components/ShowEntity";
import SearchList from "../pages/components/SearchList";
import { OrderLineView } from "../pages/components/OrderLineView";
import { Dimensions } from "react-native";


// TSD WEB APP INTEGRATION
import { HeaderComponent } from '../pages/components/HeaderComponent';
import { OrderSearchList } from "../pages/components/OrderSearchList";
import { OrderSearchForm } from "../pages/components/OrderSearchForm/OrderSearchForm";

// RN COMPOSIBLE UI
import RnNavBar from '../pages/components/NavigationComponent/RnNavBar';

// All component which will be rendered
export const componentsSet: any = {

  // TODO : Rn Composible screen components
  Index,
  First,
  Alternate,
  Test,
  AddEditEntity,
  ListEntities,
  ShowEntity,
  SearchList,
  RnNavBar,

  // TODO : TSD  screen components
  OrderLineView,
  OrderSearchList,
  HeaderComponent,
  OrderSearchForm,
};


export const IndexConfig: any = {
  "0": {
    "0": {
      name: "Index",
      size: "4",
    },
  },
};

export const FirstConfig: any = {
  "0": {
    "0": {
      name: "First",
      size: "4",
    },
  },
};

export const AlternateConfig: any = {
  "0": {
    "0": {
      name: "Alternate",
      size: "4",
    },
  },
};

export const OrderSearchListConfig: any = {
  "0": {
    "0": {
      name: 'OrderSearchList',
      size: "4"
    }
  }
}


export const TestConfig: any = {
  "0": {
    "0": {
      name: "Test",
      size: "2",
    },
    "1": {
      name: "Test",
      size: "2",
    },
  },
  "1": {
    "0": {
      name: "Test",
      size: "1",
    },
    "1": {
      name: "Index",
      size: "1",
    },
    "2": {
      name: "Test",
      size: "1",
    },
  },
};

export const AddEditEntityConfig: any = {
  "0": {
    "0": {
      name: "AddEditEntity",
      size: "4",
      props: { Hello: "World", entity: "catalog" },
    },
  },
};

export const ListEntitiesConfig: any = {
  "0": {
    "0": {
      name: "ListEntities",
      size: "4",
    },
  },
};

export const ShowEntityConfig: any = {
  "0": {
    "0": {
      name: "ShowEntity",
      size: "4",
    },
  },
};

// TODO : Screen with Route and Screen Component for RN composible UI
export const RnComposibleDashboardConfig: any = {
  "0": {
    "0": {
      name: 'RnNavBar',
      size: '4'
    }
  }
};



// TODO : Screen with Route and Screen Component for TSD
export const DashboardAppConfig: any = { // OrderLayout
  "0": {
    "0": {
      name: 'HeaderComponent',
      size: '4'
    }
  },
  "1": {
    "0": {
      name: 'NavBar',
      size: '4'
    }
  }
};



// TSD WEB APP --> Service Order Searcch Config
export const MainAppConfig: any = { // OrderLayout
  "0": {
    "0": {
      name: 'HeaderComponent',
      size: '4'
    },
    "1": {
      layout: {
        "0": { //Col id
          "0": { // Row ID
            name: "NavigationComponent", // Navigation bar
            size: '1',
          },
        },
        "1": {
          "0": {
            name: "OrderSearchForm", // SearhListForm ROW 1
            size: '4',
            props: {
              _formData: {
                keyName: "YourName",
              },
              _schema: {
                type: "object",
                required: ["keyName"],
                properties: {
                  keyName: { type: "string" },
                },
              },
              _uiSchema: {
                submitButton: false,
              },
            },
          },
          "1": {
            name: "OrderSearchList", // SearhList ROW 2
            size: '4'
          },
        },
      },
    },
  },
};

// export const OneMoreAppConfig: any = {
//   "0": {
//     "0": {
//       name: "AddEditEntity",
//       size: "2",
//     },
//     "1": {
//       name: "ListEntities",
//       size: "2",
//     },
//   },
//   "1": {
//     "0": {
//       name: "ShowEntity",
//       size: "4",
//     },
//   },
// };

// export const OneMoreAppConfig: any = {
//   "0": {
//     "0": {
//       // name: "AddEditEntity", // navigation
//       // size: "1",
//       "layout": {
//         "0": {
//           "0": {
//             name: "Alternate",
//             size: "1"
//           },
//           "1": {
//             "size": "11",
//             "layout": {
//               "0": {
//                 "0": {
//                   name: "Test",
//                   size: 4
//                 }
//               },
//               "1": {
//                 "0": {
//                   name: "ShowEntity",
//                   size: 2
//                 },
//                 "1": {
//                   name: "ListEntities",
//                   size: 2
//                 },
//               }
//             }
//           }
//         }
//       }
//     },
//     "1": {
//       name: "Test", // navigation
//       size: "1",
//     }
//   },
//   "1": {
//     "0": {
//       name: "ShowEntity",
//       size: "4",
//     },
//   },
// };

// FIXME: TODO: TO DOCUMENT IN WIKI AND README.md
export const OneMoreAppConfig: any = {
  "0": {
    // Column
    "0": {
      // ROW
      layout: {
        // COLUMN
        "0": {
          // ROW
          "0": {
            name: "Test",
            size: '1'
          },
        },
        // Column
        "1": {
          // ROW
          "0": {
            name: "ShowEntity",
          },
          // ROW
          "1": {
            // Column
            layout: {
              // Column
              "0": {
                // Row
                "0": {
                  // Column
                  name: "AddEditEntity",
                },
              },
              // Column
              "1": {
                // Row
                "0": {
                  // Column
                  name: "ListEntities",
                },
              },
            },
          },
        },
      },
    },
  },
};

// TODO : For TSD
export const OrderLineViewConfig: any = {
  "0": {
    "0": {
      name: "OrderLineView",
      size: "4",
      props: {
        _formData: {
          keyName: "YourName",
        },
        _schema: {
          type: "object",
          required: ["keyName"],
          properties: {
            keyName: { type: "string" },
          },
        },
        _uiSchema: {
          submitButton: false,
        },
      },
    },
  },
};

const exported: any = {
  IndexConfig,
  FirstConfig,
  AlternateConfig,
  TestConfig,
  AddEditEntityConfig,
  ListEntitiesConfig,
  ShowEntityConfig,

  // TODO : For RN composible
  RnComposibleDashboardConfig,

  // TODO : For TSD
  MainAppConfig,
  DashboardAppConfig,
  OneMoreAppConfig,
  OrderLineViewConfig,
  
};
export default exported;
