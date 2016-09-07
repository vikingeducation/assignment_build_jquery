function FooConstructor() {
  this.fooProp = "Foo!";
  this.fooMethod = function() {
    console.log("Function Works!");
  };
}

function BarConstructor (){
  this.barProp = "bar!";
  this.barMethod = function() {
    console.log("Bar Function Works!");
  };
  return this;
}
