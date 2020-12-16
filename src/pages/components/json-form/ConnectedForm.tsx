import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { createBrowserHistory } from "history";

import {
  Alert,
  Loading,
  MainContainer,
  UIProvider,
} from "react-native-web-ui-components";
import Form from "react-native-web-jsonschema-form";

import useSafeSetState from "../../../utils/useSafeState";
// import { JsonForm } from "./JsonForm";

export const ConnectedForm = ({ controller, action }) => {
  const [schema, setSchema] = useSafeSetState(null);
  const [message, setMessage] = useSafeSetState(null);
  const [posting, setPosting] = useSafeSetState(null);

  const onSubmit = async (event) => {
    const { values } = event.params;
    setPosting(true);
    return fetch(`/${controller}/${action}`, {
      method: "POST",
      body: JSON.stringify(values),
    });
  };

  const onSuccess = async (event) => {
    const { response } = event.params;
    setPosting(false);
    setMessage(response.message);
  };

  const onError = async (event) => {
    // These are errors for fields that are not included in the schema
    const { exceptions } = event.params;
    const warning = Object.keys(exceptions).map((k) =>
      exceptions[k].join("\n")
    );
    setPosting(false);
    setMessage(warning.length ? warning.join("\n") : null);
  };

  if (!schema) {
    fetch(`https://run.mocky.io/v3/c71be071-fb06-445e-8a00-e8b889b94a26`)
      // fetch(`/get-schema/${controller}/${action}`)
      .then((schema) => setSchema(schema));

    return <Loading />;
  }

  const theme = {
    input: {
      focused: StyleSheet.create({
        border: {
          borderColor: "yellow",
        },
      }),
    },
    // All components will receive the prop fontFamily
    "*": {
      fontFamily: {
        regular: "Lucida Sans",
        bold: "Lucida Sans Bold",
      },
    },
    platform: {
      // When running on web, the fontFamily property will be overwritten by the following.
      web: {
        "*": {
          fontFamily: {
            regular:
              '"Lucida Sans Unicode","Lucida Grande",Arial,Helvetica,clean,sans-serif',
            bold:
              '"Lucida Grande", "Lucida Sans Unicode","Lucida Grande",Arial,Helvetica,clean,sans-serif',
          },
        },
      },
    },
  };

  const ThemeWrapper = ({ children }) => {
    return (
      <UIProvider
        theme={theme}
        history={Platform.OS === "web" ? createBrowserHistory() : {}}
      >
        {children}
      </UIProvider>
    );
  };
  return (
    <View>
      {posting ? <Loading /> : null}
      {message ? <Alert>Message</Alert> : null}
      <ThemeWrapper>
        <MainContainer style={{ padding: "2%" }}>
          <Form
            style={{ margin: 10 }}
            schema={schema}
            onSubmit={onSubmit}
            onSuccess={onSuccess}
            onError={onError}
          />
        </MainContainer>
      </ThemeWrapper>
    </View>
  );
};
