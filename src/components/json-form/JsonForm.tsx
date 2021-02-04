/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import { createBrowserHistory } from "history";
import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import Form from "react-native-web-jsonschema-form";
import { MainContainer, UIProvider } from "react-native-web-ui-components";
import useSafeSetState from "../../utils/useSafeState";

const noOp = (): void => {};

export const JsonForm = ({
  _onBeforeSubmit = noOp,
  _onSuccess = noOp,
  _onError = noOp,
  _onSubmit = noOp,
  _onChange = noOp,
  _formData = {},
  _onClose = noOp,
  schema = {},
  uiSchema = {},
  _submitButton = true,
  ...props
}): AnyRecord => {
  // TODO: show loading indicator based on loading value
  const [loading, setLoading] = useSafeSetState(false);
  // TODO: show exceptions as errors
  const [exception, setException] = useSafeSetState(null);
  // TODO: show message
  const [message, setMessage] = useSafeSetState(null);
  // TODO: submit formData to ideal connected endpoint
  const [formData, setFormData] = useState(_formData);

  const onBeforeSubmit = (event) => {
    console.log("*** onBeforeSubmit ***");
    console.log(event.params.values.phone);
    console.log(event.params.values.otp);
    console.log(event);

    _onBeforeSubmit(event);
  };

  const onSuccess = (event) => {
    console.log("onSuccess outer called");
    const { response } = event.params;
    console.log(response);
    _onSuccess(event);
    // setLoading(false);
    // setMessage(response.data[controller][action].message);
  };

  const onError = (event) => {
    console.log("*** onError ***");
    console.log(event);
    const { exceptions } = event.params;
    const exceptionsMessages = exceptions.map((messages) =>
      messages.join(", ")
    );
    _onError(event);
    // setLoading(false);
    // if (exceptionsMessages.length) {
    //   setException(exceptionsMessages.join("\n"));
    // }
  };

  const onErrorOk = () => setException(null);

  // form data mutator
  const onChange = (event) => {
    setFormData({
      ..._formData,
      [event.params.name]: event.params.value,
    });
  };

  const theme = {
    input: {
      focused: StyleSheet.create({
        border: {
          borderColor: "yellow",
          borderWidth: 2,
          borderStyle: "solid",
        },
        background: {
          backgroundColor: "white",
        },
        text: {
          fontSize: 14,
          color: "#545454",
        },
        placeholder: {
          color: "#FAFAFA",
        },
        opacity: {
          opacity: 1,
        },
        selected: {
          color: "blue",
        },
        unselected: {
          color: "#FAFAFA",
        },
      }),
    },
  };

  const onSubmit = async (event) => {
    await onBeforeSubmit(event);
    setLoading(true);
    const { values } = event.params;
    _onSubmit(event);
    // const mutation = getMutation({
    //   values,
    //   controller,
    //   action,
    // });

    // return mutate({ client, mutation }).catch((err) => {
    //   throw toErrorSchema(err);
    // });
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
    <ThemeWrapper>
      {/* <MainContainer
        style={{
          padding: "2%",
          marginHorizontal: 10,
          marginVertical: 10,
          minHeight: 10,
        }}
      > */}
      <Form
        // style={{ margin: 30 }}
        formData={formData}
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        onSuccess={onSuccess}
        submitButton={_submitButton}
        cancelButton={false}
        onChange={_onChange}
        buttonPosition="center"
      />
      {/* </MainContainer> */}
    </ThemeWrapper>
  );
};
