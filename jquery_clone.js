
function jQuery( selector ) {
  switch (selector.charAt(0)) {
  case "#":
    var element = document.getElementById(selector.slice(1));
    break;
  case ".":
    var element = document.getElementsByClassName(selector.slice(1));
    break;
  default:
    var element = document.getElementsByTagName(selector);
  }
  return new JQueryReturn(element);
}

var $ = jQuery;

function JQueryReturn() {

}

JQueryReturn.prototype.hasClass = function(className) {

}

// hasClass() (Docs)
// addClass() (Docs)
// removeClass() (Docs)
// toggleClass() (Docs)
// val() (Docs) Getter & Setter
// css() (Docs) Getter & Setter
// height() (Docs) Getter & Setter
// width() (Docs) Getter & Setter
// attr() (Docs) Getter & Setter
// html() (Docs) Getter & Setter


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
