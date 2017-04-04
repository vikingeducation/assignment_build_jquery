function Foo() {
  this.a = "A";
}
var foo = new Foo();
console.log(foo instanceof Object);
console.log(foo instanceof Foo);

var Bar = function() {
  return {
    "a": "A"
  };
};
var bar = Bar();
console.log(bar instanceof Object);
console.log(bar instanceof Bar);

function Baz() {
  if (!(this instanceof Baz)) {
    return new Baz();
  }
  this.a = "A";
}
var baz = new Baz();
console.log(baz instanceof Baz);
baz = Baz();
console.log(baz instanceof Baz);


var SimpleObject = function() {
  this.collection = [];
  this.each = function(func) {
    for (let i = 0; i < this.collection.length; i++) {
      func(this.collection[i], i);
    }
  }
}
SimpleObject.each = function(collection, func) {
  for (let i = 0; i < collection.length; i++) {
    func(collection[i], i);
  }
};
var myObj = new SimpleObject();
myObj.collection = [1,"foo",3];
myObj.each( function( el, index ) {
  console.log( "Item " + index + " is " + el);
});
var collection = ['foo', 'bar', 'fiz', 'baz'];

SimpleObject.each(collection, function(el, index) {
  console.log( "Item " + index + " is " + el);
});
