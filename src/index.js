// ****** EXAMPLE CONFIGS START ****************
// FIXME: fix the component mount stage example with <label>-$init logic fix
/*** example with json based forms  */
const configs = {
  "3_4-screen-example-mobile": 
    {
      id: "3_4-screen-example-mobile",
      desc: "Mobile layout routing",
    },
  "3_4-screen-example-web": {
    id: "3_4-screen-example-web",
    desc: "Web layout routing with json form and search list",
  },
  "another-grid": {
    id: "another-grid",
    desc: "another-grid",
  },
  "app-one": {
    id: "app-one",
    desc: "app-one",
  },
  "app-three": {
    id: "app-three",
    desc: "app-three",
  },
  "collapsible-leftnav": {
    id: "collapsible-leftnav",
    desc: "collapsible-leftnav",
  },
  "component-mount": {
    id: "component-mount",
    desc: "component-mount",
  },
  "dashboard-demo": {
    id: "dashboard-demo",
    desc: "dashboard-demo",
  },
  "dynamic-navigation": {
    id: "dynamic-navigation",
    desc: "dynamic-navigation",
  },
  "react-router-port": {
    id: "react-router-port",
    desc: "react-router-port",
  },
  "todo-app": {
    id: "todo-app",
    desc: "Todo Application",
  },
  "vanilla-grid-layout": {
    id: "vanilla-grid-layout",
    desc: "vanilla-grid-layout",
  },
  "with-appstate": {
    id: "with-appstate",
    desc: "Example of setAppState",
  },
  "with-calendar": {
    id: "with-calendar",
    desc: "Calendar and agenda view",
  },
  "with-charts": {
    id: "with-charts",
    desc: "Charts",
  },
  "with-jsonforms":  {
    id: "with-jsonforms",
    desc: "Basic JsonForm",
  },
  "with-setLayout": {
    id: "with-setLayout",
    desc: "Example of seLayout with show/hide functionality",
  },
  "with-setLayout (without hide)": {
    id: "with-setLayout (without hide)",
    desc: "Example of seLayout without show/hide functionality",
  },
  "with-tailwind": {
    id: "with-tailwind",
    desc: "General Form using tailwind classes",
  },
};
// FIXME: LOAD ABOVE OBJECT dynamically
const selected = "3_4-screen-example-web";
console.log(configs[selected].desc)

let moduleConfig = require(`./rn-config-tyler/packages/demo/examples/${configs[selected].id}/layout`);
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
