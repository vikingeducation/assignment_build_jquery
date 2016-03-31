// Warmup: Constructors

function FooConstructor(){
  this.fooProp = "foo!";
  this.fooMethod = function(){
    console.log("Foo method!");
  }
}

// function BarConstructor(){
//   return Object.create(null, {
//     barProp: {value: "bar!"},
//     barMethod: {value: function(){
//           console.log("Bar method!");
//         }}
//   })
// }

function BarConstructor(){
  return {
    barProp: "bar!",
    barMethod: function(){
      console.log("Bar method!");
    }
  };
}

// Warmup: Anonymous Functions

function SimpleObject(){
  this.collection = [];
  this.each = function (eachFunction) {
    this.collection.forEach(function(element, index){
      eachFunction(element, index);
    })
  };
}

SimpleObject.each = function(collection, eachFunction){
  collection.forEach(function(element, index){
    eachFunction(element, index);
  })
};

// myObj = new SimpleObject();
// myObj.collection = [1,"foo",3];
// myObj.each( function( el, index ) {
//   console.log( "Item " + index + " is " + el);
// })

var collection = ['foo', 'bar', 'fiz', 'baz'];

SimpleObject.each(collection, function(el, index) {
  console.log( "Item " + index + " is " + el);
});