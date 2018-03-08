/*
 To use build_jq.js remember to add the script using defer like so:
  <script src="build_jq.js" defer></script>

 The majority of arguments for the build_jq.js script have to be in string form
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
    switch (true) {
      case selector[0] === ".":
        var nodes = document.getElementsByClassName(selector.substr(1));
        break;
      case selector[0] === "#":
        var nodes = document.getElementById(selector.substr(1));
        break;
      default:
        var nodes = document.querySelectorAll(selector);
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
    var indexy = collection.length;
    while (indexy > -1) {
      yourFunction(collection[indexy], indexy);
      indexy--;
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
          element.className = "";
        }
      });
    } else {
      wrapper.each(function(element) {
        if (element.classList === undefined) {
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
            element.classList.remove(element.classList[indexy]);
            indexy--;
          }
        }
      });
    } else {
      wrapper.each(function(element) {
        if (element.classList === undefined) {
        } else {
          theArgs.forEach(function(anArgument) {
            element.classList.toggle(anArgument);
          });
        }
      });
    }
    return wrapper;
  };

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
