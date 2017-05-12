function Foo() {
  this.fooProp = 'Foux du Fa Fa';
  this.fooMeth = function() {
    console.log("I'm a method!");
  }
}

var Bar = function() {
  this.prop = 'Bar Bar Black Sheep';
  this.meth = function() {
    console.log("I'm an ordinary object");
  }
  return this;
}

function Baz() {
  if (!(this instanceof Baz)) return new Baz();
  this.fooProp = 'Foux du Fa Fa';
  this.fooMeth = function() {
    console.log("I'm a method!");
  }
}