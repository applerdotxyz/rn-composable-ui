// import { route } from "./utils/router";

import merge from "deepmerge";
import { registerRootComponent } from "expo";
import React from "react";

// ****** EXAMPLE CONFIGS START ****************
// import { appConfig, routes } from "../examples/react-router-port/layout"; /// starter example with nav bars and changes to content area
// import { appConfig, routes, getEvents } from "../examples/app-one/layout"; /// example with button clicks and routing with dynamic changes to screen
// import { appConfig, routes } from "../examples/app-two/layout"; /// another example with changes
import { appConfig, routes, getEvents } from "../examples/todo-app/layout";
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
          setLayoutConfig={(config) =>
            this.setState(
              {
                config: merge(this?.state?.config, { layout: config }),
              },
              () => {
                console.log(this?.state?.config);
              }
            )
          }
        />
      </>
    );
  }
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
