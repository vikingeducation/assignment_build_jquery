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
    return this.collection[index];
  };

}