/*jshint esversion: 6 */
//constructor Foo
function Foo() {
  this.name = 'Foo!';
  this.someMethod = () => `My name is ${this.name}`;
}

let foo = new Foo();
console.log(foo instanceof Object);
//true
console.log(foo instanceof Foo);
//true
console.log(foo.someMethod());
//My name is Foo!

//"Constructor" Bar that returns an anonymous object
let Bar = function() {
  //super anonymous Object
  return {
    name: 'Bar!',
    otherMethod: function() {
      let x = `My name is ${this.name}`;
      return x;
    }
  };

};

let bar = Bar();
//essentially bar is the return value of Bar
console.log(bar.otherMethod());
//My name is Bar!
console.log(bar instanceof Object);
//true
console.log(bar instanceof Bar);
//false

//constructor Baz, can return instance without using 'new'
function Baz() {
  if (!(this instanceof Baz)) {
    return new Baz();
  }
  this.name = 'Baz!';
  this.someMethod = () => `My name is ${this.name}`;
}

//invoke Baz without new
let baz = Baz();
console.log(baz.someMethod());
//My name is Baz!
console.log(baz instanceof Baz);
//true

//can still invoke Baz with new
baz = new Baz();
console.log(baz.someMethod());
//My name is Baz!
console.log(baz instanceof Baz);
//true


//Constructor Simple Object
function SimpleObject() {
  this.collection = [];
  this.each = function(func) {
    this.collection.forEach((el, index) => {
      return func(el, index);
    });
  };
}

let myObj = new SimpleObject();
myObj.collection = [1, "foo", 3];
//iterate over collection using passed in function
myObj.each(function(el, index) {
  console.log("Item " + index + " is " + el);
});
//Item 0 is 1
//Item 1 is foo
//Item 2 is 3

//Add method to SimpleObject that takes two parameters
//and allows you to iterate over first parameter
SimpleObject.each = function(arr, func) {
  arr.forEach(function(el, index) {
    return func(el, index);
  });
};
//Note that this has NOT altered myObj, or any future new SimpleObjects!!

var collection = ['foo', 'bar', 'fiz', 'baz'];

SimpleObject.each(collection, function(el, index) {
  console.log("Item " + index + " is " + el);
});
//Item 0 is foo
//Item 1 is bar
//Item 2 is fiz
//Item 3 is baz

var newObj = new SimpleObject();
//Takes on .each method of original SimpleObject, accepting 1 parameter(function)
newObj.collection = ['woo', 'hoo'];
newObj.each(function(el, index) {
  console.log("Item " + index + " is " + el);
});
