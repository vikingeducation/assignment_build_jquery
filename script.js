function FooConstructor() {
  this.name = "foo";
  this.shot = function() {
    console.log(this.name);
  };
}

function BooConstructor(){
  if (!(this instanceof BooConstructor)){
  return new BooConstructor();
  }
  //the constructor properties and methods here
  this.name = "boo";
  this.shot = function() {
    console.log(this.name);
  };
}

function SimpleObject() {
  this.collection = [];
  this.each = function( callback ) {
    for(var i = 0; i < this.collection.length; i++) {
      callback( this.collection[i], i );
    }
  };
}

function jQuery(selector) {
  var prefix = selector[0];
  var results;
  switch (prefix) {
    case ".":
      console.log(selector + " is a class");
      selector = selector.slice(1);
      results = document.getElementsByClassName(selector);
      break;
    case "#":
      console.log(selector + " is an id");
      selector = selector.slice(1);
      results = document.getElementById(selector);
      break;
    default:
      console.log(selector + " is a tag");
      results = document.getElementsByTagName(selector);
      break;
  }
  return results;
}
