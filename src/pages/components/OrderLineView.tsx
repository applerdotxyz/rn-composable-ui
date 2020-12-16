import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Platform, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { updateOrderViewData, updateState } from "../../state-mgmt/actions";
import useSafeSetState from "../../utils/useSafeState";
import { JsonForm } from "../components/json-form/JsonForm";
import { MainContainer, UIProvider } from "react-native-web-ui-components";
import { createBrowserHistory } from "history";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const OrderLineView = (props) => {
    const _formData = props._formData;

    const [_schema, setSchema] = useSafeSetState(props._schema);


    const _uiSchema = props._uiSchema;

    const initialFormState = {
        keyName : 'YourName'
    }

    const [formState, setFormState] = useState(initialFormState)

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
                Current User is :: {JSON.stringify(props.route.params.state.user)}
            </Text>
            <Text accessibilityRole="header" style={{ alignSelf: "center" }}>
                Order View Update is :: {JSON.stringify(props.route.params.state.orderViewUpdate)}
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
                _onSubmit={(e) => {
                    console.log("*** _onSubmit ***");
                    console.log(e);
                    
                }}
                // _onError={(e) => {
                //   console.log("*** _onError ***");
                //   console.log(e);
                // }}
                _onSuccess={(e) => {
                    console.log("Form Data after updation : :: ", e.params.values);
                    props.route.params.dispatch(updateOrderViewData(e.params.values.keyName));
                    console.log("State Updated from updateOrderViewUpdate action ");
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
