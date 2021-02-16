/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import { registerRootComponent } from "expo";
import merge from "deepmerge";
import { object } from "dot-object";
import React from "react";

import {
  GridSection,
  JSONEditor,
} from "../rn-config-tyler/packages/demo/helpers/lib/src/index";

// INFO: when using the npmjs module
// import { GridSection, JSONEditor } from "rn-config-tyler/dist/index.es";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

//  overall container app
export default class WrappedApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: props?.appConfig,
    };
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  async handleChange(config) {
    await this.setStateAsync({
      config: merge(this?.state?.config, { layout: config }),
    });
    console.log("inner", this?.state?.config);
  }

  render() {
    return (
      <>
        <GridSection
          getEvents={this.props?.getEvents}
          layoutConfig={this.state?.config}
          routes={this.props?.routes}
          setLayoutConfig={(config, isDottedFormat = false) => {
            // TODO: find out if the object is in collapsed/dotted format
            if (isDottedFormat) {
              // expand to proper JSON from dotted notation
              config = object(config);
            }
            this.handleChange(config);
            // this.setState((prevState) => ({
            //   config: merge(prevState?.config, { layout: config }),
            // }));
            // this.setState(
            //   {
            //     // TODO: fix thois to be possible with only identifier
            //     config: merge(this?.state?.config, { layout: config }),
            //   },
            //   () => {
            //     console.log("inner",this?.state?.config);
            //   }
            // );
            console.log("outer", this?.state?.config);
          }}
        />
      </>
    );
  }
}
