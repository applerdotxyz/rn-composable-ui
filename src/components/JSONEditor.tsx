/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from "react";
import PropTypes from "prop-types";
import ace from "brace";
import "brace/mode/json";
import "brace/theme/github";

import { JsonEditor as Editor } from "jsoneditor-react";
import "./JSONEditor.css";

export default class JSONEditor extends Component {
  render() {
    const { json, onError, onChangeJSON } = this.props;
    // TODO: add toggle between JSON tree and code mode
    // TODO: add code mode changes getting reflected to actual config

    return [
      <Editor
        ace={ace}
        key={1}
        value={json}
        mode={"tree"}
        modes={["text", "code", "tree", "form", "view"]}
        onChange={onChangeJSON}
        onError={onError}
        theme={"ace/theme/github"}
      />,
    ];
  }
}

JSONEditor.propTypes = {
  json: PropTypes.object,
  onError: PropTypes.func,
  onChangeJSON: PropTypes.func,
};
