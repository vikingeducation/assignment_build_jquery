// window.onload = function() {
  // Without this line, does not work, why? Ans: JS has function level scope
  // window.jQuery = jQuery;

// Function to find jQuery object
var jQuery = function (str) {

  var jQ = new jQuery_object();

  switch (str[0]) {
    case '.':
      elements = document.getElementsByClassName(str.slice(1, str.length));
      for(var i = 0; i < elements.length; i++ ){
        jQ.collection.push(elements[i]);
      }
      return jQ;
    case '#':
      jQ.collection.push(document.getElementById(str.slice(1, str.length)));
      return jQ;
    default:
      jQ.collection.push(document.getElementsByTagName(str));
      return jQ;
  }

};

// Constructor for jQuery object
function jQuery_object () {
  this.collection = [];

  this.length = function(){
    return this.collection.length;
  };




}