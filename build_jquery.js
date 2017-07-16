var jQuery = function(arg) {

  // ----------------------------------------------------------------------
  // Helpers
  // ----------------------------------------------------------------------

  var each = function(arr, f) {
    for (var i = 0; i < arr.length; i++) {
      f(arr[i]);
    }
  };

  var copy = function(arr) {
    acc = [];
    each(arr, function(item){ acc.push(item); });
    return acc;
  }

  var hasClass = function(elt, clsName) {
    if (elt.className.includes(clsName))
      return true;
    else
      return false;
  };

  var addClass = function(elt, clsName) {
    if (!elt.className) {
      // if the elt has no class yet we just set it
      elt.className = clsName;
    } else {
      // if `clsName` is not present, we append it
      // otherwise if the elt already possess the class we do nothing
      if (!elt.className.includes(clsName))
        elt.className += " " + clsName;
    }
    return elt;
  };

  var removeClass = function(elt, clsName) {
    var re = new RegExp(clsName);
    elt.className = elt.className.replace(re, "").trim();
    return elt
  };

  var toggleClass = function(elt, clsName) {
    // if the elt has the class we remove it
    if (hasClass(elt, clsName))
      removeClass(elt, clsName);
    // if not, we add it
    else
      addClass(elt, clsName);
    return elt;
  }

  // ----------------------------------------------------------------------
  // Create jQueryObj
  // ----------------------------------------------------------------------

  var jQueryObj = {
    coll: [],
    get: function(i) {
      return this.coll[i];
    },
    hasClass: function(clsName) {
      // Determine whether any of the matched elements are assigned
      // the given class
      for (var i = 0; i < this.coll.length; i++) {
        // loop trough the elts and check if any have the class
        if (hasClass(this.coll[i], clsName))
          return true;
      }
      return false;
    },
    addClass: function(clsName) {
      // Adds the specified class(es) to each element in the set of
      // matched elements.
      each(this.coll, function(elt) {
        addClass(elt, clsName);
      });
      return jQueryObj;
    },
    removeClass: function(clsNames) {
      // Remove a single class, multiple classes, or all classes from each
      // element in the set of matched elements.
      each(this.coll, function(elt) {
        each(clsNames, function(clsName) {
          removeClass(elt, clsName);
        });
      });
      return jQueryObj;
    },
    toggleClass: function(clsName) {
      // Add or remove one or more classes from each element in the set of
      // matched elements, depending on either the class's presence or the
      // value of the state argument.
      each(this.coll, function(elt) {
        toggleClass(elt, clsName);
      });
      return jQueryObj;
    },
    val: function(value) {
      // Set the value of each element in the set of matched elements, if
      // value is given
      // Else, get the current value of the first element in the set of matched
      // elements.
      if (value) {
        each(this.coll, function(elt) {
          elt.innerHTML = value;
        });
        return jQueryObj;
      } else {
        return this.get(0)
      }
      return value ? (this.get(0) = value) : this.get(0)
    },
    css: function(propertyName, value) {
      // .css( propertyName )
      // Get the computed style properties for the first element in the set
      // of matched elements.
      // .css( propertyName, value )
      // Set one or more CSS properties for the set of matched elements.
      if (!value) {
        return this.get(0).style.getPropertyValue(propertyName);
      } else {
        each(this.coll, function(elt) {
          elt.style.setProperty(propertyName, value)
        });
      }
      return jQueryObj;
    },
    height: function(value) {
      // .height()
      // Get the current computed height for the first element in the set
      // of matched elements.
      if (!value) {
        return this.get(0).getBoundingClientRect().height;
      // .height( value )
      // Set the CSS height of every matched element.
      } else {
        each(this.coll, function(elt) {
          // if a number is given the value is set as pixels
          if (typeof value === "number")
            elt.style.height = String(value) + "px";
          else
            elt.style.height = value;
        });
      }
      return jQueryObj;
    },
    width: function(value) {
      // .width()
      // Get the current computed width for the first element in the set
      // of matched elements.
      if (!value) {
        return this.get(0).getBoundingClientRect().width;
      // .width( value )
      // Set the CSS width of each element in the set of matched elements.
      } else {
        each(this.coll, function(elt) {
          // if a number is given the value is set as pixels
          if (typeof value === "number")
            elt.style.width = String(value) + "px";
          else
            elt.style.width = value;
        });
        return jQueryObj;
      }
    },
    attr: function(attributeName, value) {
      // .attr( attributeName )
      // Get the value of an attribute for the first element in the set of
      // matched elements.
      if (!value) {
        return this.get(0).getAttribute(attributeName);
      // .attr( attributeName, value )
      // Set one or more attributes for the set of matched elements.
      } else {
        each(this.coll, function(elt) {
          if (attributeName === "class")
            addClass(elt, value);
          else
            elt.setAttribute(attributeName, value);
        });
        return jQueryObj;
      }
    },
    html: function(htmlString) {
      // .html()
      // Get the HTML contents of the first element in the set of
      // matched elements.
      if (!htmlString) {
        return this.get(0).outerHTML;
      // .html( htmlString )
      // Set the HTML contents of each element in the set of matched elements.
      } else {
        var clone = copy(this.coll);
        each(clone, function(elt) {
          var parent = elt.parentNode;
          var template = document.createElement('template');
          template.innerHTML = htmlString;
          parent.replaceChild(template.content, elt);
        });
        return jQueryObj;
      }
    }
  };

  // ----------------------------------------------------------------------
  // Process Input
  // ----------------------------------------------------------------------

  if (typeof arg === "object") {
    // if it's a node we just return it wrapped in our obj
    jQueryObj.coll = [arg];
  } else {
    // otherwise we find it in the DOM
    var id = arg.match(/(#)(.+)/);
    var cls = arg.match(/(\.)(.+)/);

    if (id)
      jQueryObj.coll = document.getElementById(id[2]);
    else if (cls)
      jQueryObj.coll = document.getElementsByClassName(cls[2]);
    else
      jQueryObj.coll = document.getElementsByTagName(arg);
  }

  // Set the length
  jQueryObj.length = jQueryObj.coll.length

  return jQueryObj
}

// alias
var $ = jQuery;

document.onload = jQuery;
