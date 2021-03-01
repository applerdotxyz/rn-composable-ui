import React from "react";
// ****** EXAMPLE CONFIGS START ****************
// FIXME: fix the component mount stage example with <label>-$init logic fix

// import {
//   appConfig,
//   routes,
//   getEvents,
//   // getInitEvents,
// } from "./rn-config-tyler/packages/demo/examples/component-mount/layout";

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "./rn-config-tyler/packages/demo/examples/todo-app/layout";


// import {
//   appConfig,
//   getEvents,
//   routes,
// } from "./rn-config-tyler/packages/demo/examples/with-appstate/layout";

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "./rn-config-tyler/packages/demo/examples/with-setLayout/layout";

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "./rn-config-tyler/packages/demo/examples/with-setLayout (without hide)/layout";

// import {
//   appConfig,
//   routes,
//   getEvents,
//   //   getInitEvents,
// } from "./rn-config-tyler/packages/demo/examples/3_4-screen-example-web/layout";

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "./rn-config-tyler/packages/demo/examples/with-calendar/layout";


// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "./rn-config-tyler/packages/demo/examples/with-charts/layout";


// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "./rn-config-tyler/packages/demo/examples/3_4-screen-example-mobile/layout";

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "./rn-config-tyler/packages/demo/examples/with-jsonforms/layout";

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "./rn-config-tyler/packages/demo/examples/collapsible-leftnav/layout"; /// example with button clicks and routing with dynamic changes to screen

// import {
//   appConfig,
//   routes,
//   getEvents,
// } from "./rn-config-tyler/packages/demo/examples/another-grid/layout"; /// another example with changes

// ****** EXAMPLE CONFIGS END ****************
// import { App } from "./rn-config-tyler/packages/demo/helpers/lib/src";

import Entry from "./rn-config-tyler/packages/demo/components/Entry";


// **************************************************
// TODO uncomment below, and comment section at very bottom for non-codesandbox
// **************************************************
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { registerRootComponent } = require("expo");
registerRootComponent(() => (
  // {/* FIXME: debug=true below results in error */}
  // <App
  //   config={appConfig}
  //   routes={routes}
  //   debug={false}
  //   getEvents={getEvents}
  //   // getInitEvents={getInitEvents}
  // />
  <Entry />
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
