// window.onload = function() {
  // Without this line, does not work, why? Ans: JS has function level scope
  // window.jQuery = jQuery;

// Function to find jQuery object
var jQuery, $;
jQuery = $ = function (str) {

  var jQ = new jQuery_object();

  if (typeof(str) === "string") {
    switch (str[0]) {
      case '.':
        jQ.insert(document.getElementsByClassName(str.slice(1, str.length)));
        return jQ;
      case '#':
        jQ.insert([document.getElementById(str.slice(1, str.length))]);
        return jQ;
      default:
        jQ.insert(document.getElementsByTagName(str));
        return jQ;
    }
  } else {
      jQ.collection.push(str);
      return jQ;
  }

};

// Constructor for jQuery object
function jQuery_object () {
  this.collection = [];

  this.length = function(){
    return this.collection.length;
  };

  this.insert = function(arr){
    for(var i = 0; i < arr.length; i++ ){
      this.collection.push(arr[i]);
    }
  };

  this.idx = function(index){
    return jQuery(this.collection[index]);
  };

  this.hasClass = function(classQuery){
    result = false;
    for( var i = 0; i < this.collection.length; i++ ) {
      for( var j = 0; j < this.collection[i].classList.length; j++ ) {
        if (this.collection[i].classList[j] === classQuery) { result = true; }
      }
    }
    return result;
  };

  this.addClass = function(classQuery){
    for( var i = 0; i < this.collection.length; i++ ) {
      this.collection[i].className += " " + classQuery ;
    }
  };

  this.removeClass = function(classQuery){
    for( var i = 0; i < this.collection.length; i++ ){
      if ( this.collection[i].className.includes(classQuery) ) {
        this.collection[i].className = this.collection[i].className.replace(classQuery, "") ;
      }
    }
  };


  // If state is true, it always adds a class
  // If state if false, it always removes a class
  // If it's neither, it toggles
  this.toggleClass = function(classQuery, state) {
    var can_add, can_remove;

    if (state) {
      can_remove = false;
      can_add = true;
      } else if (state === false || state === 0) {
        can_remove = true;
        can_add = false;
      } else {
      can_add = true;
      can_remove = true;
    }

    for( var i = 0; i < this.collection.length; i++ ){
      if ( jQuery(this.collection[i]).hasClass(classQuery) && can_remove) {
        console.log("removing class");
        jQuery(this.collection[i]).removeClass(classQuery);
      } else if (can_add) {
        jQuery(this.collection[i]).addClass(classQuery);
        console.log("adding class");
      }
    }
  };

}










