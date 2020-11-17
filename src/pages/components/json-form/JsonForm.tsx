import { useNavigation } from "@react-navigation/native";
import { createBrowserHistory } from "history";
import React, { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import Form from "react-native-web-jsonschema-form";
import { MainContainer, UIProvider } from "react-native-web-ui-components";
import useSafeSetState from "../../../utils/useSafeState";

export const JsonForm = ({
  _onBeforeSubmit,
  _onSuccess,
  _onError,
  _onSubmit,
  _onChange,
  _formData,
  schema,
  uiSchema,
  onClose,
  ...props
}) => {
  const [loading, setLoading] = useSafeSetState(false);
  const [exception, setException] = useSafeSetState(null);
  const [message, setMessage] = useSafeSetState(null);
  const [formData, setFormData] = useState(_formData);

  const onBeforeSubmit = (e) => {
    console.log("*** onBeforeSubmit ***");
    console.log(e);
    _onBeforeSubmit(e);
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
      [event.params.name]: event.params.value,
    });
  };

  const theme = {
    input: {
      focused: StyleSheet.create({
        border: {
          borderColor: "yellow",
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
      <MainContainer style={{ padding: "2%" }}>
        <Form
          style={{ margin: 10 }}
          formData={formData}
          schema={schema}
          onChange={onChange}
          onCancel={onClose}
          onSuccess={onSuccess}
          onSubmit={onSubmit}
          onError={onError}
          uiSchema={uiSchema}
        />
      </MainContainer>
    </ThemeWrapper>
  );
};
