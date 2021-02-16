import merge from 'deepmerge';
import React, { useState, createElement } from 'react';
import { Text } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var rowStyle = {
    borderWidth: 1,
    borderColor: "red",
};
var styles = {
    container: {
        marginTop: 25,
        padding: 10,
    },
    tabName: {
        color: "white",
    },
    header: {
        fontSize: 20,
        backgroundColor: "skyblue",
        marginTop: 10,
        padding: 15,
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        backgroundColor: "coral",
    },
    subNavItem: {
        padding: 15,
    },
    topic: {
        textAlign: "center",
        fontSize: 15,
    },
};

// ******************************************************************** //
// render a grid layout as per the configuration
var GridSection = function (_a) {
    // const history = useHistory();
    var layoutConfig = _a.layoutConfig, setLayoutConfig = _a.setLayoutConfig, routes = _a.routes, getEvents = _a.getEvents;
    // pick from pre-loaded components and render properly, renders each component at column level
    var UXColumn = function (_a) {
        var _b, _c, _d, _e;
        var label = _a.label, key = _a.key, idx = _a.idx; _a.style; _a.colSize; _a.colStyle; var children = _a.children, passProps = _a.passProps, appState = _a.appState, setAppState = _a.setAppState, setLayoutConfig = _a.setLayoutConfig;
        var colSection = createElement(label && ((_b = appState[label]) === null || _b === void 0 ? void 0 : _b.ui) &&
            layoutConfig.componentsSet[(_c = appState[label]) === null || _c === void 0 ? void 0 : _c.ui]
            ? layoutConfig.componentsSet[(_d = appState[label]) === null || _d === void 0 ? void 0 : _d.ui]
            : layoutConfig.componentsSet[idx], __assign(__assign(__assign(__assign({}, passProps), { appState: appState,
            routes: routes,
            key: key,
            setAppState: setAppState }), styles), { label: label,
            setLayoutConfig: setLayoutConfig,
            getEvents: getEvents }), ((_e = appState[label]) === null || _e === void 0 ? void 0 : _e.children) || children);
        return colSection;
    };
    var linksSection = Object.keys(layoutConfig.links).map(function (path, id) {
        var _a = layoutConfig.links[path], style = _a.style, linkText = _a.linkText, linkStyle = _a.linkStyle;
        return (React.createElement(Col, { to: path, underlayColor: "#f0f4f7", style: style, key: id + "-" + path },
            React.createElement(Text, { style: linkStyle }, linkText)));
    });
    var headerSection = (React.createElement(Col, { style: __assign({}, styles.nav) }, linksSection));
    // TODO: add ability to add/remove labels and row/columns new from layout config
    var _b = useState({
        ui: {},
        children: {},
        props: {},
    }), appState = _b[0], _setAppState = _b[1];
    var setAppState = function (newAppState) {
        _setAppState(merge(appState, newAppState));
    };
    //  overall routing engine
    var UX = function (layoutConfig) {
        var _a, _b;
        // window.appState = appState;
        // window.setAppState = setAppState;
        var gridSection = function (rows, setLayoutConfig) {
            // builds the columns
            var colsSection = function (rId, cols) {
                var rowJsx = [];
                rowJsx = Object.keys(cols).map(function (cId, colNo) {
                    var _a, _b, _c, _d;
                    if (cId === "rowConfig") {
                        return null;
                    }
                    else if (cols[cId].idx) {
                        var _e = cols[cId], idx = _e.idx, label = _e.label, colSize = _e.colSize, props = _e.props, children = _e.children, colStyle = _e.colStyle;
                        var passProps = __assign(__assign(__assign({}, props), cols[cId]), { idx: idx,
                            label: label,
                            children: children,
                            colSize: colSize,
                            colStyle: colStyle,
                            appState: appState,
                            setAppState: setAppState,
                            setLayoutConfig: setLayoutConfig,
                            getEvents: getEvents });
                        // console.log(`colSize is ${colSize}`);
                        return (React.createElement(Col, { size: colSize, style: __assign({}, colStyle), key: rId + "-" + colNo },
                            React.createElement(UXColumn, __assign({}, passProps))));
                    }
                    if (cols[cId].layout) {
                        // console.log(cols[cId]?.layout.colConfig?.colSize);
                        return (React.createElement(Col, { size: ((_b = (_a = cols[cId].layout) === null || _a === void 0 ? void 0 : _a.colConfig) === null || _b === void 0 ? void 0 : _b.colSize) || 1, style: __assign(__assign({}, (((_d = (_c = cols[cId].layout) === null || _c === void 0 ? void 0 : _c.colConfig) === null || _d === void 0 ? void 0 : _d.colStyle) || {})), { borderWidth: 0, borderColor: "blue" }) },
                            React.createElement(Grid, { style: {} }, UX(cols[cId].layout))));
                    }
                });
                // console.log(`rowSize is ${rowSize}`);
                return rowJsx;
            };
            var gridJsx = [];
            if (rows && Object.keys(rows)) {
                gridJsx = Object.keys(rows).map(function (rId) {
                    // const style = rows[rId]?.rowConfig?.rowStyle || {};
                    // console.log(rows[rId].rowConfig);
                    var _a, _b, _c, _d;
                    if (rId === "colConfig") {
                        return null;
                    }
                    else {
                        // console.log(rows[rId]?.rowConfig?.rowSize);
                        return (React.createElement(Row, { size: ((_b = (_a = rows[rId]) === null || _a === void 0 ? void 0 : _a.rowConfig) === null || _b === void 0 ? void 0 : _b.rowSize) || 1, key: "" + rId, style: __assign({ borderWidth: 6, borderColor: "gray" }, (_d = (_c = rows[rId]) === null || _c === void 0 ? void 0 : _c.rowConfig) === null || _d === void 0 ? void 0 : _d.rowStyle) }, colsSection(rId, rows[rId])));
                    }
                });
                return (React.createElement(Col, { style: { borderWidth: 0, borderColor: "red" } }, gridJsx)); /// return all rows in layout
            }
            else {
                console.log("ERROR  :::: Possibly some routing label is incorrect in youir routes configuration.");
            }
        };
        return (React.createElement(Col, { size: ((_a = layoutConfig === null || layoutConfig === void 0 ? void 0 : layoutConfig.colConfig) === null || _a === void 0 ? void 0 : _a.colSize) || 1, style: __assign({}, (_b = layoutConfig === null || layoutConfig === void 0 ? void 0 : layoutConfig.colConfig) === null || _b === void 0 ? void 0 : _b.colStyle) }, gridSection(layoutConfig, setLayoutConfig)));
    };
    // console.log(layoutConfig);
    return (React.createElement(Grid, { style: { flex: 1, borderWidth: 0, borderColor: "yellow" } },
        React.createElement(Row, { style: { maxHeight: "5vh" } }, headerSection),
        React.createElement(Row, null, UX(layoutConfig === null || layoutConfig === void 0 ? void 0 : layoutConfig.layout) || {})));
};

var JSONEditor = function () { };

export { GridSection, JSONEditor, rowStyle, styles };
