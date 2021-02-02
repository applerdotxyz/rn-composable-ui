// import { route } from "./utils/router";

import merge from "deepmerge";
import { registerRootComponent } from "expo";
import React from "react";
import { object } from "dot-object";

// ****** EXAMPLE CONFIGS START ****************
// import { appConfig, routes, getEvents } from "../examples/react-router-port/layout"; /// starter example with nav bars and changes to content area
// import { appConfig, routes, getEvents } from "../examples/app-one/layout"; /// example with button clicks and routing with dynamic changes to screen
// import { appConfig, routes } from "../examples/app-two/layout"; /// another example with changes
// import { appConfig, routes, getEvents } from "../examples/todo-app/layout";
// import { appConfig, routes, getEvents } from "../examples/sagar-poc/layout"; /// example with button clicks and routing with dynamic changes to screen
// import { appConfig, routes, getEvents } from "../examples/sagar-poc/layout"; /// example with button clicks and routing with dynamic changes to screen
import { appConfig, routes, getEvents } from "../examples/app-three/layout"; /// example with NavBarComponent addeed and Tab Component added
// import { appConfig, routes } from "../examples/react-router-port/layout"; /// starter example with nav bars and changes to content area
// import { appConfig, routes, getEvents } from "../examples/app-one/layout"; // example with button clicks and routing with dynamic changes to screen
// import { appConfig, routes } from "../examples/app-two/layout"; /// another example with changes

// import { appConfig, routes, getEvents } from "../examples/sagar-poc/example1";

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "../examples/sagar-poc/poc-with-appstate/layout";

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "../examples/sagar-poc/poc-with-setLayout/layout";

// import { appConfig, routes, getEvents } from "../examples/sagar-poc/poc1";

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "../examples/sagar-poc/poc1-mobile";

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "../examples/react-router-port/layout"; /// starter example with nav bars and changes to content area
// import { appConfig, routes, getEvents } from "../examples/app-one/layout"; /// example with button clicks and routing with dynamic changes to screen
// import { appConfig, routes, getEvents } from "../examples/app-two/layout"; /// another example with changes
// ****** EXAMPLE CONFIGS END ****************

import { GridSection } from "./App";
import { JSONEditor } from "./internal/components/JSONEditor";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

//  overall container app
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      config: appConfig,
    };
    // console.log(this.state.config);
  }

  render() {
    return (
      <>
        <JSONEditor
          json={this.state?.config}
          onChangeJSON={(json) => {
            // TODO: add schema conformation for JSONEditor values of component names
            this.setState({ config: json }, () => {
              //
            });
          }}
        />
        <GridSection
          layoutConfig={this?.state?.config}
          routes={routes}
          getEvents={getEvents}
          setLayoutConfig={(config, isDottedFormat = false) => {
            // TODO: find out if the object is in collapsed/dotted format
            if (isDottedFormat) {
              // expand to proper JSON from dotted notation
              config = object(config);
            }
            this.setState(
              {
                // TODO: fix thois to be possible with only identifier
                config: merge(this?.state?.config, { layout: config }),
              },
              () => {
                console.log(this?.state?.config);
              }
            );
          }}
        />
      </>
    );
  }
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
