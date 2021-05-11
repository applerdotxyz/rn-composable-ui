// const {defaults} = require('jest-config');
const esModules = ["react-native", "@react-native-community"].join("|");
module.exports = {
  // ...defaults,
  preset: "./node_modules/jest-expo/jest-preset.js",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|@storybook)",
  ],
  reporters: ["default"],
  modulePathIgnorePatterns: [
    // "(/__tests__/.*|(\\.|/)(preset))\\.[jt]sx?$",
    "react-native-paper",
    "@expo/vector-icons",
    "react-native-vector-icons",
  ],
  // setupFiles: ["./tests/jestSetupFile.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
