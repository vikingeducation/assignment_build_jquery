/*
 cd Documents/Viking/JS/build_jq

 var z = $("h1")

 TODO
 7. go back and try to better copy jQueries functionality, some of the
 harder things like accepting an array to work with values aren't currently
 implemented

 8. test with no results for ID, Class, and Tag

 9. Allow chaining of selectors in your original jQuery function,
 e.g. jQuery("div .some-class .some-other-class"). You may use the new
 querySelector method for this.
*/

jQuery = $ = jQueryObject;

function jQueryObject(selector) {
  var collection = [];
  if (selector instanceof HTMLElement) {
    if (selector.length === undefined) {
      collection.push(selector);
      var nodes = collection;
    } else {
      collection.push(selector[0]);
      var nodes = [selector];
    }
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

  wrapper.hasClass = function(aClass) {
    var result = false;
    wrapper.each(function(element) {
      if (result === true) {
        return;
      } else if (element.classList === undefined) {
        // lack of classList means false
      } else if (element.classList.contains(aClass)) {
        result = true;
      }
    });
    return result;
  };

  wrapper.addClass = function(...theArgs) {
    theArgs.forEach(function(yourArgument) {
      wrapper.each(function(element) {
        if (element.classList === undefined) {
          // can't add classes to invalid target
        } else {
          element.classList.add(yourArgument);
        }
      });
    });
    return wrapper;
  };

  wrapper.removeClass = function(...theArgs) {
    if (theArgs.length === 0) {
      wrapper.each(function(element) {
        if (element.classList === undefined) {
          // no classes to remove
        } else {
          element.className = '';
        }
      });
    } else {
      wrapper.each(function(element) {
        if (element.classList === undefined) {
          // no classes to remove
        } else {
          theArgs.forEach(function(anArgument) {
            element.classList.remove(anArgument);
          });
        }
      });
    }
    return wrapper;
  };

  wrapper.toggleClass = function(...theArgs) {
    if (theArgs.length === 0) {
      wrapper.each(function(element) {
        if (element.classList === undefined) {
          // invalid target for toggling classes
        } else {
          var indexy = element.classList.length;
          while (indexy > -1) {
            element.classList.remove(element.classList[indexy])
            indexy--;
          }
        }
      });
    } else {
      wrapper.each(function(element) {
        if (element.classList === undefined) {
          // invalid target for toggling classes
        } else {
          theArgs.forEach(function(anArgument) {
            element.classList.toggle(anArgument);
          });
        }
      });
    }
    return wrapper;
  };

  /* https://api.jquery.com/val/ - make setter accept numbers, arrays, and
functions */
  wrapper.val = function(yourValue) {
    if (yourValue) {
      wrapper.each(function(element) {
        element.setAttribute("value", yourValue);
      });
    } else {
      return collection[0].value;
    }
    return wrapper;
  };

  /* https://api.jquery.com/css/ - accept arrays, numbers, functions, and object
of property value pairs */
  wrapper.css = function(theCss, cssValue) {
    if (cssValue) {
      wrapper.each(function(element) {
        element.style[theCss] = cssValue;
      });
    } else {
      var theStyles = window.getComputedStyle(collection[0]);
      return theStyles.getPropertyValue(theCss);
    }
    return wrapper;
  };

  // https://api.jquery.com/height/ - make setter accept numbers, and functions
  wrapper.height = function(desiredHeight) {
    if (desiredHeight) {
      wrapper.each(function(element) {
        element.style.height = desiredHeight;
      });
    } else {
      var yourStyles = window.getComputedStyle(collection[0]);
      return yourStyles.getPropertyValue("height");
    }
    return wrapper;
  };

  // https://api.jquery.com/width/ - make setter accept numbers, and functions
  wrapper.width = function(newWidth) {
    if (newWidth) {
      wrapper.each(function(element) {
        element.style.width = newWidth;
      });
    } else {
      var myStyles = window.getComputedStyle(collection[0]);
      return myStyles.getPropertyValue("width");
    }
    return wrapper;
  };

  /* https://api.jquery.com/attr/ - make setter accept strings, numbers, null,
object of property value pairs, and functions */
  wrapper.attr = function(theAttribute, attributeValue) {
    if (attributeValue) {
      wrapper.each(function(element) {
        element.setAttribute(theAttribute, attributeValue);
      });
    } else {
      return collection[0].getAttribute(theAttribute);
    }
    return wrapper;
  };

  // https://api.jquery.com/html/ - accept functions
  wrapper.html = function(htmlContents) {
    if (htmlContents) {
      wrapper.each(function(element) {
        element.textContent = htmlContents;
      });
    } else {
      return collection[0].textContent;
    }
    return wrapper;
  };

  return wrapper;
}
