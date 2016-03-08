var FooConstructor = function() {
  this.fooProp = "foo!";
  this.fooMethod = function() {
    console.log("This is a method!");
  }
};


var BarConstructor = function() {
  this.barProp = "bar!";
  this.barMethod = function() {
    console.log("This is a method!");
  }; 
  if (!(this instanceof BarConstructor)) {
    return new BarConstructor();
  }
};

var SimpleObject = function() {
  this.collection = [];
  this.each = function(function_param) {

    for(var i=0; i < this.collection.length; i++) {
      var el = this.collection[i];
      var index = i;
      function_param(el, index);
    }
  };
};




function jQuery(selector) {

  var collection = [];

  switch (selector[0]) {
    case ".":
    // selector is class
      collection = document.getElementsByClassName(selector.slice(1));
      break;
    case "#":
    // selector is ID
      collection = document.getElementById(selector.slice(1));
      break;
    default:
    // selector is element
      collection = document.getElementsByTagName(selector);
      break;
  };

  
  if (typeof selector === "object") {
    // element is a node
    collection = selector;
  };


  var jQueryObject = {

    collection: collection,

    length: collection.length,

    idx: function(index) {
      return collection[index];
    },

    each: function(function_param) {
      for(var i=0; i < collection.length; i++) {
        var el = collection[i];
        var index = i;
        function_param(el, index);
      }
    },

    hasClass: function(myClass) {
      var result = false;
      this.each(function( el, index ) {
        if (el.classList.contains(myClass)) {
          result = true;
        }
      })
      return result;
    },

    addClass: function(myClass) {
      this.each(function( el, index ) {
        el.classList.add(myClass);
      })
      return this;
    },

    removeClass: function(myClass) {
      this.each(function( el, index ) {
        el.classList.remove(myClass);
      })
      return this;
    },

    toggleClass: function(myClass) {
      this.each(function( el, index ) {
        el.classList.toggle(myClass);
      })
      return this;
    },

    val: function(myVal) {
      this.each(function( el, index ) {
        if (myVal === undefined) {
          // getter
        } else {
          // setter
        }
      })
    }

  }

  return jQueryObject;
};

function $(selector) {
  return jQuery(selector);
};