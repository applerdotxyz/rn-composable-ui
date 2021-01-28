export const routes = {};

routes.routeThree = {
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
              // //  borderColor: "yellow",
              height: "50vh",
            },
          },
        },
        1: {
          // Row 2
          0: {
            // col no
            colSize: 1,
            // idx: "Home",
            // label: "body-header",
            colStyle: {
              display: "none",
              // borderWidth: 2,
              //  borderColor: "yellow",
              // height: "50vh",
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
