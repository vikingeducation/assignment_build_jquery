// var jQuery = function(input) {
//   var jquery_object;
//   switch(input[0]) {
//     case ".":
//       jquery_object = document.getElementsByClassName(input.slice(1));
//       break;
//     case "#":
//       jquery_object = document.getElementById(input.slice(1));
//       break;
//     default:
//       jquery_object = document.getElementsByTagName(input);
//       break;
//   }
//   return jquery_object;
// }

function jQuery(input) {
  if (!(this instanceof jQuery)) return new jQuery(input);

  var jquery_object;

  if (typeof input === "object") {
    jquery_object = [input];
  } else {
    switch(input[0]) {
      case ".":
        jquery_object = document.getElementsByClassName(input.slice(1));
        break;
      case "#":
        jquery_object = document.getElementById(input.slice(1));
        break;
      default:
        jquery_object = document.getElementsByTagName(input);
        break;
    }
  };

  this.collection = jquery_object;

  this.length = function() {
    return this.collection.length;
  };

  this.idx = function(num) {
    return this.collection[num];
  };
}

var $ = jQuery;
