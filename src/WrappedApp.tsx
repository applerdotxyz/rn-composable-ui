// import { registerRootComponent } from "expo";
import merge from "deepmerge";
import { object } from "dot-object";
import React from "react";

// FIXME: when publish the module, use only one of two lines below, right now local npm linking being used
// import { GridSection, JSONEditor } from "./lib/src";
import { GridSection, JSONEditor } from "rn-config-tyler/dist/index.es";

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
        {this.props?.debug ? (
          <JSONEditor
            json={this.state?.config}
            onChangeJSON={(json) => {
              // TODO: add schema conformation for JSONEditor values of component names
              this.setState({ config: json }, () => {
                //
              });
            }}
          />
        ) : null}
        <GridSection
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
