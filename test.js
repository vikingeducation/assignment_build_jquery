
window.onload = function() {
  jQuery = $ = jQueryWrapper;

/* the key is this.whatever - need to base this approach off of saving the
whole function into a variable, and by default during that initial action
returning the search result */

  function jQueryWrapper(selector) {
    return new jQueryObject(selector);
  }

  function jQueryObject(selector) {
    var collection = [];
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
          // no results
        break;
        case nodes[0] === undefined && nodes.length === 0:
          // empty nodelists
        break;
        case nodes.length === 1:
          collection.push(nodes[0]);
          // nodelists with 1 item
        break;
        default:
          collection.push(nodes);
      }
      return collection[0];
    }

    console.log("fish");

    this.length = collection.length;

  }



































};
