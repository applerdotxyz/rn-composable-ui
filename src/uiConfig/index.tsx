/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO : Remove the Projects Component Screen segreagation notes...
import { Index } from "../pages/Index";
import { First } from "../pages/First";
import { Alternate } from "../pages/Alternate";
import { Test } from "../pages/Test";
import { AddEditEntity } from "../pages/components/AddEditEntity";
import { ListEntities } from "../pages/components/ListEntities";
import { ShowEntity } from "../pages/components/ShowEntity";
import SearchList from "../pages/components/SearchList";

// RN COMPOSIBLE UI
import RnNavBar from "../pages/components/NavigationComponent/RnNavBar";
import ScreenComponent from "../pages/components/ScreenComponent/ScreenComponent";

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
  ScreenComponent,
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
      name: "RnNavBar",
      size: "4",
    },
  },
};

export const TestDashboardConfig: any = {
  "0": {
    "0": {
      layout: {
        "0": {
          "0": {
            name: "RnNavBar",
            size: "0.5",
          },
        },
        "1": {
          "0": {
            name: "ScreenComponent",
            size: "3.5",
          },
        },
      },
    },
  },
};

// FIXME: TODO: TO DOCUMENT IN WIKI AND README.md
export const OneMoreAppConfig: any = {
  "0": {
    // Column
    "0": {
      // ROW
      layout: {
        // Column 1 below
        "0": {
          // Column 1 Row 1
          "0": {
            name: "Test",
            size: "0.5",
          },
        },

        // Column 2 below
        "1": {
          // Colum 2 row 1
          "0": {
            name: "ShowEntity",
            size: "3.5",
          },

          // Column 2 row 2
          "1": {
            layout: {
              // Column 2 row 2 column 1
              "0": {
                "0": {
                  name: "AddEditEntity",
                  size: "2",
                },
              },

              // Column 2 row 2 column 1
              "1": {
                "0": {
                  name: "ListEntities",
                  size: "2",
                },
              },
            },
          },
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
  OneMoreAppConfig,
  TestDashboardConfig,
};
export default exported;
