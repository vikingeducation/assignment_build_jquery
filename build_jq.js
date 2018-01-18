
/*
 cd Documents/Viking/JS/build_jq

 test = $("h4")
*/

window.onload = function() {
  jQuery = $ = jQueryObject;

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
            nodes = [];
            // no ID results
          break;
          case nodes.length < 2:
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
      if (collection.length < 2 && index === 0) {
        return nodes;
      } else {
        return collection[index]
      }
    }





















    return nodes;
    //return wrapper;
  }
};
