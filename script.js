function Foo() {
  this.someProperty = "Hi";
  this.someMethod = function() { console.log("this is the function")};
};

function Bar() {
  return new Foo()
}

function Baz() {
  if (!(this instanceof Baz)) return new Baz();
  this.someProperty = "Hi";
  this.someMethod = function() { console.log("this is the function")};
}

function SimpleObject() {
  if (!(this instanceof SimpleObject)) return new SimpleObject();
  this.collection = [1,2,3,4];
  this.each = function( iterate_func ) {
    this.collection.forEach( iterate_func );
  };
}

SimpleObject.each = function( collection, iterate_func ) {
  collection.forEach( iterate_func );
};

var jQuery = function(str) {
  var search = jQuery.searchTypes[str[0]]
  if ( search ) {
    return document.search.call(_, str)
  }
  else {
    return document.getElementsByTagName(str)
  }
}

jQuery.searchTypes = {
  '#': getElementById,
  '.': getElementsByClassName
}