import React, { Component } from "react";
import PropTypes from "prop-types";

import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";

export default class JSONditor extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = {
      theme: "light"
    };
  }

  handleChange = () =>
    this.setState({
      theme: this.isLight() ? "dark" : "light"
    });

  isLight = () => this.state.theme === "light";

  render() {
    const { json, onError, onChange } = this.props;

    const isLight = this.isLight();
    return [
      <button type="button" key={0} onClick={this.handleChange}>
        {`Change to ${isLight ? "dark" : "light"}`}
      </button>,
      <Editor
        key={1}
        value={json}
        onChange={onChange}
        onError={onError}
        theme={"ace/theme/tomorrow_night_blue"}
      />
    ];
  }
}

JSONditor.propTypes = {
  json: PropTypes.object,
  onError: PropTypes.func,
  onChange: PropTypes.func
};
