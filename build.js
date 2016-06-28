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
	// will set it to the variable results
	var results = [];
	if ( searchedType === "class" ) {
	  results = document.getElementsByClassName(searched);
	} else if ( searchedType === "id" ) {
	  results = document.getElementById(searched);
	} else {
	  results = document.getElementsByTagName(searched);
	};

	// So I think the whole point of the jQuery object is that you can chain other methods to it...
	jQueryObject = function( collection ){
	  this.collection = collection;
	  this.length = collection.length;
	  this.idx = function( id ){ return collection[id] };

	  // full featured functionality

	  // hasClass()
	  // Description: Determine whether any of the matched elements are assigned the given class.
	  // So we want to go through all of the different items in the collection and see if they have this class in them.
	  this.hasClass = function( className ){
	  	// I want to go through the collection and for each element, see if the class has the right element in it.
	  	var answer = false;
	  	// Have to use a for loop because you can't use a forEach in this situation...
	  	for (var i = 0; i < this.length; i++) {
	  	  this.collection[i].classList.forEach( function(c){ if (c === className){ answer = true }; } );
	  	};
	  	return answer;
	  };

	  this.addClass = function( classNameToAdd ){
	    for (var i = 0; i < this.length; i++) {
	  	  this.collection[i].className = ( this.collection[i].className + " " + classNameToAdd )
	  	};
	  	return ( new jQueryObject(collection) );
	  };

	  this.removeClass = function( classNamesToRemove ){
	  	// First we need to split up this string into an array...
	  	var splitClasses = classNamesToRemove.split(" ");

	  	// Now we need to go through each of items in the collection...
	  	// I think there are errors because things are getting wiped out per go...
	  	for (var i = (this.length - 1); i >= 0; i--) {
	  	  for (var j = 0; j < splitClasses.length; j++) {
	  	    this.collection[i].classList.remove(splitClasses[j])
	  	  };
	  	};
	  	return ( new jQueryObject(collection) );
	  };

	  // Method takes one or more class names as its parameter
	  // 1 - If an element in the matched set of elements already has the class, then it is removed. If an element does have the class, then it is added.
	  // 2 - The second version uses the second parameter for determining whether the class should be added or removed. True = add, False = remove.
	  // 3 - Without any arguments, all of selected items classes are toggled off... 
	  // From the notes: "..to be toggled in the class attribute of each element in the matched set."
	  this.toggleClass = function( classNamesToToggle, trueOrFalse ){
	  	// First argument is a string
	  	if ( typeof(classNamesToToggle) === "string" ) {
	  	  // First need to get our array of different class names...
	  	  var splitClasses = classNamesToToggle.split(" ");
	  	  // We're gonna have to work backwards in terms of our jQueryObject because toggling can remove classes and therefore actively change the array (it's destructive)
	  	  for (var i = (this.length - 1); i >= 0; i--) {
	  	    for (var j = 0; j < splitClasses.length; j++) {
	  	      var included = false;
	  	      // First we need to figure out if the current item's classes include the class we're trying to toggle
	  	      this.collection[i].classList.forEach( function(cl){
	  	      														if (cl === splitClasses[j]){ included = true };
	  	      													}
	  	      			  					   );
	  	      // Now that we've figured out whether this item is included or not.
	  	      // We can either remove it or add it to the class.
	  	      if (included === false ) { this.collection[i].className = ( this.collection[i].className + " " + splitClasses[j] ) } else { this.collection[i].classList.remove(splitClasses[j]) };
	  	    };
	  	  };

	  	// No arguments
	  	// I'm just gonna set it so that all the elements that are passed in will have all their classes removed. It should be easy enough to chance once I got this figured out.
	  	} else if (classNamesToToggle === undefined) {
	  	  // I wonder if you can just set the class list to an empty array and it'll work...
	  	  for (var i = (this.length - 1); i >= 0; i--) {
		    this.collection[i].className = "";
		  };
	  	};

	  	return ( new jQueryObject(collection) );
	  };

	  // 1. Return value if no argument is provided (of the first item)
	  // 2. Set value if an argument is provided (of all elements in the collection)
	  this.val = function( newValue ){
	  	if ( newValue === undefined ) {
	  		// Going to assume that user is going to only provide one item to set the value to, otherwise we'll have to think about how to present multiple values legibly...
	  		return this.collection[0].value;
	  	} else {
	  		for (var i = 0; i < this.length; i++) {
	  		  this.collection[i].value = newValue;
	  		}
	  	  // Not too sure if we should return anything when just setting a value...
	  	};
	  };
	};

	return ( new jQueryObject(results) );
};

// Aliasing to the dollar sign
// Not too sure if this should be a var or just a global thing...
$ = function( searched ){
  return( jQuery( searched ) );
};
















