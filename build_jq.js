/*
 cd Documents/Viking/JS/build_jq

 var test = $("#one")
*/

window.onload = function() {
  jQuery = $ = jQueryObject;

  function jQueryObject(selector) {
    var collection = [];
    if (typeof selector !== "string") {
      collection.push(selector);
      var nodes = collection;
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
          nodes = [];
          // no ID results
          break;
        case Array.isArray(nodes):
          // do nothing when passing DOM object
          break;
        case nodes.length < 2 || nodes[0] === undefined:
          collection.push(nodes);
          break;
        default:
          var indexy = 0;
          while (indexy < nodes.length) {
            collection.push(nodes[indexy]);
            indexy++;
          }
      }
    }

    var wrapper = nodes;

    wrapper.length = collection.length;

    wrapper.idx = function(index) {
      return collection[index];
    };

    return wrapper;
  }
};
