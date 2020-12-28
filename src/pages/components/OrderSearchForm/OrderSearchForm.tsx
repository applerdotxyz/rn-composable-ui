import { Link } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Platform, StyleSheet, Dimensions } from "react-native";
import { Grid } from "react-native-easy-grid";
import { ScrollView } from "react-native-gesture-handler";
import { updateOrderViewData, updateState } from "../../../state-mgmt/actions";
import useSafeSetState from "../../../utils/useSafeState";
import { JsonForm } from "../json-form/JsonForm";


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const OrderSearchForm = (props) => {

    const initialFormSchema = {
        type: "object",
        required: ["keyName"],
        properties: {
            keyName: { type: "string" },
        },
    }

    const initialFormAction = {
        status: "FAILURE",
        businessFunctions: []
    }

    const initialAction = {
        actionKey: 0,
        actionName: "",
        endPoint: "",
        httpMethod: "",
        showButton: false,
        tabKey: 0,
    }

    const [formLayout, setformLayout] = useState(initialFormSchema);
    const [action, setAction] = useState(initialAction);
    const [loading, setLoading] = useState(true);
    const [actionType, setactionType] = useState('Search');


    useEffect(() => {
        setLoading(true);
        /**
         * Fetch Form Layout Data
         */
        const fetchFormLayoutData = async () => {
            const res = await fetch(
                'http://localhost:8080/transaction-web/v1/schema/singleformLayout',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        // TODO : REMOVE this hardcoding
                        "moduleKey": 23751,
                        "roleKey": 1,
                        "tabKey": 34601,
                        "userId": "TsdAdmin",
                        "actionName": "Search"
                    })
                }
            );
            const resJSON = await res.json();
            console.log(resJSON);
            setformLayout(resJSON.SearchCreateOrdersSchema);
        };

        /**
         * Fetch Action Data : Search
         */
        const fetchActionData = async () => {
            const res = await fetch(
                'http://localhost:8080/transaction-web/v1/schema/modulelayout',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        // TODO : REMOVE this hardcoding
                        "userId": "TsdAdmin",
                        "roleKey": 1,
                        "moduleName": "Service Orders",
                        "tabName": "CreateOrders",
                        "actionName": "Search"
                    })
                }
            );
            const resJSON = await res.json();
            console.log(resJSON);
            // TODO : NOT a optimise way to parse the json
            setAction(resJSON.businessFunctions[0].modules[0].tabs[0].actions[0]);
            setLoading(false);
        };
        fetchFormLayoutData();
        fetchActionData();
    }, []);


    // const buttonRef = useRef(null);
    console.log("FormLayout : : : ", formLayout);
    console.log("Action : : : ", action);


    // const handleClick = () => {
    //     console.log("Button Clicked");

    //     console.log(Object.keys(buttonRef.current)); // ['someExposedProperty']
    //     console.log("click in index.tsx");
    //     buttonRef.current.someExposedProperty();
    // };


    // const _formData = props._formData;

    // const [_schema, setSchema] = useSafeSetState(props._schema);


    // TODO : UISchema Part need to explore..
    const _uiSchema = props._uiSchema;

    // const initialFormState = {
    //     keyName: 'YourName'
    // }

    // const [formState, setFormstate] = useState(initialFormState);


    return (
        <View style={{
            flex: 1,
            // minHeight: Dimensions.get("window").height / 4,
            maxHeight: Dimensions.get("window").height / 2,
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                margin: 10,
            }}>Search Order Form
            </Text>
            <ScrollView
                style={{
                    flex: 1,
                    borderWidth: 0,
                    // minHeight: Dimensions.get("window").height / 4,
                    maxHeight: Dimensions.get("window").height / 2,
                }}
            >
                <Grid>
                    {/* TODO : 
                            Add Error handling in form data
                            (Backend Team Task : ) Modify the Date property with meaningful form type from payload
                            Work on some way to send data to list component below...
                                1. Save the whole payload in state and List component will be subscribe to state Redux SearchOrder Data
                                2. Explore nested navigations
                     */}
                    <JsonForm
                        schema={formLayout}
                        uiSchema={_uiSchema}
                        // _formData={_formData}
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
                            const fetchSearchList = async () => {
                                const actionEndpoint = action.endPoint;
                                const res = await fetch(
                                    `http://localhost:8080/transaction-web/${actionEndpoint}`,
                                    {
                                        method: 'POST',
                                        headers: {
                                            Accept: 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            extOrderNo: e.params.values.extOrderNo,
                                            fromDate: e.params.values.fromDate,
                                            orderKey: e.params.values.orderKey,
                                            orderName: e.params.values.orderName,
                                            orderStatus: e.params.values.orderStatus,
                                            orderType: e.params.values.orderType,
                                            toDate: e.params.values.toDate,
                                        })
                                    }
                                );
                                const resJSON = await res.json();
                                console.log(resJSON);
                                // TODO : This resJson should get reflected in List Component in Json
                            };
                            fetchSearchList();

                        }}
                    // _onChange={(e) => {
                    //   console.log("data changed");
                    // }}
                    />
                </Grid>
            </ScrollView>
        </View>
    );
};
// };
export default OrderSearchForm;
