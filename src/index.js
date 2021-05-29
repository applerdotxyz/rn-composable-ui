/* eslint-disable prettier/prettier */
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
  "tw-grid-layout": {
    id: "tw-grid-layout",
    desc: "demo for grid with tailwind",
  },
  "liveedit": {
    id: "liveedit",
    desc: "demo for grid with Live Editing",
  },
  "trello-clone": {
    id: "trello-clone",
    desc: "demo for trello clone made with tailwing and rn-composable",
  },
  "app-one": { id: "app-one" },
  "app-three": { id: "app-three" },
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
  "TSDigisolPlatform":{id:"TSDigisolPlatform"}
};
// FIXME: LOAD ABOVE OBJECT dynamically
const selected = "TSDigisolPlatform";
// const selected = "3_4-screen-example-web";

// eslint-disable-next-line @typescript-eslint/no-var-requires
let moduleConfig = require(`./rn-config-tyler/packages/demo/examples/${configs[selected]?.id}/layout`);
const getComponents = moduleConfig.getComponents;
const fetchConfig = moduleConfig.fetchConfig;

// ****** EXAMPLE CONFIGS END ****.************
import { registerRootComponent } from "expo";
import React from "react";
import Entry from "./rn-config-tyler/packages/demo/components/Entry";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { init } = require("./rn-config-tyler/packages/demo/helpers/lib/src");

if (process.env.REACT_NATIVE_DEMO == "true") {
  init(moduleConfig, fetchConfig, getComponents).then((passProps) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // const Entry = require("./rn-config-tyler/packages/demo/components/Entry");
    registerRootComponent(() => (
      <Entry debug={true} {...passProps} modules={configs} />
    ));
  });
}
else if (process.env.REACT_NATIVE_LIVEEDIT == "true") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  init(moduleConfig, fetchConfig, getComponents).then((passProps) => {
    console.log("**** OPENED EDITOR MODE ****");
    const {
      App,
      // eslint-disable-next-line @typescript-eslint/no-var-requires
    } = require("./rn-config-tyler/packages/demo/helpers/lib/src/container/App");
    registerRootComponent(() => <App {...passProps} />);
  });
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { App } = require("./rn-config-tyler/packages/demo/helpers/lib/src");
  init(moduleConfig, fetchConfig, getComponents).then((passProps) => {
    registerRootComponent(() => <App debug={false} {...passProps} />);
  });
}
