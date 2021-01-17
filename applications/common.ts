export const colStyle = {
  borderWidth: 1,
  borderColor: "cyan"
};

export const rowStyle = {
  borderWidth: 1,
  borderColor: "red"
};

export const style1 = {
  borderWidth: 1,
  borderColor: "yellow"
};

export const gridStyle = {
  borderWidth: 1,
  borderColor: "blue",
  minHeight: 500
};

export const styles = {
  container: {
    marginTop: 25,
    padding: 10
  },
  tabName: {
    color: "white"
  },
  header: {
    fontSize: 20,
    backgroundColor: "skyblue",
    marginTop: 10,
    padding: 15
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "coral"
  },
  subNavItem: {
    padding: 15
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
};



// // *************************************************
// //  Helper Util
// // *************************************************
// // bind events based on the layout config
// export const getEvents = (events, elId, setLayoutConfig, setAppState) => {
//   const elEvents = {};
//   Object.keys(events[elId]).map((eventName) => {
//     // console.log({ [eventName]: events[elId][eventName] });
//     elEvents[eventName] = () =>
//       events[elId][eventName](setLayoutConfig, setAppState);
//   });
//   // console.log(elEvents);
//   return elEvents;
// };
