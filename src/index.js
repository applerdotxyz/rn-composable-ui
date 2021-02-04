import React from "react";

// ****** EXAMPLE CONFIGS START ****************
// import { appConfig, routes, getEvents } from "../examples/sagar-poc/layout"; /// example with button clicks and routing with dynamic changes to screen

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "../examples/react-router-port/layout"; /// starter example with nav bars and changes to content area
import { appConfig, routes, getEvents } from "../examples/app-one/layout"; /// example with button clicks and routing with dynamic changes to screen
// import { appConfig, routes, getEvents } from "../examples/app-two/layout"; /// another example with changes
// ****** EXAMPLE CONFIGS END ****************
// ****** EXAMPLE CONFIGS END ****************
import WrappedApp from "./WrappedApp";

// **************************************************
// TODO uncomment below, and comment section at very bottom for non-codesandbox
// **************************************************
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { registerRootComponent } = require("expo");
registerRootComponent(() => (
  <WrappedApp appConfig={appConfig} routes={routes} debug={false} />
));

// **************************************************
// TODO: below section to make it run on codesandbox.io
// **************************************************

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { render } = require("react-dom");
// const rootElement = document.getElementById("root");
// render(
//   <React.StrictMode>
//     {/*
//       `appConfig` is the original layout configuration for initial render
//       `routes` is the routes object (multiple possible layout configurations possible) for later renders
//       `debug` determines that whether `debugging` related features are enabled or not along with router (e.g. json tree)
//     */}
//     <WrappedApp appConfig={appConfig} routes={routes} debug={false} />
//   </React.StrictMode>,
//   rootElement
// );
