// ****** EXAMPLE CONFIGS START ****************
// FIXME: fix the component mount stage example with <label>-$init logic fix
/*** example with json based forms  */
const configs = {
  "with-charts": "with-charts",
  "with-jsonforms": "with-jsonforms",
  "another-grid": "another-grid",
  "3_4-screen-example-mobile": "3_4-screen-example-mobile",
  "3_4-screen-example-web": "3_4-screen-example-web",
  "with-calendar": "with-calendar",
  "component-mount": "component-mount",
  "todo-app": "todo-app",
  "with-appstate": "with-appstate",
  "with-setLayout": "with-setLayout",
  "with-setLayout (without hide)": "with-setLayout (without hide)",
  "collapsible-leftnav": "collapsible-leftnav",
  "with-tailwind": "with-tailwind",
};
const selected = "with-tailwind";

let moduleConfig = require(`./rn-config-tyler/packages/demo/examples/${configs[selected]}/layout`);
const getComponents = moduleConfig.getComponents;
const fetchConfig = moduleConfig.fetchConfig;

// ****** EXAMPLE CONFIGS END ****.************
import React from "react";
import { registerRootComponent } from "expo";
import { App, init } from "./rn-config-tyler/packages/demo/helpers/lib/src";
import Entry from "./rn-config-tyler/packages/demo/components/Entry";


// eslint-disable-next-line @typescript-eslint/no-var-requires
init(moduleConfig, fetchConfig, getComponents).then((passProps) => {
  registerRootComponent(() => <App debug={true} {...passProps} />);
});

// const { registerRootComponent } = require("expo");
// registerRootComponent(() => (
//   // {/* FIXME: debug=true below results in error */}
//   <Entry />
// ));


// **************************************************/
// TODO: below section to make it run on codesandbox.io
/// **************************************************

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
