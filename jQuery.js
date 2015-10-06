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
      collection = document.getElementsByClassName(input);
      break;
    case "id":
      collection = document.getElementById(input.slice(1));
      break;
    case "node":
      collection = node;
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
    
    // Method which cycles through every item in the collection
    each: function(f){
      if(!collection.length){
        f(collection);
      } else {
        for(var i=0;i<collection.length;i++){
          f(collection[i]);
        }
      }
    },
    
    // Takes a class name and returns whether or not the particular collection has that class. Only works for collections of lenght 1.
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
      });
    }
  };
  
  return jQuery_object;
}

// Allow ourselves to alias using $() notation
function $(input){
  return jQuery(input);
}

var node = document.getElementById("content");
$('.my-class').addClass("second-class");