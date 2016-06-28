// This returns Object instead of FooConstructor, is that okay?
function FooConstructor(){
	this.fooMethod = function(){};
	this.fooProp = "foo!";
};

// This returns Object instead of BarConstructor, is that okay?
BarConstructor = function(){
  return {barMethod: function(){},
  barProp: "bar!"}
};

function SimpleObject(){
  this.collection = [];
  this.each = function(x){this.collection.forEach(x)};
};

SimpleObject.each = function(collection, x){ collection.forEach(x) };

// Build jQuery
// jQuery() - first thing to note is that
// it is a function that takes an argument
// in our case, we're only going to take one argument
jQuery = function( searched ) {
	// In the HTML DOM, everything is a node
	// The document itself is a document note
	// All of the DOM methods that are available can get be user here: http://www.w3schools.com/jsref/dom_obj_all.asp

	// 3 Searchables
	// 1. classes
	// 2. ids
	// 3. elements

	// Determining the searched type and setting a variable to represent it. 
	var searchedType = "element";
	if ( searched[0] === "." ) {
	  searchedType = "class";
	} else if ( searched[0] === "#" ) {
	  searchedType = "id";
	};

	// getting rid of the first character if the searched is a class or id search.
	if ( searchedType === "class" || searchedType === "id" ) {
	  searched = searched.substr(1);
	};

	// returning an array of found items depending on searched type.
	if ( searchedType === "class" ) {
	  return document.getElementsByClassName(searched);
	} else if ( searchedType === "id" ) {
	  return document.getElementById(searched);
	} else {
	  return document.getElementsByTagName(searched);
	};
}
