const cache = {};
let tmpl;
// Simple JavaScript Templating
// John Resig - https://johnresig.com/ - MIT Licensed
(function () {
  const cache = {};

  tmpl = function (str: string, data: undefined) {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    const fn = !/\W/.test(str)
      ? (cache[str] =
          cache[str] || tmpl(document.getElementById(str).innerHTML))
      : // Generate a reusable function that will serve as a template
        // generator (and which will be cached).
        new Function(
          "obj",
          "var p=[],print=function(){p.push.apply(p,arguments);};" +
            // Introduce the data as local variables using with(){}
            "with(obj){p.push('" +
            // Convert the template into pure JavaScript
            str
              .replace(/[\r\t\n]/g, " ")
              .split("<%")
              .join("\t")
              .replace(/((^|%>)[^\t]*)'/g, "$1\r")
              .replace(/\t=(.*?)%>/g, "',$1,'")
              .split("\t")
              .join("');")
              .split("%>")
              .join("p.push('")
              .split("\r")
              .join("\\'") +
            "');}return p.join('');"
        );

    // Provide some basic currying to the user
    return data ? fn(data) : fn;
  };
})();

const routes: any = {};
//
export function route({
  path,
  templateId,
  controller,
}: {
  path: string | number;
  templateId: any;
  controller: any;
}) {
  routes[path] = { templateId: templateId, controller: controller };
}
let el: HTMLElement | null = null;
function router() {
  // Lazy load view element:
  el = el || document.getElementById("root");
  // Current route url (getting rid of '#' in hash as well):
  const url = location.hash.slice(1) || "/";
  // Get route by url:
  const route = routes[url];
  // Do we have both a view and a route?
  if (el && route.controller) {
    // Render route template with John Resig's template engine:
    el.innerHTML = tmpl(route.templateId, new route.controller());
  }
}
// Listen on hash change:
window.addEventListener("hashchange", router);
// Listen on page load:
window.addEventListener("load", router);
