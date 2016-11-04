//Warmup
function Foo() {
  this.someProp = "value!";
  this.someMethod = function(){ return "I'm a method!" };
}

// var foo = new Foo();
// foo instanceof Object
// foo instanceof Foo
//########################################################
function Bar() {
  return {
    someProp: "value",
    someMethod: function(){ return "I'm a method" }
  }
}

// var bar = Bar();
// bar instanceof Object
// bar instanceof Bar
//#########################################################

function SimpleObject() {
  this.collection = []
  this.each = function(func) {
    for (var i = 0; i < this.collection.length; i++) {
      func(this.collection[i], i);
    }
  }
}

// myObj = new SimpleObject();
// myObj.collection = [1,"foo",3];
// myObj.each( function( el, index ) {
//   console.log( "Item " + index + " is " + el);
// })
//#########################################################

SimpleObject.each = function (collection, func) {
  for (var i = 0; i < collection.length; i++) {
    func(collection[i], i)
  }
}

// var collection = ['foo', 'bar', 'fiz', 'baz'];
// SimpleObject.each(collection, function(el, index) {
//   console.log( "Item " + index + " is " + el);
// });
//#########################################################