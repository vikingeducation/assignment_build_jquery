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

    wrapper.hasClass = function(string) {
      var result = false;
      wrapper.each(function(element) {
        if (result === true) {
          return;
        } else if (element.classList === undefined) {
          // lack of classList means always false
        } else if (element.classList.contains(string)) {
          result = true;
        }
      });
      return result;
    };

    wrapper.addClass = function(string) {
      wrapper.each(function(element) {
        if (element.classList === undefined) {
          // do nothing, can't add classes to invalid target
        } else {
          element.classList.add(string);
        }
      });
      return wrapper;
    };

    wrapper.removeClass = function(string) {
      wrapper.each(function(element) {
        if (element.classList === undefined) {
          // do nothing, no classes to remove
        } else {
          element.classList.remove(string);
        }
      });
      return wrapper;
    };

    wrapper.toggleClass = function(string) {
      wrapper.each(function(element) {
        if (element.classList === undefined) {
          // do nothing, no classes to toggle
        } else {
          element.classList.toggle(string);
        }
      });
      return wrapper;
    };

    return wrapper;
  }
};
