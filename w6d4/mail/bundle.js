/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);

	const routes = {
	  inbox: Inbox,
	};

	document.addEventListener("DOMContentLoaded", function() {


	  $(".sidebar-nav").on("click", "li", handleLiClick);

	  function handleLiClick (event) {
	    let text = $(event.currentTarget).text().toLowerCase();
	    window.location.hash = text;
	    let contentNode = document.querySelector(".content");
	    let newRouter = new Router(contentNode, routes);
	    newRouter.start();
	  };

	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router {
	  constructor(node, routes) {
	    this.node = node;
	    this.routes = routes;
	  }

	  start() {
	      this.render();
	      document.addEventListener("hashchange", function() {
	      this.render();
	    });
	  }

	  render() {
	    this.node.innerHTML = "";
	    let component = this.activeRoute();
	    if (component) {
	      this.node.appendChild(component.render());
	    }
	  }

	  activeRoute() {
	    let route =  window.location.hash.slice(1);
	    return this.routes[route];
	  }
	}


	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports) {

	const Inbox = {
	  render() {
	    let newUlNode = document.createElement("ul");
	    newUlNode.className = "messages";
	    newUlNode.innerHTML = "An Inbox Message";
	    return newUlNode;
	  }
	}


	module.exports = Inbox;


/***/ }
/******/ ]);