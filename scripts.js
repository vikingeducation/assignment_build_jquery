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
