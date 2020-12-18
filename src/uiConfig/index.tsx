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
import {OrderSearchList} from "../pages/components/OrderSearchList";
// import {MainApp} from '../pages/screens/MainApp'

// All component which will be rendered
export const componentsSet: any = {
  Index,
  First,
  Alternate,
  Test,
  AddEditEntity,
  ListEntities,
  ShowEntity,
  SearchList,
  OrderLineView,
  OrderSearchList
  // MainApp
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
  "0" : {
    "0" : {
      name : 'OrderSearchList',
      size : "4"
    } 
  }
}

// inner col
// outer row
// Remove If possible with Component part

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

export const MainAppConfig: any = {
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
            size : 1
          },
        },
        // Column
        "1": {
          // ROW
          "0": {
            name: "OrderSearchList",
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

{
  /*

  <Grid>
        <Row>
          <Col size={1} style={styles.boxStyle}>
            <Text>Navigation</Text>
          </Col>
          <Col size={3}>
            <Row>
              <Col style={styles.boxStyle2}>
                <Text>Search List</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col style={styles.boxStyle3}>
                    <Text>OrderLineView</Text>
                  </Col>
                  <Col style={styles.boxStyle4}>
                    <Text>AddressView</Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>

*/
}

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
            size : 1
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

// export const OneMoreAppConfig: any = {
//   "0": {
//     "0.0": {
//       // name: "AddEditEntity", // navigation
//       // size: "1",
//       "layout": {
//         "0.0.0": {
//           "0.0.0.0": {
//             name: "Alternate",
//             size: "1"
//           },
//           "0.0.0.1": {
//             "size": "11",
//             "layout": {
//               "0.0.0.1.0": {
//                 "0.0.0.1.0.0": {
//                   name: "Test",
//                   size: 4
//                 }
//               },
//               "0.0.0.1.1": {
//                 "0.0.0.1.1.0": {
//                   name: "ShowEntity",
//                   size: 2
//                 },
//                 "0.0.0.1.1.1": {
//                   name: "AddEditEntity",
//                   size: 2
//                 },
//               }
//             }
//           }
//         }
//       }
//     },
//     "1": {
//       name: "ListEntities", // navigation
//       size: "1",
//     }
//   },
//   "0.1": {
//     "0": {
//       name: "ShowEntity",
//       size: "4",
//     },
//   },
// };

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
  MainAppConfig,
  OneMoreAppConfig,
  OrderLineViewConfig,
};

export default exported;
