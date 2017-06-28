// Warmup: Constructors
function Foo() {
  this.myProp = 'I am a property of foo';
  this.myFunc = function() {
    console.log('I am a function in foo');
  }
}

var Bar = function() {
  return { myProp: 'I am a property of bar',
    myFunc: function() {
      console.log('I am a function in bar');
    }
  }
}

function Baz() {
  if (!(this instanceof Baz)) {
    return new Baz();
  }
  this.myProp = 'I am a property of baz';
  this.myFunc = function() {
    console.log('I am a function in baz');
  }
}
