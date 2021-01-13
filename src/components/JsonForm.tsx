import { createBrowserHistory } from "history";
import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import Form from "react-native-web-jsonschema-form";
import { MainContainer, UIProvider } from "react-native-web-ui-components";
import useSafeState from "../utils/useSafeState";

const noOp = () => {
  /* */
};

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
  style = {},
  ...props
}) => {
  // TODO: show loading indicator based on loading value
  const [loading, setLoading] = useSafeState(false);
  // TODO: show exceptions as errors
  const [exception, setException] = useSafeState(null);
  // TODO: show message
  const [message, setMessage] = useSafeState(null);
  // TODO: submit formData to ideal connected endpoint
  const [formData, setFormData] = useState(_formData);

  const onBeforeSubmit = (event) => {
    console.log("*** onBeforeSubmit ***");
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
      ...formData,
      [event.params.name]: event.params.value
    });
  };

  const theme = {
    input: {
      focused: StyleSheet.create({
        border: {
          borderColor: "#33bfff"
        }
      })
    }
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
      <MainContainer style={{ margin: 10, ...style }}>
        <Form
          style={{ margin: 10 }}
          formData={formData}
          schema={schema}
          onChange={onChange}
          onCancel={_onClose}
          onSuccess={onSuccess}
          onSubmit={onSubmit}
          onError={onError}
          uiSchema={uiSchema}
        />
      </MainContainer>
    </ThemeWrapper>
  );
};
