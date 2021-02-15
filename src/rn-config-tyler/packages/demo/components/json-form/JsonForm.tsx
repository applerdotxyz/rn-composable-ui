/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import { createBrowserHistory } from "history";
import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import Form from "react-native-web-jsonschema-form";
import { UIProvider } from "react-native-web-ui-components";
import { getEvents } from "../../examples/sagar-poc/3_4-screen-example-web/layout";
import useSafeSetState from "../utils/useSafeState";
export { useSafeSetState };

const noOp = (): void => {};

export const JsonForm = ({
  formId = "form",
  setAppState,
  appState,
  _onBeforeSubmit = noOp,
  _onSuccess = noOp,
  _onError = noOp,
  _onSubmit = noOp,
  _onChange = noOp,
  _formData = {},
  _onClose = noOp,
  schema = {},
  uiSchema = {},
  label,
  _submitButton = true,
  setLayoutConfig,
  ...props
}): AnyRecord => {
  // TODO: show loading indicator based on loading value
  const [loading, setLoading] = useSafeSetState(false);
  // TODO: show exceptions as errors
  const [exception, setException] = useSafeSetState(null);
  // TODO: show message
  const [message, setMessage] = useSafeSetState(null);
  // TODO: submit formData to ideal connected endpoint
  const [formData, setFormData] = useSafeSetState(_formData);

  // const onBeforeSubmit = (event) => {
  //   console.log("*** onBeforeSubmit ***");
  //   console.log(event.params.values.phone);
  //   console.log(event.params.values.otp);
  //   console.log(event);
  //   // console.log(e.params.values);
  //   setAppState({
  //     $appState: {
  //       loginValues: event.param.values,
  //     },
  //   });
  //   _onBeforeSubmit(event);
  // };

  

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

  // const onSubmit = async (event) => {
  //   await onBeforeSubmit(event);
  //   setLoading(true);
  //   const { values } = event.params;
  //   _onSubmit(event);
  //   // const mutation = getMutation({
  //   //   values,
  //   //   controller,
  //   //   action,
  //   // });

  //   // return mutate({ client, mutation }).catch((err) => {
  //   //   throw toErrorSchema(err);
  //   // });
  // };

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
      <Text>{label}</Text>
      <Form
        // style={{ margin: 30 }}
        formData={formData}
        schema={schema}
        uiSchema={uiSchema}
        submitButton={_submitButton}
        cancelButton={false}
        onChange={_onChange}
        buttonPosition="center"
        {...getEvents(`${label}-form`, setLayoutConfig, setAppState, appState)}
      />
      {/* </MainContainer> */}
    </ThemeWrapper>
  );
};
