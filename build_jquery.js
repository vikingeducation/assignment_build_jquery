// create jQuery obj
// constructor function

function jQuery(input){
  var result = {}; // initialize with empty jQuery object
  var arr;

  if (typeof input === "object") {
    result.obj = [input];
  }
  else if (input[0] === "."){
    arr = window.document.getElementsByClassName(input.substring(1));
    result.obj = arr;
  }
  else if (input[0]=== '#'){
    arr = window.document.getElementById(input.substring(1));
    // if no result, replace null with []
    if (arr === null){
      result.obj = [];
    }
    else {
      result.obj = [arr];
    }
  }
  else {
    arr = window.document.getElementsByTagName(input);
    result.obj = arr;
  }


  // if (result) {
  //   // this.result = [];
  //   arr = [];
  //   result.forEach(function(ele) {
  //     arr.push(jQuery(ele));
  //   });
  //   this.result = arr;
  // }
  // else {
  //   this.result = [];
  // }

  result.length = function() {
    return result.obj.length; // returns a number
  },

  // result.foo = function(pos) {
  //   return "foo method";
  // },

  result.idx = function(pos) {
    // return this.result[pos]; //currently returns DOM obj
    return jQuery(result.obj[pos]);
  };


  return result;
}

// Alias function
var $ = function(input) {
  return jQuery(input);
};













