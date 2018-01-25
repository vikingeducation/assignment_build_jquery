/*
 cd Documents/Viking/JS/build_jq

 var test = $("h1")

 TODO go back and try to better copy jQueries functionality, some of the
 harder things like accepting an array to work with values aren't currently
 implemented, also improve handling of arguments that aren't provided to
 functions/their handling in if statements, in addition make them unique, and
 make sure what every function returns is defined correctly
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
          // can't add classes to invalid target
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
          // invalid target for toggling classes
        } else {
          element.classList.toggle(string);
        }
      });
      return wrapper;
    };

    wrapper.val = function(string = null) {
      if (string === null) {
        return collection[0].value;
      } else {
        wrapper.each(function(element) {
          element.setAttribute("value", string);
        });
      }
      return wrapper;
    }

    wrapper.css = function(string, value = null) {
      if (value === null) {
        var styles = window.getComputedStyle(collection[0]);
        return styles.getPropertyValue(string);
      } else {
        wrapper.each(function(element) {
          element.style[string] = value;
        });
      }
      return wrapper;
    }

    wrapper.height = function(string) {
      if (string) {
        wrapper.each(function(element) {
          element.style.height = string;
        });
      } else {
        var styles = window.getComputedStyle(collection[0]);
        return styles.getPropertyValue("height");
      }
      return wrapper;
    }

    wrapper.width = function(string) {
      if (string) {
        wrapper.each(function(element) {
          element.style.width = string;
        });
      } else {
        var styles = window.getComputedStyle(collection[0]);
        return styles.getPropertyValue("width");
      }
      return wrapper;
    }

    // https://api.jquery.com/attr/

    wrapper.attr = function(string, value) {
      if (value) {
        wrapper.each(function(element) {
          element.setAttribute(string, value);
        });
      } else {
        return collection[0].getAttribute(string);
      }
      return wrapper;
    }

    // https://api.jquery.com/html/

    return wrapper;
  }
};
