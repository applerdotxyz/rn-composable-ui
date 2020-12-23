import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    LayoutAnimation,
    StyleSheet,
    View,
    ScrollView,
    UIManager,
    Platform,
    ActivityIndicator,
} from 'react-native';
import ExpandableComponent from './ExpandableComponent';

const NavigationComponent = () => {

    const [loading, setLoading] = useState(true);
    const [listDataSource, setListDataSource] = useState([]);
    // TODO : Add into API call 1. in mocky 2. with backendAPI
    // const [listDataSource, setListDataSource] = useState(CONTENT1);
    const [multiSelect, setMultiSelect] = useState(false);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
          const res = await fetch(
              `https://run.mocky.io/v3/9f560c86-b261-40a5-a225-b5bad469d7d0`
          );
          const resJSON = await res.json();
          console.log(resJSON);
          
          setListDataSource(resJSON.businessFunctions);

          setLoading(false);
        };
        fetchData();
      }, []);
    

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiSelect) {
            // If multiple select is enabled
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            // If single select is enabled
            array.map((value, placeindex) =>
                placeindex === index
                    ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
                    : (array[placeindex]['isExpanded'] = false)
            );
        }
        setListDataSource(array);
    };

    if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {/* TODO : Can I give control to User to have a multiple select on or off */}
                {/* <View style={{ flexDirection: 'row', padding: 10 }}>
          <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              {multiSelect
                ? 'Enable Single \n Expand'
                : 'Enalble Multiple \n Expand'}
            </Text>
          </TouchableOpacity>
        </View> */}
                <ScrollView>
                    {listDataSource.map((item, key) => (
                        <ExpandableComponent
                            key={item.functionName}
                            onClickFunction={() => {
                                updateLayout(key);
                            }}
                            item={item}
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default NavigationComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5cabc5'
    },
    //   titleText: {
    //     flex: 1,
    //     fontSize: 22,
    //     fontWeight: 'bold',
    //   },
    header: {
        backgroundColor: '#F5FCFF',
        padding: 20,
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
    },
    separator: {
        height: 0.5,
        backgroundColor: '#808080',
        width: '95%',
        marginLeft: 16,
        marginRight: 16,
    },
    text: {
        fontSize: 16,
        color: '#606070',
        padding: 10,
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
    },
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
    {
        isExpanded: false,
        category_name: 'Item 1',
        subcategory: [
            { id: 1, val: 'Sub Cat 1' },
            { id: 3, val: 'Sub Cat 3' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 2',
        subcategory: [
            { id: 4, val: 'Sub Cat 4' },
            { id: 5, val: 'Sub Cat 5' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 3',
        subcategory: [
            { id: 7, val: 'Sub Cat 7' },
            { id: 9, val: 'Sub Cat 9' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 4',
        subcategory: [
            { id: 10, val: 'Sub Cat 10' },
            { id: 12, val: 'Sub Cat 2' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 5',
        subcategory: [
            { id: 13, val: 'Sub Cat 13' },
            { id: 15, val: 'Sub Cat 5' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 6',
        subcategory: [
            { id: 17, val: 'Sub Cat 17' },
            { id: 18, val: 'Sub Cat 8' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 7',
        subcategory: [{ id: 20, val: 'Sub Cat 20' }],
    },
    {
        isExpanded: false,
        category_name: 'Item 8',
        subcategory: [{ id: 22, val: 'Sub Cat 22' }],
    },
    {
        isExpanded: false,
        category_name: 'Item 9',
        subcategory: [
            { id: 26, val: 'Sub Cat 26' },
            { id: 27, val: 'Sub Cat 7' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 10',
        subcategory: [
            { id: 28, val: 'Sub Cat 28' },
            { id: 30, val: 'Sub Cat 0' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 11',
        subcategory: [{ id: 31, val: 'Sub Cat 31' }],
    },
    {
        isExpanded: false,
        category_name: 'Item 12',
        subcategory: [{ id: 34, val: 'Sub Cat 34' }],
    },
    {
        isExpanded: false,
        category_name: 'Item 13',
        subcategory: [
            { id: 38, val: 'Sub Cat 38' },
            { id: 39, val: 'Sub Cat 9' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 14',
        subcategory: [
            { id: 40, val: 'Sub Cat 40' },
            { id: 42, val: 'Sub Cat 2' },
        ],
    },
    {
        isExpanded: false,
        category_name: 'Item 15',
        subcategory: [
            { id: 43, val: 'Sub Cat 43' },
            { id: 44, val: 'Sub Cat 44' },
        ],
    },
];

// Mocky API :- https://run.mocky.io/v3/c7dbb481-bdd6-4d9b-926e-7891fe4627f7
const CONTENT1 = [
    {
        isExpanded: false,
        functionKey: 1000,
        functionName: 'Sales',
        modules: [
            {
                "moduleKey": 2001,
                "moduleName": 'OrderConfig',
                "moduleDisplayName": 'Order Dashboard',
                "link": '/OrderConfig',
                "tabs": [
                    {
                        "tabKey": 3001,
                        "tabName": 'CreateOrders',
                        "tabDisplayName": 'Create Orders',
                        "moduleKey": 2001,
                        "action": [
                            {
                                "actionKey": 22081,
                                "actionName": "Search",
                                "endPoint": "v1/serviceorder/list",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 34601
                            },
                            {
                                "actionKey": 22082,
                                "actionName": "List",
                                "endPoint": "v1/serviceorder/list",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 34601
                            },
                            {
                                "actionKey": 22083,
                                "actionName": "View",
                                "endPoint": "v1/serviceorder/{orderKey}",
                                "httpMethod": "GET",
                                "showButton": true,
                                "tabKey": 34601
                            },
                            {
                                "actionKey": 22084,
                                "actionName": "Edit",
                                "endPoint": "v1/serviceorder/{orderKey}",
                                "httpMethod": "PUT",
                                "showButton": true,
                                "tabKey": 34601
                            },
                            {
                                "actionKey": 21681,
                                "actionName": "Create",
                                "endPoint": "v1/serviceorder/",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 34601
                            }
                        ]
                    },
                    {
                        "tabKey": 3001,
                        "tabName": 'BookOrders',
                        "tabDisplayName": 'Book Orders',
                        "moduleKey": 2001,
                        "action": [
                            {
                                "actionKey": 100581,
                                "actionName": "Create",
                                "endPoint": "v1/serviceorder/",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117701
                            },
                            {
                                "actionKey": 100583,
                                "actionName": "Search",
                                "endPoint": "v1/serviceorder/list",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117701
                            },
                            {
                                "actionKey": 100582,
                                "actionName": "Edit",
                                "endPoint": "v1/serviceorder/{orderKey}",
                                "httpMethod": "PUT",
                                "showButton": true,
                                "tabKey": 117701
                            },
                            {
                                "actionKey": 100585,
                                "actionName": "View",
                                "endPoint": "v1/serviceorder/{orderKey}",
                                "httpMethod": "GET",
                                "showButton": true,
                                "tabKey": 117701
                            },
                            {
                                "actionKey": 100584,
                                "actionName": "List",
                                "endPoint": "v1/serviceorder/list",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117701
                            }
                        ]
                    },
                    {
                        "tabKey": 117703,
                        "tabName": "AllocateOrders",
                        "tabDisplayName": "Allocate ORDERS",
                        "moduleKey": 23751,
                        "actions": [
                            {
                                "actionKey": 100591,
                                "actionName": "Edit",
                                "endPoint": "v1/serviceorder/{orderKey}",
                                "httpMethod": "PUT",
                                "showButton": true,
                                "tabKey": 117703
                            },
                            {
                                "actionKey": 100593,
                                "actionName": "Create",
                                "endPoint": "v1/serviceorder/",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117703
                            },
                            {
                                "actionKey": 100592,
                                "actionName": "View",
                                "endPoint": "v1/serviceorder/{orderKey}",
                                "httpMethod": "GET",
                                "showButton": true,
                                "tabKey": 117703
                            },
                            {
                                "actionKey": 100595,
                                "actionName": "Search",
                                "endPoint": "v1/serviceorder/list",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117703
                            },
                            {
                                "actionKey": 100594,
                                "actionName": "List",
                                "endPoint": "v1/serviceorder/list",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117703
                            }
                        ]
                    },
                    {
                        "tabKey": 117702,
                        "tabName": "ReserveOrders",
                        "tabDisplayName": "Reserve Orders",
                        "moduleKey": 23751,
                        "actions": [
                            {
                                "actionKey": 100587,
                                "actionName": "List",
                                "endPoint": "v1/serviceorder/list",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117702
                            },
                            {
                                "actionKey": 100586,
                                "actionName": "View",
                                "endPoint": "v1/serviceorder/{orderKey}",
                                "httpMethod": "GET",
                                "showButton": true,
                                "tabKey": 117702
                            },
                            {
                                "actionKey": 100589,
                                "actionName": "Create",
                                "endPoint": "v1/serviceorder/",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117702
                            },
                            {
                                "actionKey": 100588,
                                "actionName": "Search",
                                "endPoint": "v1/serviceorder/list",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117702
                            },
                            {
                                "actionKey": 100590,
                                "actionName": "Edit",
                                "endPoint": "v1/serviceorder/{orderKey}",
                                "httpMethod": "PUT",
                                "showButton": true,
                                "tabKey": 117702
                            }
                        ]
                    },
                    {
                        "tabKey": 117704,
                        "tabName": "CompleteOrders",
                        "tabDisplayName": "Complete Orders",
                        "moduleKey": 23751,
                        "actions": [
                            {
                                "actionKey": 100597,
                                "actionName": "List",
                                "endPoint": "v1/serviceorder/list",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117704
                            },
                            {
                                "actionKey": 100596,
                                "actionName": "Search",
                                "endPoint": "v1/serviceorder/list",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117704
                            },
                            {
                                "actionKey": 100599,
                                "actionName": "View",
                                "endPoint": "v1/serviceorder/{orderKey}",
                                "httpMethod": "GET",
                                "showButton": true,
                                "tabKey": 117704
                            },
                            {
                                "actionKey": 100598,
                                "actionName": "Edit",
                                "endPoint": "v1/serviceorder/{orderKey}",
                                "httpMethod": "PUT",
                                "showButton": true,
                                "tabKey": 117704
                            },
                            {
                                "actionKey": 100600,
                                "actionName": "Create",
                                "endPoint": "v1/serviceorder/",
                                "httpMethod": "POST",
                                "showButton": true,
                                "tabKey": 117704
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
