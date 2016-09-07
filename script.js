function FooConstructor() {
  this.fooProp = "Foo!";
  this.fooMethod = function() {
    console.log("Function Works!");
  };
}

function BarConstructor() {
  this.barProp = "bar!";
  this.barMethod = function() {
    console.log("Bar Function Works!");
  };
  return this;
}

function SimpleObject() {
  this.collection = [];
  this.each = function(fn){
    for( var i = 0; i < this.collection.length; i++ ){
      fn(this.collection[i], i);
    }
  };
  // each:  NO WORK
}

//TODO: Ask about why we can't mix and match : and =
SimpleObject.each = function(collection, cb){
  for( var i = 0; i < collection.length; i++ ){
    cb(collection[i], i);
  }
};
