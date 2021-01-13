import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// router logic below
// import { route } from "./utils/router";

// route("/", "home", function () {});
// route("/page1", "template1", function () {
//   console.log("page1");
//   // console.log(window.state);
//   this.greeting = "Hello world!";
//   this.moreText = "Bacon ipsum...";
// });
// route("/page2", "template2", function () {
//   console.log("page2");
//   this.heading = "I'm page two!";
// });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
