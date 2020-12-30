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

import OrderSearchForm from '../OrderSearchForm/OrderSearchForm';
import { OrderSearchList } from '../OrderSearchList';


import ExpandableComponent from './EC';

const Home = () => <Text style={styles.header}>Default route to be show</Text>;



function RenderSearchOrderForm({ routes }) {
    return (
        <View>
            <View style={styles.nav}>
                <Row>
                    <OrderSearchForm />
                </Row>
                {/* <Link to="/tacos/bus" style={styles.navItem} underlayColor="#f0f4f7">
                    <Text>Submit for Order Search to List Search</Text>
                </Link> */}
                {/* <Link to="/tacos/cart" style={styles.navItem} underlayColor="#f0f4f7">
                    <Text>Cart</Text>
                </Link> */}
            </View>

            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </View>
    );
}

function RenderSearchOrderList(props) {
    return (
        <View>
            <Row>
                <OrderSearchList props={props} />
            </Row>
        </View>
    );
}

// function Cart() {
//     return (
//         <View>
//             <Row>
//                 <Text style={styles.subHeader}>Cart</Text>
//             </Row>
//         </View>
//     );
// }

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/search-order",
        component: RenderSearchOrderForm,
        routes: [
            {
                path: "/search-order/list",
                component: RenderSearchOrderList
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


const NavBar = () => {

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
            const res = await fetch(
                // `https://run.mocky.io/v3/9f560c86-b261-40a5-a225-b5bad469d7d0`,
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

export default NavBar;

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

// Mocky API :- https://run.mocky.io/v3/c7dbb481-bdd6-4d9b-926e-7891fe4627f7
// TODO : Think on link property.. in JSON and make needful change

