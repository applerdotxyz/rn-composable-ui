import { useNavigation } from "@react-navigation/native";
import { createBrowserHistory } from "history";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import Form from "react-native-web-jsonschema-form";
import { MainContainer, UIProvider } from "react-native-web-ui-components";
import useSafeSetState from "../../../utils/useSafeState";

export const JsonForm = ({
  onClose,
  onBeforeSubmit,
  onAfterSuccess,
  schema,
  uiSchema,
  formData,
  onSuccess,
  onError,
  onChange,
  ...props
}) => {
  const [loading, setLoading] = useSafeSetState(false);
  const [exception, setException] = useSafeSetState(null);
  const [message, setMessage] = useSafeSetState(null);
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
