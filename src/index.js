// ****** EXAMPLE CONFIGS START ****************
// FIXME: fix the component mount stage example with <label>-$init logic fix
// } from "./rn-config-tyler/packages/demo/examples/component-mount/layout";
// } from "./rn-config-tyler/packages/demo/examples/todo-app/layout";
// } from "./rn-config-tyler/packages/demo/examples/with-appstate/layout";
// } from "./rn-config-tyler/packages/demo/examples/with-setLayout/layout";
// } from "./rn-config-tyler/packages/demo/examples/with-setLayout (without hide)/layout";

// } from "./rn-config-tyler/packages/demo/examples/3_4-screen-example-web/layout";
// } from "./rn-config-tyler/packages/demo/examples/with-calendar/layout";

// } from "./rn-config-tyler/packages/demo/examples/3_4-screen-example-mobile/layout";

// eslint-disable-next-line @typescript-eslint/no-var-requires
// let moduleConfig = require("./rn-config-tyler/packages/demo/examples/with-charts/layout");
// let moduleConfig = require("./rn-config-tyler/packages/demo/examples/another-grid/layout"); /// another example with changes

/*** example with button clicks and routing with dynamic changes to screen  */
// let moduleConfig = require("./rn-config-tyler/packages/demo/examples/collapsible-leftnav/layout");

/*** example with json based forms  */
let moduleConfig = require("./rn-config-tyler/packages/demo/examples/with-jsonforms/layout");
const getComponents = moduleConfig.getComponents;

// ****** EXAMPLE CONFIGS END ****.************
import React from "react";
const noOp = () => {
  /** */
};
import { App } from "./rn-config-tyler/packages/demo/helpers/lib/src";
// const moduleConfig = require(`${moduleConfig}`);

const passProps = {
  // fetchConfig: {
  //   method: "GET",
  //   url: "https://run.mocky.io/v3/03d0fb91-61ba-4b9b-b452-87d428e68ee8",
  //   getComponents,
  // },
  config: moduleConfig?.appConfig,
  routes: moduleConfig?.routes,
  getEvents: moduleConfig?.getEvents || noOp,
  getInitEvents: moduleConfig?.getInitEvents || noOp,
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { registerRootComponent } = require("expo");
registerRootComponent(() => <App debug={false} {...passProps} />);

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
