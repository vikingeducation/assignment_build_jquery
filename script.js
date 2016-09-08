function FooConstructor() {
  this.prop = "Hello";
  this.method = function() {
    console.log("Hello");
  }
};

function BarConstructor() {
  var BarConstructor = {
    barMethod: function() {},
    barProp: "bar!"
  }
  return BarConstructor;
};

function SimpleObject() {
  this.collection = [];

  this.each = function(method){
    for (var i = 0; i < this.collection.length; i++) {
      method(this.collection[i], i);
    }
  }; 
};

SimpleObject.each = function (collection, func) {
  for (var i = 0; i < collection.length; i++) {
    func(collection[i], i);
  }
};

function jQuerySelector(selector) {
  var collection = document.querySelectorAll(selector);
  return new jQueryCollection(collection);
};

function jQuery (cssSelector) {

  if (cssSelector[0] === ".") {
    var collection = document.getElementsByClassName(cssSelector.substring(1));
    return new jQueryCollection(collection);

  } else if (cssSelector[0] === "#") {
    var collection = [document.getElementById(cssSelector.substring(1))]; 
    return new jQueryCollection(collection);

  } else if (typeof cssSelector !== "string" && stringify(cssSelector)[0] === "<") {
    var collection = [(cssSelector)];
    return new jQueryCollection(collection);

  } else {
    var collection = document.getElementsByTagName(cssSelector);
    return new jQueryCollection(collection);
  };
}

function stringify (node) {
  var tmp = document.createElement("div");
  tmp.appendChild(node);
  return tmp.innerHTML;
}

function $ (cssSelector) {
  return jQuery.call(undefined, cssSelector);
}

function jQueryCollection (collection) {
  this.length = collection.length;
  this.idx = function (index) {
    return collection[index];
  };

  this.each = function(method){
    for (var i = 0; i < this.length; i++) {
      method(this.idx(i), i);
    }
  };

  this.hasClass = function(classSearch) {
    var classes = this.idx(0).classList;
    if (classes.indexOf(classSearch) > -1) {
      return true;
    } else {
      return false;
    }
  };

  this.addClass = function(newName) {
    this.each(function(node) {
      node.classList.add(newName);
    });
  };

  this.removeClass = function(classToRemove) {
    this.each(function(node) {
      if (classToRemove !== undefined) {
        node.classList.remove(classToRemove);
      } else {
        node.classList = [];
      }
    })
  };

  this.toggleClass = function(classToToggle) {
    this.each(function(node) {
      node.classList.toggle(classToToggle);
    })
  };

  this.val = function(newValue) {
    if (newValue === undefined) {
      return this.idx(0).value;
    } else {
      this.each(function(node) {
        node.value = newValue;
      })
    }
  };

  this.css = function(propertyName, value) {
    if (value) {
      this.each(function(node) {
        node.style[propertyName] = value;
      });
    } else {
      return this.idx(0).style[propertyName];
    }
  };

  this.height = function(newHeight) {
    if (newHeight) {
      this.each(function(node) {
        node.style.height = newHeight;
      })
    } else {
      return this.idx(0).style.height;
    }
  };

  this.width = function(newWidth) {
    if (newWidth) {
      this.each(function(node) {
        node.style.width = newWidth;
      })
    } else {
      return this.idx(0).style.width;
    }
  }

  this.attr = function(attrName, value) {
    if (value) {
      this.each(function(node) {
        var att = document.createAttribute(attrName);
        att.value = value;
        node.setAttributeNode(att);
      });
    } else {
      return this.idx(0).getAttributeNode(attrName).value;
    }
  };

  this.html = function(newHtml) {
    if (newHtml) {
      this.each(function(node) {
        node.innerHTML = newHtml;
      })
    } else {
      return this.idx(0).innerHTML;
    }
  };

  this.parent = function() {
    return this.idx(0).parentNode;
  };

  this.prev = function() {
    return this.idx(0).previousSibling;
  };

  this.next = function() {
    return this.idx(0).nextSibling;
  };

};

var test_div = jQuery(".div-man");
var test_id = jQuery("#monster-div");
var test_header = jQuery("h1");
var test_form = jQuery(".div-woman");
