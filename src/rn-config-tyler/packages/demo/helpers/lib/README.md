# RN Config Tyler (Routing Kit)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/applerdotxyz/rn-config-tyler)

![Beta](https://github.com/applerdotxyz/rn-config-tyler/workflows/Beta/badge.svg)

![E2E](https://github.com/applerdotxyz/rn-config-tyler/workflows/E2E/badge.svg)

---

<p align="center">
  
  <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/applerdotxyz/rn-config-tyler">

  <img alt="GitHub" src="https://img.shields.io/github/license/applerdotxyz/rn-config-tyler">
</p>

---

### Routing by configuration

- enables multiple rendering areas (like angular routier-outlet)
- works with `react` and `react-native`
- ability to jump to any route by switching config
- All JSON based app configuration (easier to change workflows)

### getting started

1. Create the initial page layout config, which is also called `layoutConfig` or `appConfig`. Have a look at the examples folder `layout` files to figure out how to write a layoutConfig. At minimal it needs to have an appConfig JSON to be declared and exported out of that file. A snippet is given below, but it is _complex_, running the examples in `examples` folde would be much better to get started. Trust me :-)

### Demo


[Minimal Sample Built](https://rn-config-tyler.vercel.app/) 
[Github Repo](https://github.com/applerdotxyz/rn-config-tyler/tree/main/packages/router-demo)
![demo for the router](https://github.com/applerdotxyz/rn-config-tyler/blob/develop/demo-config-router.png)

#### STEP 1: COMPONENTS SET(your code)

```
// *****************************************************
// import all your available components and export from one `componentsSet` object
// All component which will be rendered
// *****************************************************

import { About } from "../../src/components/About";
import { Comp5 } from "../../src/components/Comp5";
import { Home } from "../../src/components/Home";
export const componentsSet = {
  Comp5,
  Home,
  About,
};
```

#### STEP 2: ROUTES OBJECT

```
// *****************************************************
// declare all the layout changes that your application
//  would have, and declare them as different `routes` insed a `routes` object which is exported.
// *****************************************************
export const routes = {};
routes.routeOne = {
  0: {
    0: {
      // layout: null // evict the earlier 1st column, other way is to hide it
      layout: {
        colConfig: {
          // colSize: 0, // *** change the colSize

          colStyle: { display: "none" } // *** hide the 1st column
        }
      }
    }
  }
};

routes.routeTwo = {
  0: {
    0: {
      // layout: null // evict the earlier 1st column, other way is to hide it
      layout: {
        colConfig: {
          // colSize: 0, // *** change the colSize
          colStyle: { display: "block" } // *** hide the 1st column
        }
      }
    },
    1: {
      layout: {
        colConfig: {
          colSize: 3 // *** change the colSize
        },
        1: {
          // *** below we are adding a new row(this will replace current layout config values), and this will have 2 columns
          0: {
            // col no
            colSize: 10,
            idx: "About",
            label: "comp5 >> changed at runtime 1"
          },
          1: {
            // col no
            colSize: 10,
            idx: "About",
            label: "comp5 >> changed at runtime 2"
          }
        }
      }
    }
  }
};
```

#### STEP 3: APP CONFIG

```
// *************************************************
//  exported `appConfig` object - represents initial Layout configuration
// *************************************************
export const appConfig = {
  componentsSet,
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
    colConfig: {
      colSize: 1
    },
    // row no
    0: {
      rowConfig: {
        rowSize: 1,
        rowStyle: { height: "100vh" }
      },
      // col no
      0: {
        layout: {
          colConfig: {
            colSize: 2
          },
          0: {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "5vh" }
            },
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "home",
              colStyle: { borderWidth: 4 }
            }
          },
          1: {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "90vh" }
            },
            0: {
              // col no
              colSize: 1,
              idx: "About",
              label: "about",
              colStyle: { borderWidth: 4 }
            },
            1: {
              // col no
              colSize: 1,
              idx: "Comp5",
              label: "comp5",
              colStyle: { borderWidth: 4 }
            }
          },
          2: {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "10vh" }
            },
            0: {
              // col no
              colSize: 4,
              idx: "RandomPic",
              label: "rpic",
              colStyle: { borderWidth: 4 }
            }
          }
        }
      },
      1: {
        layout: {
          colConfig: {
            colSize: 5
          },
          0: {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "10vh" }
            },
            0: {
              // col no
              colSize: 24,
              idx: "Comp5",
              label: "comp5.11",
              schema,
              colStyle: { borderWidth: 4 }
            }
          },
          1: {
            // row no
            rowConfig: {
              rowSize: 12,
              rowStyle: { height: "10vh" }
            },
            0: {
              // col no
              colSize: 1,
              idx: "Comp5",
              label: "comp5.12",
              schema,
              colStyle: { borderWidth: 4 }
            }
          },
          2: {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "10vh" }
            },

            0: {
              // col no
              colSize: 1,
              idx: "Comp5",
              label: "comp5.13",
              schema,
              colStyle: { borderWidth: 4 }
            }
          }
        }
      }
    }
  }
};
```

### Route defination

Changes to initial screen could be passed by calling `setLayoutConfig` and passing it a change/delta JSON, which contains the change that you want to happen to original config (`appConfig`).

#### format 1 - Pure JSON objects

```

// expanded (non-dottend notation) route config
routes.routeThree = {
  // row no
  "1container": {
    "11leftNavCol": {
      layout: {
        colConfig: {
          colStyle: { display: "block" },
        },
      },
      // layout: null,
    },
    // col no
    "12bodyCol": {
      layout: {
        colConfig: {
          colSize: 18,
        },
        "122bodyContentRow": {
          bodyContent: {
            idx: "Home",
          },
        },
      },
    },
  },
};

```

#### format 2 - Dotted (dot notation) JSON objects

Please note that initial `appConfig` can obnly be in expanded format, not in dotted format
Rule 2 - You could not use `.` in your keys when you use dotted syntax. e.g. `1.container` as `key` is not usable with this method.

```
// dotted notation config route
routes.routeTwo = {
  "1container.11leftNavCol.layout.colConfig.colStyle.display": "none",
  "1container.12bodyCol.layout.colConfig.colSize": 11,
  "1container.12bodyCol.layout.121bodyHeaderRow.bodyHeader.idx": "ActionComp",
  "1container.12bodyCol.layout.122bodyContentRow.bodyContent.idx": "RandomPic",
  "1container.12bodyCol.layout.123bodyFooterRow.bodyFooter.idx": "About",
};

```
