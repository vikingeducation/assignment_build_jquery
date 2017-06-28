// Warmup: Constructors
function Foo() {
  this.myProp = 'I am a property of foo';
  this.myFunc = function() {
    console.log('I am a function in foo');
  }
}

var Bar = function() {
  return { myProp: 'I am a property of foo',
    myFunc: function() {
      console.log('I am a function in foo');
    }
  }
}
