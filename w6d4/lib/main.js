const DOMNodeCollection = require("./dom_node_collection.js");

window.$l = arg => {
  switch(typeof(arg)){
    case "function":
      return registerDocReadyCallback(arg);
    case "string":
      return getNodesFromDom(arg);
    case "object":
      if(arg instanceof HTMLElement){
        return new DomNodeCollection([arg]);
      }
  }
};
