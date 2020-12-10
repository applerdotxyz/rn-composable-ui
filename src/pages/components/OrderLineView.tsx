import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text, Platform, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { updateState } from "../../state-mgmt/actions";
import useSafeSetState from "../../utils/useSafeState";
import { JsonForm } from "../components/json-form/JsonForm";
import { MainContainer, UIProvider } from "react-native-web-ui-components";
import { createBrowserHistory } from "history";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const OrderLineView = (props) => {
    // form field values
    // const _formData = {
    //     firstName: "Raj",
    // };

    const _formData = props._formData;

    // const [_schema, setSchema] = useSafeSetState({
    //     type: "object",
    //     required: [
    //         "firstName",
    //     ],
    //     properties: {
    //         firstName: { type: "string" },
    //     },
    // });

    const [_schema, setSchema] = useSafeSetState(props._schema);

    // // form schema
    // const _uiSchema = {
    //     submitButton: false,
    // };

    const _uiSchema = props._uiSchema ;

    return (
        <ScrollView
            style={{
                flex: 1,
                borderWidth: 0,
                minHeight: Dimensions.get("window").height - 85,
            }}
        >
            {/* TODO : Remove before final demo */}
            {/* <Text>
                {JSON.stringify(props)}
            </Text> */}
            <Text accessibilityRole="header" style={{ alignSelf: "center" }}>
                Current User is :: {props.route.params.state.user.lastEmail}
            </Text>
            {/* <ConnectedForm controller="person" action="get" /> */}
            {/* <ScrollView>  */}
            {/* Use Grid */}
            <JsonForm
                schema={_schema}
                uiSchema={_uiSchema}
                _formData={_formData}
                // _onBeforeSubmit={(e) => {
                //   console.log("*** _onBeforeSubmit ***");
                //   console.log(e);
                // }}
                // _onSubmit={(e) => {
                //   console.log("*** _onSubmit ***");
                //   console.log(e);
                // }}
                // _onError={(e) => {
                //   console.log("*** _onError ***");
                //   console.log(e);
                // }}
                _onSuccess={(e) => {
                    props.route.params.dispatch(updateState());
                    props.navigation.navigate("First");
                }}
            // _onChange={(e) => {
            //   console.log("data changed");
            // }}
            />
            {/* </ScrollView> */}

            {/* <Link
        style={{
          backgroundColor: "blue",
          width: 50,
          height: 50,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
        to="/First"
      >
        Go
      </Link> */}
        </ScrollView>
    );
};
// };
export default OrderLineView;
