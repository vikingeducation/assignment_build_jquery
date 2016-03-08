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
  var results = [];

  switch (selector[0]) {
    case ".":
    // selector is class
    // returns as []
      results = document.getElementsByClassName(selector.slice(1));
      break;
    case "#":
    // selector is ID
    // returns as single result
      results = Array(document.getElementById(selector.slice(1)));
      // console.log(results)
      break;
    default:
    // selector is element
    // returns as []
      results = document.getElementsByTagName(selector);
      break;
  };

  
  if (typeof selector === "object") {
    // element is a node
    // returns as []
    results = selector;
  };


  var compileResults = (function() {
    // console.log("I'm here! Results: " + results)
    if (!(results === null)) {
      collection = results;
      return collection;
    } else {
      return [];
    }

  })();


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
      if (myVal === undefined) {
        // getter
        return collection[0].value;
      } else {
        // setter
        // return collection[0].value;
      }
    }

  }

  return jQueryObject;
};

function $(selector) {
  return jQuery(selector);
};