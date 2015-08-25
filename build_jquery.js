var jQuery = function (input){
  //currently returns null instead of [] if not found
  var result;
  if (typeof input === "object") {
    return new jQueryObj([input]);
  }
  else if (input[0] === "."){
    result = window.document.getElementsByClassName(input.substring(1));
    return new jQueryObj(result);
  }
  else if (input[0]=== '#'){
    result = window.document.getElementById(input.substring(1));
    return new jQueryObj(result);
  }
  else {
    result = window.document.getElementsByTagName(input);
    return new jQueryObj(result);
  }

};

// Alias function
var $ = function(input) {
  return jQuery(input);
}

// create jQuery obj
// constructor function

function jQueryObj(result){
  if (result) { 
    this.result = [];
    result.forEach(function(ele) {
      this.result.push(jQuery(ele));
    })
  }
  else {
    this.result = [];
  }

  this.length = function() {
    return this.result.length;
  },

  this.idx = function(pos) {
    return this.result[pos];
  }
}












