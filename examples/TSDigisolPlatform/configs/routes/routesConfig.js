export const routes = {};

routes.search = {
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
            colSize: 3,
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
          "2.2.3.2.bodyContent2": {
            layout: {
              colConfig: {
                colSize: 1,
              },
              "2.2.3.1.2.bodyContent2": {
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
        },
      },
    },
  },
};

routes.routeFour = {
  0: {
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
            idx: "SideNavBar",
            label: "sideNavBar",
            colStyle: { borderWidth: 0, height: "100vh" },
          },
        },
      },
    },
    // col no : 2
    1: {
      layout: {
        colConfig: {
          colSize: 12,
          height: "100vh",
        },
        0: {
          // Row 1
          0: {
            // col no
            colSize: 1,
            idx: "TodoApp1",
            label: "todoAppComponent1",
            colStyle: {
              display: "flex",
              // borderWidth: 2,
              //  borderColor: "yellow",
              height: "50vh",
            },
          },
        },
        1: {
          // Row 2
          0: {
            // col no
            colSize: 1,
            idx: "TodoApp2",
            label: "todoAppComponent1",
            colStyle: {
              display: "flex",
              // borderWidth: 2,
              //  borderColor: "yellow",
              height: "50vh",
            },
          },
        },
        // Row 3
        // 2: {
        //   // Row 3
        //   0: {
        //     // col no
        //     colSize: 1,
        //     idx: "Home",
        //     label: "body-footer",
        //     colStyle: { borderWidth: 1, height: "10vh" },
        //   },
        // },
      },
    },
  },
};
