

function Foo() {
  this.sample = "sample";
  this.sampleMethod = function(){console.log("Foo!")};
}

var foo = new Foo();
//  console.log(foo instanceof Object);
//  console.log(foo instanceof Foo);

function Bar() {
  return function(){
  this.sample2 = "sample2";
  this.sampleMethod2 = function(){console.log("Bar!")};
}
}

var bar = Bar();
//  console.log(bar instanceof Object);
//  console.log(bar instanceof Bar);

function Baz() {
  if (!(this instanceof Baz)) return new Baz(name);
  this.sample3 = "sample3";
  this.sampleMethod3 = function(){console.log("Baz!")};
}

var baz = new Baz();
//  console.log(baz instanceof Baz);


function simpleObject() {
    this.collection = ["hello", 3, "seven", 100];
    this.each = function(funct1) {
      for (i = 0; i < this.collection.length; i ++) {
        funct1(this.collection[i], i);
      }
    }
  simpleObject.each = function(collection, funct2) {
    for (i = 0; i < collection.length; i ++) {
      funct2(collection[i], i);
    }
  }
  }


var myObj = new simpleObject();
var funct10 = function(el, index) {
//  console.log( "Item " + index + " is " + el);
}

myObj.each(funct10);

var collection = ['foo', 'bar', 'fiz', 'baz'];
var funct20 = function(el, index) {
//  console.log( "Item " + index + " is " + el);
}

simpleObject.each(collection, funct20);
