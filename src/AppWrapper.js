// Use next.js page for the mobile app
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Alternate from "./pages/Alternate";
import Test from "./pages/Test";
import Index from "./pages/index";
import First from "./pages/first";

const AppNavigator = createStackNavigator({
  first: First,
  index: Index,
  Alternate: Alternate,
  Test: Test,
});

export default createAppContainer(AppNavigator);
