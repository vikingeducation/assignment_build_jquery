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
	  	return ( new jQueryObject(this.collection) );
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
	  	return ( new jQueryObject(this.collection) );
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

	  	return ( new jQueryObject(this.collection) );
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

	  // 1. Get the value of a computed style property for the first element in the set of matched elements
	  // e.g. .css( "background-color" ) would return the value for that
	  // 1.5 - You can get send in an array of css properties which will return an array of items but I might leave that for the meanwhile as I think it's going a step too far the point of this exercise.
	  // 2. Or set one or more CSS properties for every matched element.
	  // e.g. .css( "background-color", stringOrNumber )
	  this.css = function( propertyName, value ){
	  	// 2. Gonna do the setter first... Not too sure about this but it looks like this is a bit of a confusing rough method because setting seems to use different terms from which the getter uses...

	  	// When an argument has been given for value - the setter
	  	if ( value !== undefined ) {
	  	  for (var i = 0; i < this.length; i++) {
	  	  	// First off we are going to set a variable for the element...
	  	  	var elementToSet = this.collection[i];
	  	  	elementToSet.style[propertyName] = value;
	  	  };
	  	  return ( new jQueryObject(this.collection) );

	  	// When an argument hasn't been given - aka the getter
	  	// You have to use different terms from the setter for the css values which is annoying, you could key them in later but still annoying.
	  	} else {
	  	  // First off we are going to set a variable for the element...
	  	  var element = this.collection[0];
	  	  return getComputedStyle(element)[propertyName];
	  	};
	  };

	  // 1. If no argument, get the current computed height for the first element in the set of matched elements
	  // 2. Set the height of every matched element.

	  // ** gonna call the css function for this and the width one below...
	  this.height = function( value ){
	  	return ( this.css( "height", value ) )
	  };

	  this.width = function( value ){
	  	return ( this.css( "width", value ) )
	  };

	  // 1. Get the value of an attribute for the first element in the set of matched elements
	  // 2. or set one or more attributes for every matched elment.
	  // e.g. <em title="huge, gigantic">large</em>
	  // var title = $( "em" ).attr( "title" );
	  // $( "div" ).text( title );

	  // So it looks like we're getting the value of an attribute of a tag...
	  this.attr = function( attributeName, value ){
	  	// If there's no value, then we're gonna get the attribute value of the first item in the collection.
	  	if ( value === undefined ) {
	  	  var element = this.collection[0];
	  	  return element.attributes[attributeName];

	  	// A value is provided, so we're gonna set the attribute value for all items in that collection.
	  	} else {
	  	  for (var i = 0; i < this.length; i++) {
	  		var element = this.collection[i];
	  		element.setAttribute(attributeName, value);
	  	  };
	  	  return ( new jQueryObject(this.collection) );
	  	};
	  };

	  // 1. Get the HTML contents of the first element in the set of matched elements
	  // 2. Set the HTML contents of every matched element.
	  // "This method uses the browser's innerHTML property."
	  this.html = function( htmlString ){
	  	// if htmlSTRING is undefined (no arg provided)
	  	// return the innerHTML of the first item in the collection
	  	if (htmlString === undefined) {
		  var element = this.collection[0];
		  return element.innerHTML;
	  	// arg provided
	  	// set the innerHTML of all items in that collection
	  	// Going to have to work backwards on this one in case elements with the same class are nested...
	  	} else {
	  	  for (var i = (this.length - 1); i >= 0; i--) {
	  	    var element = this.collection[i];
	  	    element.innerHTML = htmlString;
	  	  };
	  	  return ( new jQueryObject(this.collection) );
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
















