import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from "react-native-tab-view";

const FirstRoute = () => (
  <View style={[tabStyles.scene, { backgroundColor: "#ff4081" }]} />
);

const SecondRoute = () => (
  <View style={[tabStyles.scene, { backgroundColor: "#673ab7" }]} />
);

const ThirdRoute = () => (
  <View style={[tabStyles.scene, { backgroundColor: "red" }]} />
);

const FourthRoute = () => (
  <View style={[tabStyles.scene, { backgroundColor: "blue" }]} />
);

const FifthRoute = () => (
  <View style={[tabStyles.scene, { backgroundColor: "white" }]} />
);

const SixthRoute = () => (
  <View style={[tabStyles.scene, { backgroundColor: "black" }]} />
);

export const TabComponent = (props: {
  appState;
  label;
  styles;
  children;
  setAppState;
  layoutConfig;
  setLayoutConfig;
  getEvents;
  events;
}) => {
  const {
    appState,
    label,
    styles,
    children,
    setAppState,
    layoutConfig,
    setLayoutConfig,
    getEvents,
  } = props;

  console.log(`label is ${label}`);
  console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));

  const initialState = {
    index: 1,
    routes: [
      { key: "article", title: "Article" },
      { key: "contacts", title: "Contacts" },
      { key: "albums", title: "Albums" },
      { key: "chat", title: "Chat" },
      { key: "long", title: "long long long title" },
      { key: "medium", title: "medium title" },
    ],
  };

  const [state, setState] = useState(initialState);

  const handleIndexChange = (index: number) => {
    setState({
      index: index,
      routes: [
        { key: "article", title: "Article" },
        { key: "contacts", title: "Contacts" },
        { key: "albums", title: "Albums" },
        { key: "chat", title: "Chat" },
        { key: "long", title: "long long long title" },
        { key: "medium", title: "medium title" },
      ],
    });
    console.log("index clicked : : : ", index);
  };
  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      activeColor="red"
      indicatorStyle={tabStyles.indicator}
      // contentContainerStyle={tabStyles.indicator}
      pressColor="#b2c560"
      style={tabStyles.tabbar}
      labelStyle={tabStyles.label}
      tabStyle={tabStyles.tabStyle}
    />
  );

  const renderScene = SceneMap({
    albums: FirstRoute,
    contacts: SecondRoute,
    article: ThirdRoute,
    chat: FourthRoute,
    long: FifthRoute,
    medium: SixthRoute,
  });

  return (
    <TabView
      navigationState={state}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={handleIndexChange}
    />
  );
};

type State = NavigationState<{
  key: string;
  title: string;
}>;
// export class TabComponent extends React.Component<{}, State> {
//   // eslint-disable-next-line react/sort-comp
//   static title = "Scrollable tab bar (auto width)";
//   static backgroundColor = "#3f51b5";
//   static appbarElevation = 0;

//   state = {
//     index: 1,
//     routes: [
//       { key: "article", title: "Article" },
//       { key: "contacts", title: "Contacts" },
//       { key: "albums", title: "Albums" },
//       { key: "chat", title: "Chat" },
//       { key: "long", title: "long long long title" },
//       { key: "medium", title: "medium title" },
//     ],
//   };

//   private handleIndexChange = (index: number) =>
//     this.setState({
//       index,
//     });

//   private renderTabBar = (
//     props: SceneRendererProps & { navigationState: State }
//   ) => (
//     <TabBar
//       {...props}
//       scrollEnabled
//       indicatorStyle={styles.indicator}
//       style={styles.tabbar}
//       labelStyle={styles.label}
//       tabStyle={styles.tabStyle}
//     />
//   );

//   private renderScene = SceneMap({
//     albums: FirstRoute,
//     contacts: SecondRoute,
//     article: ThirdRoute,
//     chat: FourthRoute,
//     long: FifthRoute,
//     medium: SixthRoute,
//   });

//   render() {
//     return (
//       <TabView
//         navigationState={this.state}
//         renderScene={this.renderScene}
//         renderTabBar={this.renderTabBar}
//         onIndexChange={this.handleIndexChange}
//       />
//     );
//   }
// }

const tabStyles = StyleSheet.create({
  tabbar: {
    backgroundColor: "#5cabc5",
    paddingTop: 7,
    paddingBottom: 5,
    paddingLeft: 30,
    paddingRight: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
  // TODO : This indicator is not working
  indicator: {
    backgroundColor: "#ffeb3b",
  },
  label: {
    fontWeight: "400",
  },
  tabStyle: {
    width: "auto",
  },
  scene: {
    flex: 1,
  },
});
