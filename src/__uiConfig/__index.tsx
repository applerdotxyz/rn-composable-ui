
import { Dimensions } from "react-native";
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
  // MainApp
};


export const IndexConfig: any = {
  r1: {
    // Column
    c1: {
      // ROW
      layout: {
        // COLUMN
        c11: {
          // ROW
          r11: {
            name: "ShowEntity",
            size: 35,
          },
          // ROW
          r12: {
            // Column
            name: "ListEntities",
            size: 35,
          },
        },
        // COLUMN
        c12: {
          // ROW
          r21: {
            name: "Test",
            size: 85,
          },
          // ROW
          r221: {
            name: "ShowEntity",
            size: 35,
          },
          // ROW
          r222: {
            // Column
            name: "ShowEntity",
            size: 35,
          },
        },
      },
    }}};

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
    "0": {
      name: "AddEditEntity",
      size: "2",
    },
    "1": {
      name: "ShowEntity",
      size: "2",
    },
  },
  "1": {
    "0": {
      name: "ShowEntity",
      size: "2",
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
            size: 1,
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
