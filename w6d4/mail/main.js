const Router = require("./router.js");
const Inbox = require("./inbox.js");

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
