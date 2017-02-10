// Warmup: Constructors

function Foo() {
  this.sampleProperty = "property!";
  this.sampleMethod = function() { console.log("method!") };
}

function Bar() {
  return new Foo();
}

function Baz() {
  if (!(this instanceof Baz)) return new Baz();
  this.anotherProperty = "another property!";
  this.anotherMethod = function() { console.log("another method!") };
}

// Warmup: Anonymous Functions

function SimpleObject() {
  if (!(this instanceof SimpleObject)) return new SimpleObject();
  this.collection = [1, "foo", 3];
  this.each = function(func) {
    this.collection.forEach(func);
  };
}

SimpleObject.each = function(collection, func) {
  collection.forEach(func);
};
