
window.onload = function() {
  jQuery = $ = jQueryObject;

  function jQueryObject(selector) {
    var wrapper = [];
    wrapper.length = 45;
    /*var wrapper = {};

    if (typeof selector !== "string") {

      return [selector];

    } else {

      switch (selector[0]) {
        case ".":
          var nodes = document.getElementsByClassName(selector.substr(1));
        break;
        case "#":
          var nodes = document.getElementById(selector.substr(1));
        break;
        default:
          var nodes = document.querySelectorAll(selector);
          // for html tags, also works for tag.class
      }

        switch (true) {
          case nodes === null:
            wrapper.collection = [];
            // no results
          break;
          case nodes[0] === undefined && nodes.length === 0:
            wrapper.collection = [];
            // empty nodelists
          break;
          case nodes.length === 1:
            wrapper.collection = nodes[0];
            // nodelists with 1 item
          break;
          default:
            wrapper.collection = nodes;
        }
    }

    wrapper.length = wrapper.collection.length;*/



















    return wrapper;
  }

};
