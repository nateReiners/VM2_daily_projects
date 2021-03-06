const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = (arg) => {
  if (arg instanceof HTMLElement)) {
    return DOMNodeCollection([arg]);
  } else {
    return DOMNodeCollection(arg);
  }
};
