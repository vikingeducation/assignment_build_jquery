var FooConstructor = function() {
  this.fooProp = "foo!";
  this.fooMethod = function() {
    console.log("This is a method!");
  }
};


var BarConstructor = function() {
  this.barProp = "bar!";
  this.barMethod = function() {
    console.log("This is a method!");
  }; 
  if (!(this instanceof BarConstructor)) {
    return new BarConstructor();
  }
};
