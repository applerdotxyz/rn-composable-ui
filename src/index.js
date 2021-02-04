/* eslint-disable prettier/prettier */
// import { route } from "./utils/router";

import merge from "deepmerge";
import { registerRootComponent } from "expo";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { persistStore } from "redux-persist";
import { configureStore } from "../src/state-management/store"; //Import the store
import { Provider as ReduxProvider } from "react-redux";
// ****** EXAMPLE CONFIGS START ****************
// import { appConfig, routes, getEvents } from "../examples/react-router-port/layout"; /// starter example with nav bars and changes to content area
// import { appConfig, routes, getEvents } from "../examples/app-one/layout"; /// example with button clicks and routing with dynamic changes to screen
// import { appConfig, routes } from "../examples/app-two/layout"; /// another example with changes
// import { appConfig, routes, getEvents } from "../examples/todo-app/layout";
// import { appConfig, routes, getEvents } from "../examples/sagar-poc/layout"; /// example with button clicks and routing with dynamic changes to screen
// import { appConfig, routes, getEvents } from "../examples/sagar-poc/layout"; /// example with button clicks and routing with dynamic changes to screen

// ****** EXAMPLE CONFIGS END ****************

// ****************** TSD CONFIG ********************
import { appConfig } from "../examples/TSDigisolPlatform/configs/layouts/dashboardLayout";
import { routes } from "../examples/TSDigisolPlatform/configs/routes/routesConfig";
import { getEvents } from "../examples/TSDigisolPlatform/configs/events/eventConfig";
import { ApiLoaderComponent } from "../examples/TSDigisolPlatform/components/ApiLoaderComponent";
// ****************** TSD CONFIG ********************

import { GridSection } from "./App";
import { JSONEditor } from "./internal/components/JSONEditor";
import { updateSchema } from "./state-management/actions";

const store = configureStore();
const persistor = persistStore(store);

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
        {/* <JSONEditor
          json={this.state?.config}
          onChangeJSON={(json) => {
            // TODO: add schema conformation for JSONEditor values of component names
            this.setState({ config: json }, () => {
              //
            });
          }}
        /> */}
        <ReduxProvider store={store}>
          <ApiLoaderComponent />
          <GridSection
            layoutConfig={this?.state?.config}
            routes={routes}
            getEvents={getEvents}
            setLayoutConfig={(config) =>
              this.setState(
                {
                  // TODO: fix thois to be possible with only identifier
                  config: merge(this?.state?.config, { layout: config }),
                },
                () => {
                  console.log(this?.state?.config);
                }
              )
            }
          />
        </ReduxProvider>
      </>
    );
  }
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
