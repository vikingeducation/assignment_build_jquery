
/* Let's do a quick warmup to verify that you understand how to define
functions which take other functions. In this case, build a SimpleObject
constructor which makes an object that contains a collection inside of it and
also a method called each which allows you to iterate over that collection
using a passed-in function: */

function SimpleObject() {
  this.collection = [];
  this.each = function(yourFunction = null) {
    this.collection.forEach(function(value, index) {
      return yourFunction(value, index);
    });
  };
}

myObj = new SimpleObject();
myObj.collection = [1,"foo",3];
myObj.each( function( el, index ) {
  console.log( "Item " + index + " is " + el);
})

/* Now let's add a method to the SimpleObject function itself. Let's create a
method each that takes two parameters. The first is a collection, and the
second is a callback function that passes the element and index as arguments.
*/
SimpleObject.each = function(array, func) {
  array.forEach(function(value, index) {
    return func(value, index);
  });
}

var collection = ['foo', 'bar', 'fiz', 'baz'];
SimpleObject.each(collection, function(el, index) {
  console.log( "Item " + index + " is " + el);
});
