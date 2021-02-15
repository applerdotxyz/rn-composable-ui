// import { registerRootComponent } from "expo";
import React, { useState } from "react";
import merge from "deepmerge";
import { object } from "dot-object";

import { GridSection, JSONEditor } from "../helpers/lib/src/index";
// FIXME: when publish the module, use only one of two lines below, right now local npm linking being used
// import { GridSection, JSONEditor } from "rn-config-tyler";
// import { GridSection, JSONEditor, styles } from "rn-config-tyler/dist/index.es";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

//  overall container app
const WrappedApp = (props) => {
  const [config, setConfig] = useState(props?.appConfig);

  const setLayoutConfig = (_config, isDottedFormat = false) => {
    // find out if the object is in collapsed/dotted format
    if (isDottedFormat) {
      // expand to proper JSON from dotted notation
      _config = object(_config);
    }
    setConfig(merge(config, { layout: _config }));
    // console.log(config);
  };
  return (
    <>
      {props?.debug ? (
        <JSONEditor
          json={config}
          onChangeJSON={(json) => {
            // TODO: add schema conformation for JSONEditor values of component names
            setConfig(json);
          }}
        />
      ) : null}
      <GridSection
        layoutConfig={config}
        getEvents={props?.getEvents}
        routes={props?.routes}
        setLayoutConfig={setLayoutConfig}
      />
    </>
  );
};
export default WrappedApp;
