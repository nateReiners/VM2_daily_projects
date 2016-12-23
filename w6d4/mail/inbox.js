const MessageStore = require("./message_store.js");

const Inbox = {
  render() {
    let newUlNode = document.createElement("ul");
    newUlNode.className = "messages";
    MessageStore.getInboxMessages().forEach((message) => {
      newUlNode.innerHTML = this.renderMessage(message);
    })

    return newUlNode;
  }
}


module.exports = Inbox;
