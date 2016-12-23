class DOMNodeCollection {
  constructor (nodes) {
    this.nodes = nodes;
  }

  html(html) {
    if ( html instanceof String ) {
      this.nodes.forEach((node) => {
        node.innerHTML = html;
      })
    } else {
      if (this.nodes.length > 0) {
        return this.nodes[0].innerHTML;
      }
    }
  }

  empty() {
    this.html("");
  }

  append(children) {
    if (this.nodes.length === 0) return;

    if (typeof children === "object" &&
        !(children instanceof DOMNodeCollection)) {
          children = $1(children);
    }

    if (typeof children === "string") {
      this.nodes.forEach((node) => node.innerHTML += children);
    } else if (children instanceof DomNodeCollection) {
        this.nodes.forEach((node) => {
          children.forEach((childNode) => {
            node.appendChild(childNode.cloneNode(true));
          });
        })
    }
  }


}


module.exports = DOMNodeCollection;
