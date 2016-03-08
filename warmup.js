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
  this.collection = [];

  switch (selector[0]) {
    case ".":
    // selector is class
      this.collection = document.getElementsByClassName(selector.slice(1));
      break;
    case "#":
    // selector is ID
      this.collection = document.getElementById(selector.slice(1));
      break;
    default:
    // selector is element
      this.collection = document.getElementsByTagName(selector);
      break;
  };

  var length = this.collection.length;
  var jQueryObject = {
    idx: function(index) {
      return this.collection[index];
    }
  };
};