import React from "react";
import { styles } from "./styles";

export const render = (
  routes,
  label,
  idx,
  passProps,
  children,
  key,
  appState,
  layoutConfig,
  setAppState,
  setLayoutConfig
) => {
  return React.createElement(
    label &&
      appState[label]?.ui &&
      layoutConfig.componentsSet[appState[label]?.ui]
      ? layoutConfig.componentsSet[appState[label]?.ui]
      : layoutConfig.componentsSet[idx],
    {
      ...passProps,
      appState,
      routes,
      key,
      setAppState,
      ...styles,
      label,
      setLayoutConfig,
    },
    appState[label]?.children || children
  );
};

// A hash to store our routes:
var routes = {};
// An array of the current route's events:
var events = [];
// The element where the routes are rendered:
var el = null;
// Context functions shared between all controllers:
var ctx = {
  on: function (selector, evt, handler) {
    events.push([selector, evt, handler]);
  },
  refresh: function (listeners) {
    listeners.forEach(function (fn) {
      fn();
    });
  },
};
// Defines a route:
function route(path, templateId, controller) {
  if (typeof templateId === "function") {
    templateId = null;
  }
  var listeners = [];
  routes[path] = {
    onRefresh: listeners.push.bind(listeners),
  };
}
function forEachEventElement(fnName) {
  for (var i = 0, len = events.length; i < len; i++) {
    var els = el.querySelectorAll(events[i][0]);
    for (var j = 0, elsLen = els.length; j < elsLen; j++) {
      els[j][fnName].apply(els[j], events[i].slice(1));
    }
  }
}
function addEventListeners() {
  forEachEventElement("addEventListener");
}
function removeEventListeners() {
  forEachEventElement("removeEventListener");
}
function router() {
  // Remove current event listeners:
  removeEventListeners();
  // Clear events, to prepare for next render:
  events = [];
  // Current route url (getting rid of '#' in hash as well):
  var url = location.hash.slice(1) || "/";
  // Get route by url or fallback if it does not exist:
  var route = routes[url] || routes["*"];

  // url would be like `http://localhost:19006/#/leftNavHeader::Home,leftNavBody::Home,bodyContent::ActionComp,bodyContent::RandomPic,bodyFooter::ActionComp,footer::Home`

  const paintMapping = url
    .slice(1)
    .split(",")
    .map((item) => {
      const sectionToCompMappingArr = item.split("::");
      // TODO: render appropriately here
      let label = sectionToCompMappingArr[0];
      let idx = sectionToCompMappingArr[1];
      let passProps = {};
      let children = [];
      let appState = {};
      let layoutConfig = {};
      let setAppState = () => {
        /* */
      };
      let setlayoutConfig = () => {
        /* */
      };
      render(
        routes,
        label,
        idx,
        passProps,
        children,
        label,
        appState,
        layoutConfig,
        setAppState,
        setlayoutConfig
      );
      return { [sectionToCompMappingArr[0]]: sectionToCompMappingArr[1] };
    });
  console.log(paintMapping);

  // Do we have a controller:
  if (route) {
    // Listen on route refreshes:
    route.onRefresh(function () {
      removeEventListeners();
      addEventListeners();
    });
  }
}
// Listen on hash change:
window.addEventListener("hashchange", router);
// Listen on page load:
window.addEventListener("load", router);
// Expose the route register function:
window.route = route;
