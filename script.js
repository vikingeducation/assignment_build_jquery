//Warmup

function Foo(){
  this.someProp = "value!";
  this.someMethod = function(){return "I'm a method!";};
}

var Bar = function() {
  return {
    someProp: "value",
    someMethod: function(){return "I'm a methdd!";}
  };
};

var foo = new Foo();
console.log(foo instanceof Object);
console.log(foo instanceof Foo);
var bar = Bar();
console.log(bar instanceof Object);
console.log(bar instanceof Bar);

function Baz() {
  if (!(this instanceof Baz)) return new Baz();
  this.someProp = "value!";
  this.someMethod = function(){return "I'm a method!";};
}

var baz = new Baz();
console.log(baz instanceof Baz);
baz = Baz();
console.log(baz instanceof Baz);

function SimpleObject() {
  this.collection = [];
  this.each = function(someFunc){
    this.collection.forEach(function(element, index){
      someFunc(element, index);
    });
  };
}
SimpleObject.each = function(collection, someFunc){
  collection.forEach(function(element, index){
    someFunc(element, index);
  });
};
myObj = new SimpleObject();
myObj.collection = [1, "foo", 3];
myObj.each( function( el, index ) {
  console.log("Item " + index + " is " + el);
});
var collection = ['foo', 'bar', 'fiz', 'baz'];
SimpleObject.each(collection, function(el, index) {
  console.log("Item " + index + " is " + el);
});

//Build jQuery


var jQuery = function(myInput) {
  var collection = [];
  if (typeof myInput == 'string') {
    if (myInput[0] === '.') {
      collection = document.getElementsByClassName(myInput.substring(1));
    } else if (myInput[0] === "#") {
      collection = document.getElementById(myInput.substring(1));
    } else {
      collection = document.getElementsByTagName(myInput);
    }
  } else if (myInput instanceof HTMLElement){
    collection = [myInput];
  }
  return {
    jCollection: collection,
    length: collection.length,
    idx: function(index) {
      return collection[index];
    }
  };
};

var $ = jQuery.bind();




