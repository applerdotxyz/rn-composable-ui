import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// import { useRouting } from "expo-next-react-navigation";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const NavigationComponent = () => {
    const { goBack } = useNavigation();
    return (
        <View style={styles.container}>
            <Text accessibilityRole="header" style={styles.text}>
                NavigationComponent
      </Text>
        <View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
        // borderWidth: 1
    },
    text: {
        alignItems: "center",
        fontSize: 24,
        color: "red",
        // marginBottom: 24,
    },
    link: {
        color: "blue",
    },
});
// export default Alternate;
