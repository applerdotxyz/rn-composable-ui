import { createBrowserHistory } from "history";
import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import Form from "react-native-web-jsonschema-form";
import { MainContainer, UIProvider } from "react-native-web-ui-components";
import useSafeSetState from "../../../utils/useSafeState";

const noOp = (): void => {
  /* */
};

export const JsonForm = ({
  _onBeforeSubmit = noOp,
  _onSuccess = noOp,
  _onError = noOp,
  _onSubmit = noOp,
  _formData = {},
  _onClose = noOp,
  schema = {},
  uiSchema = {},
}) => {
  // TODO: show loading indicator based on loading value
  const [, setLoading] = useSafeSetState(false);
  // TODO: show exceptions as errors
  const [] = useSafeSetState(null);
  // TODO: show message
  const [] = useSafeSetState(null);
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
    _onError(event);
    // setLoading(false);
    // if (exceptionsMessages.length) {
    //   setException(exceptionsMessages.join("\n"));
    // }
  };

  // form data mutator
  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.params.name]: event.params.value,
    });
  };

  const theme = {
    input: {
      focused: StyleSheet.create({
        border: {
          borderColor: "#33bfff",
        },
      }),
    },
  };

  const onSubmit = async (event) => {
    await onBeforeSubmit(event);
    setLoading(true);
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

  // eslint-disable-next-line react/prop-types
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
      <MainContainer style={{ padding: "2%" }}>
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
