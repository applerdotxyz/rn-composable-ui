// ****** EXAMPLE CONFIGS START ****************
// FIXME: fix the component mount stage example with <label>-$init logic fix
/*** example with json based forms  */
const configs = {
  "3_4-screen-example-mobile": "3_4-screen-example-mobile",
  "3_4-screen-example-web": "3_4-screen-example-web",
  "another-grid": "another-grid",
  "app-one": "app-one",
  "app-three": "app-three",
  "app-two": "app-two",
  "collapsible-leftnav": "collapsible-leftnav",
  "component-mount": "component-mount",
  "dashboard-demo": "dashboard-demo",
  "dynamic-navigation": "dynamic-navigation",
  "react-router-port": "react-router-port",
  "state-mgmt": "state-mgmt",
  "todo-app": "todo-app",
  "vanilla-grid-layout": "vanilla-grid-layout",
  "with-appstate": "with-appstate",
  "with-calendar": "with-calendar",
  "with-charts": "with-charts",
  "with-jsonforms": "with-jsonforms",
  "with-setLayout": "with-setLayout",
  "with-setLayout (without hide)": "with-setLayout (without hide)",
  "with-tailwind": "with-tailwind",
};
// FIXME: LOAD ABOVE OBJECT dynamically
const selected = "3_4-screen-example-web";

let moduleConfig = require(`./rn-config-tyler/packages/demo/examples/${configs[selected]}/layout`);
const getComponents = moduleConfig.getComponents;
const fetchConfig = moduleConfig.fetchConfig;

// ****** EXAMPLE CONFIGS END ****.************
import { registerRootComponent } from "expo";
import React from "react";
import Entry from "./rn-config-tyler/packages/demo/components/Entry";
import { App, init } from "./rn-config-tyler/packages/demo/helpers/lib/src";

if (process.env.REACT_NATIVE_DEMO == "true") {
  init(moduleConfig, fetchConfig, getComponents).then((passProps) => {
    registerRootComponent(() => (
      <Entry debug={true} {...passProps} modules={configs} />
    ));
  });
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  init(moduleConfig, fetchConfig, getComponents).then((passProps) => {
    registerRootComponent(() => <App debug={true} {...passProps} />);
  });
}
