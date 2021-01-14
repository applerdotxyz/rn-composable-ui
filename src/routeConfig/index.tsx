/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Route } from "react-router-native";
import RenderFirstLevelRoutingComponent from "../pages/components/RenderComponent/RenderFirstLevelRoutingComponent";
import RenderSecondLevelRoutingComponent from "../pages/components/RenderComponent/RenderSecondLevelRoutingComponent";
import UiX from "../UIconfigurator/UIx";
import { useNavigation } from "@react-navigation/native";

export function RouteWithSubRoutes(route) {
  const navigation = useNavigation();
  console.log("Routes : : : : ", route.component.name);
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        // <route.component {...props} routes={route.routes} />
        <UiX
          idx={route.component.name}
          {...props}
          routes={route.routes}
          navigation={navigation}
        />
      )}
    />
  );
}

export const routes = [
  {
    path: "/demo_route2",
    component: RenderFirstLevelRoutingComponent,
    key: "RenderFirstLevelRoutingComponent",
    routes: [
      {
        path: "/demo_route2/list",
        component: RenderSecondLevelRoutingComponent,
        key: "RenderSecondLevelRoutingComponent",
      },
    ],
  },
];
