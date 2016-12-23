document.addEventListener("DOMContentLoaded", function() {


  $(".sidebar-nav").on("click", "li", handleLiClick);

  
  function handleLiClick (event) {
    let text = $(event.currentTarget).text();
    alert(text);
  }
  // bindDelegate("ul.sidebar-nav", "click", "li", handleLiClick(this));

  // function bindDelegate(rootSelector, eventName, subSelector, handler) {
  //   $(rootSelector).on(eventName, function(e) {
  //     alert("hello");
  //   });
  // }

});
