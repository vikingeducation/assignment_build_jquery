
function FooConstructor() {
  this.ourProp = { josh: "tetris", koz: "hotdog"}
}

var foo = new FooConstructor();

function BarConstructor() {
  this.ourProp = { josh: "hammer", koz: "nail"}

  return this;
}

var bar = BarConstructor();

var bar2 = new BarConstructor();


function SimpleObjConstructor() {
  this.ourProp = "hotdog";
}

SimpleObjConstructor.prototype.each = function( func ) {
  // requires collection to be array
  this.collection.forEach( func );
}


myObj = new SimpleObjConstructor();

myObj.collection = [1,"foo",3];
myObj.each( function( el, index ){
    console.log( "Item " + index + " is " + el)
});


