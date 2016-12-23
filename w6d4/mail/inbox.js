const Inbox = {
  render() {
    let newUlNode = document.createElement("ul");
    newUlNode.className = "messages";
    newUlNode.innerHTML = "An Inbox Message";
    return newUlNode;
  }
}


module.exports = Inbox;
