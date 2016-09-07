function FooConstructor() {
  this.fooMethod = function() {};
  this.fooProp = "foo!";
}


function BarConstructor() {
  if (!(this instanceof BarConstructor)) return new BarConstructor();
  return {
    barMethod: function() {},
    barProp: "bar!"
  }
}
