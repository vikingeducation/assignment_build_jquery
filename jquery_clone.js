
function jQuery( selector ) {
  var elements;
  if( typeof selector === "string" ) {
    switch (selector.charAt(0)) {
    case "#":
      elements = document.getElementById(selector.slice(1));
      break;
    case ".":
      elements = document.getElementsByClassName(selector.slice(1));
      break;
    default:
      elements = document.getElementsByTagName(selector);
    }
  } else if( Array.isArray(selector) ){
    elements = selector;
  } else {
    // assumes that selector is one dom elt
    elements = [ selector ];
  }
  return new JQueryReturn(elements);
}

var $ = jQuery;

function JQueryReturn( collection ) {
  this.collection = collection;
}

JQueryReturn.prototype.idx = function( i ) {
  if (this.collection[i])  {
    return this.collection[i];
  }
}

// JQueryReturn.prototype.idx = function() {
//   return this.collection.length;
// }


JQueryReturn.prototype.hasClass = function( selector ) {

  var hasClassTestFn = function(el, cls) {
    return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
  }

  var retVal = false;
  for( var i = 0; i < this.collection.length; i++){
    retVal = retVal || hasClassTestFn( this.collection[i], selector );
  }

  return !!retVal;
}

JQueryReturn.prototype.addClass = function( newClassName ) {
  for ( var i = 0; i < this.collection.length; i++ ) {
    this.collection[i].className += " " + newClassName
  }
}

JQueryReturn.prototype.removeClass = function( removeClassName ) {
  for ( var i = 0; i < this.collection.length; i++ ) {
    var classNames = this.collection[i].className.split(" ");
    var removeIndex = classNames.indexOf( removeClassName );
    classNames.splice(removeIndex, 1);
    this.collection[i].className = classNames.join(" ");
  }
}

JQueryReturn.prototype.toggleClass = function( toggleClassName ) {
  if ( this.hasClass( toggleClassName ) ) {
    this.removeClass( toggleClassName );
  } else {
    this.addClass( toggleClassName );
  }
}

JQueryReturn.prototype.val = function( newVal ) {
  if ( !!newVal ) {
    for ( var i = 0; i < this.collection.length; i++ ) {
      this.collection[i].value = newVal;
    }
  } else {
    return this.collection[0].value;
  }
}

JQueryReturn.prototype.css = function( property, value ) {
  if (!!value) {
    for ( var i = 0; i < this.collection.length; i++ ) {
      this.collection[i].style[property] = value;
    }
  } else {
    var style = getComputedStyle(this.collection[0]);
    return style.getPropertyValue(property);
  }
}

JQueryReturn.prototype.height = function() {

}

JQueryReturn.prototype.width = function() {

}

JQueryReturn.prototype.attr = function() {

}

JQueryReturn.prototype.html = function() {

}


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
    console.log( "Item " + index + " is " + el);
});
