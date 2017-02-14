// constructors

function Foo(arguments) {
  this.property = 'hi';
  this.method = function() {
    console.log('hi!');
  };
}

function Bar() {
  return new Foo();
}

function Baz() {
  if (!(this instanceof Baz)) return new Baz();
}

// anonymous functions

function SimpleObject() {
  this.collection = [1, 'foo', 3];
  this.each = function( passedFunction ) {
    this.collection.forEach(passedFunction);
  };
}

SimpleObject.each = function(collection, passedFunction) {
  collection.forEach(passedFunction);
};