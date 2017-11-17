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
  //anonymous object
  let barObj = {
    name: 'Bar!',
    otherMethod: function() {
     let x = `My name is ${this.name}`
     return x;
    }
  };
  return barObj;
}

let bar = Bar();
//essentially bar is the return value of Bar, which is barObj
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
  this.collection = [],
  this.each = function(func) {
    this.collection.map((el, index) => {
      return func(el, index);
    });
  }
}

let myObj = new SimpleObject();
myObj.collection = [1,"foo",3];
myObj.each( function( el, index ) {
  console.log( "Item " + index + " is " + el);
})
