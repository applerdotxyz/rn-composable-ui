import { rowStyle, styles } from "../common";

// components section
const schema = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" }
  }
};

export const nextState = {};
nextState.one = {
  "body-content": {
    ui: "Comp5",
    props: { label: "body-content" },
    children: {}
  },
  "body-footer": {
    ui: "Comp5",
    props: { label: "body-footer" },
    children: {}
  }
};

export const screenOne = {
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
        style: rowStyle
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
              style: rowStyle
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
              style: rowStyle
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
              style: rowStyle
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
              style: rowStyle
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
              style: rowStyle
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
              style: rowStyle
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
    },
    1: {
      // row no
      rowConfig: {
        rowSize: "0.21",
        style: rowStyle
      },
      0: {
        // col no
        colSize: 1,
        idx: "ActionComp",
        label: "actioncomp",
        colStyle: { borderWidth: 4 }
      }
    }
  }
};

export const screenTwo = {
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
        style: rowStyle
      },
      // col no
      0: {
        layout: {
          colConfig: {
            colSize: 3
          },
          0: {
            // row no
            rowConfig: {
              rowSize: 1,
              style: rowStyle
            },
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "left-nav",
              colStyle: { borderWidth: 1, minHeight: 700 }
            }
          }
        }
      },
      1: {
        layout: {
          colConfig: {
            colSize: 11
          },
          0: {
            // row no
            rowConfig: {
              rowSize: 1,
              style: rowStyle
            },
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "body-header",
              schema,
              colStyle: { borderWidth: 1 }
            }
          },
          1: {
            // row no
            rowConfig: {
              rowSize: 7,
              style: rowStyle
            },
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "body-content",
              schema,
              colStyle: { borderWidth: 1, flex: 1 }
            }
          },
          2: {
            // row no
            rowConfig: {
              rowSize: 1,
              style: rowStyle
            },
            0: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "body-footer",
              schema,
              colStyle: { borderWidth: 1 }
            }
          }
        }
      }
    },
    1: {
      // row no
      rowConfig: {
        rowSize: "0.21",
        style: rowStyle
      },
      0: {
        // col no
        colSize: 1,
        idx: "Home",
        label: "footer",
        colStyle: { borderWidth: 4 }
      }
    }
  }
};
