function FooConstructor() {
  this.fooMethod = function() {};
  this.fooProp = "foo!";
}


function BarConstructor() {
  if (!(this instanceof BarConstructor)) return new BarConstructor();
  this.barMethod = function() {};
  this.barProp = "bar!";
}

function SimpleObject() {
  this.each = function(collection, func) {
    for (var i = 0; i < collection.length; i++) {
      func(collection[i], i);
    };
  };
};
