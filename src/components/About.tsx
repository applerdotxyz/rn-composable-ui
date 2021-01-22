/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, Text, View } from "react-native";

export const About = ({
  appState,
  label,
  styles,
  children,
  setAppState,
  layoutConfig,
  setLayoutConfig,
  getEvents,
  events,
}) => {
  // console.log(getEvents(events, `${label}-btn-one`, setLayoutConfig, setAppState));

  return (
    <View>
      <Text>About *** {label}</Text>
      <Button
        {...getEvents(`${label}-btn-one`, setLayoutConfig, setAppState)}
        testID={`${label}-btn-one`}
        title={`${"About"}Flash`}
      ></Button>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};


// import React from "react";
// import { Button, Text, View } from "react-native";
// import "./RandomPic";
// export const About = ({
//   appState,
//   label,
//   styles,
//   children,
//   setAppState,
//   setLayoutConfig
// }) => {
//   return (
//     <View>
//       <Text>About *** {label}</Text>
//       <Button
//         onPress={() => {
//           setAppState({
//             actioncomp: {
//               ui: "Home"
//             },
//             comp5: {
//               ui: "RandomPic",
//               props: { label: "comp51->1" }
//             },
//             "comp5.12": {
//               ui: "About",
//               props: { label: "comp5.12" }
//             }
//           });
//         }}
//         title={`${"About"}Flash`}
//       ></Button>
//       {children || (appState && appState[label] && appState[label]?.children)}
//     </View>
//   );
// };
