/*
 cd Documents/Viking/JS/build_jq

 var test = $("h1")
*/

window.onload = function() {
  jQuery = $ = jQueryObject;

  function jQueryObject(selector) {
    var collection = [];
    if (typeof selector === "object") {
      collection.push(selector);
      var nodes = collection;
    } else if (typeof selector === "string") {
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
    } else {
      return "Only strings or single DOM objects are accepted";
    }

    switch (true) {
      case nodes === null:
        nodes = [];
        // no ID results
        break;
      case nodes[0] === undefined:
        collection.push(nodes);
        // for IDs
        break;
      case Array.isArray(nodes):
        // do nothing when passing DOM object
        break;
      default:
        var indexy = 0;
        while (indexy < nodes.length) {
          collection.push(nodes[indexy]);
          indexy++;
        }
    }

    var wrapper = nodes;

    wrapper.length = collection.length;

    wrapper.idx = function(index) {
      return collection[index];
    };

    wrapper.each = function(yourFunction) {
      var indexy = 0;
      while (indexy < collection.length) {
        yourFunction(collection[indexy], indexy);
        indexy++;
      }
    };

    wrapper.hasClass = function(yourClass) {
      var result = false;
      wrapper.each(function(element) {
        if (result === true) {
          return;
        } else if (element.classList === undefined) {
          // lack of classList means always false
        } else if (element.classList.contains(yourClass)) {
          result = true;
        }
      });
      return result;
    };

    wrapper.addClass = function(desiredClass) {
      wrapper.each(function(element) {
        if (element.classList === undefined) {
          // do nothing, can't add classes to invalid target
        } else {
          element.classList.add(desiredClass);
        }
      });
      return wrapper;
    };

    /*
    use the same principles as the two methods above with
    https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    for
    https://api.jquery.com/removeClass/
    and
    https://api.jquery.com/toggleClass/
    */

    return wrapper;
  }
};
