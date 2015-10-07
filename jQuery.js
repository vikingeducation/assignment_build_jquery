function jQuery(input){

  // Setup input_type
  var input_type,
      collection;
  
  // Determine what type of input we have, set input_type to the type
  if(typeof input == "object"){
    input_type = "node";
  } else if(input.charAt(0) == "#"){
    input_type = "id";
  } else if(input.charAt(0) == "."){
    input_type = "class";
  } else {
    input_type = "element";
  }
  
  // Search the document for the proper collection
  switch(input_type) {
    case "class":
      collection = document.getElementsByClassName(input.slice(1));
      break;
    case "id":
      collection = Array(document.getElementById(input.slice(1)));
      break;
    case "node":
      collection = [node];
      break;
    case "element":
      collection = document.getElementsByTagName(input);
      break;
  }
  
  // Define the jQuery object to be returned
  var jQuery_object = {
    length: collection.id ? 1 : collection.length,
    idx: function(index){
      return collection[index].innerHTML;
    },
    
    // Method which cycles through every item in the collection. Or just run the function on the first element if no length is defined.
    each: function(f){
      if(!collection.length){
        f(collection);
      } else {
        for(var i=0;i<collection.length;i++){
          f(collection[i]);
        }
      }
    },
    
    // Takes a class name and returns whether or not the particular collection has that class.
    hasClass: function(searchClass){
      var trigger = false;
      this.each(function(element){
        if(element.className.split(' ').indexOf(searchClass) >= 0){
          trigger = true;
        }
      });
      return trigger;
    },
    
    addClass: function(addClassName){
      this.each(function(element){
        element.className += " " + addClassName;
        console.log(element.className);
      });
      return this;
    }, 
    
    // QUESTION: This is giving me problems when I use the class that's first in the 
    // className. What gives?
    removeClass: function(removeClassName){
      var reg = new RegExp(removeClassName, "g");
      this.each(function(element){
        element.className = element.className.replace(reg, '').trim();
        console.log(element.className);
      });
      return this;
    }, 
    
    toggleClass: function(toggleClassName){
      var reg = new RegExp(toggleClassName, "g");
      this.each(function(element){
        index_toggle_class = element.className.split(' ').indexOf(toggleClassName);
        if( index_toggle_class >= 0){
          // DUP 1: This is the same ass remove class... how can I use that method?
          element.className = element.className.replace(reg, '').trim();
          console.log(element.className);
        } else {
          // DUP 2: Same code as addClass... how can I use that method?
          element.className += " " + toggleClassName;
          console.log(element.className);
        }
        return this;
      });
    }, 
    
    val: function(value){
      // If nothing is passed in for value then
      // we'll run the top part of the if statement
      if(typeof value == 'undefined'){
        if(!!collection[0].value){
          return collection[0].value;
        } else {
          return null;
        }
      // Add the ability to set value as well.
      } else {
        collection[0].value = value;
        return collection[0].value;
      }
    }
  };
  
  return jQuery_object;
}

// Allow ourselves to alias using $() notation
function $(input){
  return jQuery(input);
}


// Testing
var node = document.getElementById("some-input");
var test = $(node).val("nest");
console.log(test);