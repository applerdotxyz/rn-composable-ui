import PropTypes from "prop-types";
import React, { Component } from "react";
import { View } from "react-native";

export class JSONEditor extends Component {
  render() {
    return <View />;
  }
}

JSONEditor.propTypes = {
  json: PropTypes.object,
  onError: PropTypes.func,
  onChangeJSON: PropTypes.func,
};
