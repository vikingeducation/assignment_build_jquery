

function FooConstructor() {
  this.fooProp = "foo!";
  this.fooMethod = function() {
    return "Hello"
  };
}

var foo = new FooConstructor();
foo;

function BarConstructor() {
  this.someProp = "xyz";
  this.someMethod = function() {
    return "Hello"
  };
  return this;
}

var bar = BarConstructor();



function SimpleObject() {
  this.collection = [1,2,3,"string"];
  this.each = function(func) {
    for (var i = 0; i < this.collection.length; i++) {
      func(this.collection[i],i);
    }
  };
}


function jQuery(str) {

  switch(str[0]) {
    case "." :
      return document.getElementsByClassName(str.slice(1));
      break;
    case "#" :
      return document.getElementById(str.slice(1));
      break;
    default :
      return document.getElementsByTagName(str);
  }
}