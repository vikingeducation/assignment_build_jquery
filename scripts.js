function Foo() {
  this.sampleProperty = 5;
  this.sampleMethod = function() {
    console.log("Boo");
  };
}

function Bar() {
  return {someProperty: 6, someMethod: function() { console.log("Boooo"); } };
}

function Baz() {
  this.stupidProperty = 7;
  this.stupidMethod = function() {
    console.log("Boooooooooooo");
  };

  if (!(this instanceof Baz)) {
    return new Baz();
  }
}

function SimpleObject() {
  this.collection = undefined;
  this.each = function(func) {
    for (var i = 0; i < this.collection.length; i++) {
      console.log("this is this.each");
      func(this.collection[i], i);
    }
  };
  // how do we add a (non-instance) method directly to SimpleObject
  // this.each and SimpleObject.each aren't overwriting each other?
    // SimpleObject.each is a 'class' method? and this.each is an 'instance' method?
}

SimpleObject.each = function(collection, func) {
  for (var i = 0; i < collection.length; i++) {
    console.log("this is each");
    func(collection[i], i);
  }
};
