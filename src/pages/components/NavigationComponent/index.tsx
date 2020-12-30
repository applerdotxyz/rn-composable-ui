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

import {
    Switch,
    useRouteMatch,
    useParams,
    useLocation,
    useHistory, NativeRouter as Router, Route, Link
} from "react-router-native";


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
                //   `https://run.mocky.io/v3/9f560c86-b261-40a5-a225-b5bad469d7d0`,
                'http://localhost:8080/transaction-web/v1/schema/',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        // TODO : REMOVE this hardcoding
                        userId: 'TsdAdmin',
                        roleKey: '1'
                    })
                }
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
        <Router>
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
        </Router>
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

// Mocky API :- https://run.mocky.io/v3/c7dbb481-bdd6-4d9b-926e-7891fe4627f7
// TODO : Think on link property.. in JSON and make needful change

