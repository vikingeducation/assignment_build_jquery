// Warmup: Constructors

// Regular constructor, must use new keyword
function Foo() {
  this.myProp = 'I am a property of foo';
  this.myFunc = function() {
    console.log('I am a function in foo');
  }
}

// Pretend constructor, doesn't return an instance of Bar
var Bar = function() {
  return { myProp: 'I am a property of bar',
    myFunc: function() {
      console.log('I am a function in bar');
    }
  }
}

// Fancy constructor, returns an instance of Baz even without new
function Baz() {
  if (!(this instanceof Baz)) {
    return new Baz();
  }
  this.myProp = 'I am a property of baz';
  this.myFunc = function() {
    console.log('I am a function in baz');
  }
}

// Warmup: Anonymous Functions

function SimpleObject() {
  this.collection = [];
  this.each = function( toApply ) {
    this.collection.forEach( function( element, index ) {
      toApply(element, index);
    } )
  }
}
