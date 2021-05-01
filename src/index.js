// ****** EXAMPLE CONFIGS START ****************
// FIXME: fix the component mount stage example with <label>-$init logic fix
/*** example with json based forms  */
const configs = {
  "3_4-screen-example-web": {
    id: "3_4-screen-example-web",
    desc: "demo for router with navigation for web",
  },
  "3_4-screen-example-mobile": {
    id: "3_4-screen-example-mobile",
    desc: "demo for router with navigation for mobile",
  },
  "another-grid": { id: "another-grid", desc: "demo for grid" },
  "tw-grid": { id: "tw-grid-layout", desc: "demo for grid with tailwind" },
  "app-one": { id: "app-one" },
  "app-three": { id: "app-three" },
  "app-two": { id: "app-two" },
  "collapsible-leftnav": { id: "collapsible-leftnav" },
  "component-mount": { id: "component-mount" },
  "dashboard-demo": { id: "dashboard-demo" },
  "dynamic-navigation": { id: "dynamic-navigation" },
  "react-router-port": { id: "react-router-port" },
  "todo-app": { id: "todo-app" },
  "vanilla-grid-layout": { id: "vanilla-grid-layout" },
  "with-appstate": { id: "with-appstate" },
  "with-calendar": { id: "with-calendar" },
  "with-charts": { id: "with-charts" },
  "with-jsonforms": { id: "with-jsonforms" },
  "with-setLayout": { id: "with-setLayout" },
  "with-setLayout (without hide)": { id: "with-setLayout (without hide)" },
  "with-tailwind": { id: "with-tailwind" },
};
// FIXME: LOAD ABOVE OBJECT dynamically
// const selected = "tw-grid-layout";

const selected = "3_4-screen-example-web";
// eslint-disable-next-line @typescript-eslint/no-var-requires
let moduleConfig = require(`./rn-config-tyler/packages/demo/examples/${configs[selected]?.id}/layout`);
const getComponents = moduleConfig.getComponents;
const fetchConfig = moduleConfig.fetchConfig;

// ****** EXAMPLE CONFIGS END ****.************
import React from "react";
import { registerRootComponent } from "expo";
import { App, init } from "./rn-config-tyler/packages/demo/helpers/lib/src";
import Entry from "./rn-config-tyler/packages/demo/components/Entry";

if (process.env.REACT_NATIVE_DEMO == "true") {
  init(moduleConfig, fetchConfig, getComponents).then((passProps) => {
    registerRootComponent(() => (
      <Entry debug={true} {...passProps} modules={configs} />
    ));
  });
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  init(moduleConfig, fetchConfig, getComponents).then((passProps) => {
    registerRootComponent(() => <App debug={false} {...passProps} />);
  });
}
