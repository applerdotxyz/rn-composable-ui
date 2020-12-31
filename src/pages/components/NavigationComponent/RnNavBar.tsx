// TODO : MADE for desmostration in 2nd level route
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
    Text,
    Dimensions,
    Button,
} from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

import {
    Switch,
    useRouteMatch,
    useParams,
    useLocation,
    useHistory, NativeRouter as Router, Route, Link
} from "react-router-native";


import ExpandableComponent from './RnExpandableComponnent';

const Home = () => <Text style={styles.header}>Default First Level Route 1 to be show</Text>;



function RenderFirstLevelRoutingComponent({ routes }) {

    const history = useHistory();

    return (
        <View>
            <View style={styles.nav}>
                <Row>

                    <View style={{
                        flex: 1,
                        borderWidth: 2
                    }}>
                        <Text style={{
                            margin: 10
                        }}>
                            First Level of Route 2 :-
                    </Text>
                        <View style={{
                            marginLeft: 200,
                            marginRight: 200,
                            marginBottom: 50,
                        }}>
                            <Button title="Click here to View the Second Level Route Below" onPress={() => {
                                console.log("First Row Button Clicked");
                                history.push('/demo_route2/list')
                            }} />
                        </View>
                    </View>
                </Row>
            </View>

            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </View>
    );
}

function RenderSecondLevelRoutingComponent(props) {
    return (
        <View>
            <Row>
                <View style={{
                    margin: 10,
                    borderWidth: 2
                }} >
                    <Text>
                        Got 2nd Level Route 2
                    </Text>
                </View>
            </Row>
        </View>
    );
}

// JSON ROUTES DEFINED
const routes = [
    // {
    //     path: "/",
    //     component: Home
    // },
    {
        path: "/demo_route2",
        component: RenderFirstLevelRoutingComponent,
        routes: [
            {
                path: "/demo_route2/list",
                component: RenderSecondLevelRoutingComponent
            },
            // {
            //     path: "/tacos/cart",
            //     component: Cart
            // }
        ]
    }
];

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}


const data = {
    status: "SUCCESS",
    NavHeader: [
        {
            "isExpanded": false,
            "functionName": "Nav Header",
            "modules": [
                {
                    "moduleDisplayName": "Module 1",
                    "link": "/demo_route2"
                }
            ]
        }
    ]
}

const RnNavBar = () => {

    // const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [listDataSource, setListDataSource] = useState([]);
    const [multiSelect, setMultiSelect] = useState(false);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {

            setListDataSource(data.NavHeader);
            setLoading(false);
        };
        fetchData();
    }, []);


    // CUSTOM CONFIG FOR EXPANDABLLE COMOPENT
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
            <SafeAreaView style={{
                flex: 1, minHeight: Dimensions.get("window").height,
            }}>
                <View style={styles.container}>
                    <Grid>
                        <Row>
                            <Col size={1} style={{ backgroundColor: '#5cabc5' }}>
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
                            </Col>
                            <Col size={3}>
                                <Route exact path="/" component={Home} />
                                {routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}

                            </Col>
                        </Row>
                    </Grid>
                </View>
            </SafeAreaView>
        </Router >
    );
};

export default RnNavBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    nav: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    subHeader: {
        fontSize: 15
    },
});

