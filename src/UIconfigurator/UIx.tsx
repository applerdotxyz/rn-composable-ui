import { stringify } from 'querystring';
import React, { useState } from 'react'
import { componentsSet } from "../uiConfig/index";
import config from '../uiConfig/index';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';

const Column = (props: any) => (
    <Col size={props.size} style={{ /*backgroundColor: "gray"*/ }}  >
        {props.render}
    </Col>
)


const UiX = (props : any) => {
    console.log("props in Uix : : ", props);
    
    const mapState = React.useCallback((state: any) => state, [ ]);
    const appState = useState(mapState);
    const dispatch = useDispatch();

    
    const { idx } = props;
    console.log("idx : :: : --> ", idx);
    
    const key: any = `${idx}Config`;
    console.log("Key : : : ", key);

    if(idx && config && config[key]) {
        const configuration = config[key];
        console.log("Configuration : : : --> ", configuration);

        let colSection: any = null;
        let rowSection: Array<any> = [];
        const configKeys = Object.keys(configuration);
        console.log("ConfigKey : : : ---> ", configKeys);

        configKeys.forEach((key: string, idx: number) => {
            const rowData = configuration[key];
            console.log("rowData : : : ", rowData);
            
            const colIds = Object.keys(rowData);
            console.log("colIds : : : ", colIds);
            

            colSection = colIds.map((colId: string, idxCol: number) => {
                return (
                    // changes in react-native frame
                    <Column key={idxCol} size={rowData[colId].span || 4 / (colIds.length)} render={
                        React.createElement(componentsSet[rowData[colId].name], { ...rowData[colId].props, appState, ...props, dispatch }, null)
                    } />
                );
            });
            rowSection.push(<Row  key={idx}>{colSection}</Row>);
            console.log("rowSection after push : : : ", rowSection);
            
        });

        const Layout = () => (
            <section>
                <View>{rowSection}</View>
            </section>
        );
        return (<Layout />)
    }
    return (<p>Loading ... </p>)

    
}

export default UiX;