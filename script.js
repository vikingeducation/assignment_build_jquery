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

  this.hasClass = function() {
    return this.idx(0).className;
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
    } else
      this.each(function(node) {
        node.value = newValue;
      })
  };

};

var test_div = jQuery(".div-man");
var test_id = jQuery("#monster-div");
var test_header = jQuery("h1");
var test_form = jQuery(".div-woman");
