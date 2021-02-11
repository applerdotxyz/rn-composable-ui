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
            this.setState(
              {
                // TODO: fix thois to be possible with only identifier
                config: merge(this?.state?.config, { layout: config }),
              },
              () => {
                console.log(this?.state?.config);
              }
            );
          }}
        />
      </>
    );
  }
}
