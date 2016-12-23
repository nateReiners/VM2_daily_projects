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
