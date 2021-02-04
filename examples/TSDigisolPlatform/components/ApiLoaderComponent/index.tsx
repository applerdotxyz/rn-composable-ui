/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  businessFunctionHandler,
  updateActionSelection,
  updateBuisnessFunctionSelection,
  updateModuleSelection,
  updateSchema,
  updateTabSelection,
} from "../../../../src/state-management/actions";

export const ApiLoaderComponent = () => {
  const [loader, setLoader] = useState(false);
  const state = useSelector((s: any) => s);
  const dispatch = useDispatch((s: any) => s);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      dispatch(businessFunctionHandler());
      // TODO : ADD default config for screen <<< SOME BETTER WAY TO DO This
      // dispatch(updateBuisnessFunctionSelection("Foundation", "1000"));
      // dispatch(updateActionSelection("Search", "4003"));
      // dispatch(updateModuleSelection("Catalog", "2001"));
      // dispatch(updateTabSelection("Catalog", "3000"));
      setLoader(false);
    };
    fetchData();
  }, []);

  if (loader)
    return (
      <View
        style={{
          flex: 1,
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 10,
        }}
      >
        <ActivityIndicator />
      </View>
    );

  return <></>;
};
