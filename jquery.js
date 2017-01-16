//leaf node
//nodeList v.s. Node

//elNode

function jQuery(selector) {
  if (this instanceof jQuery) {
    this.collection = (function() {
      if (selector[0] === '.') {
        return document.getElementsByClassName(selector.substring(1));
      } else if (selector[0] === '#') {
          return [document.getElementById(selector.substring(1))];
      } else if (selector instanceof Element) {
        return [selector];
      } else {
        return document.getElementsByTagName(selector);
      }
    })();
    this.length = this.collection.length;
    this.idx = function(index) {
      return this.collection[index];
    }
  } else {
    return new jQuery(selector);
  }
}
//
// jQuery.prototype.domQuery = function(selector) {
//   if (selector[0] === '.') {
//     return document.getElementsByClassName(selector.substring(1));
//   } else if (selector[0] === '#') {
//       return document.getElementById(selector.substring(1));
//   } else if (selector instanceof Element) {
//       return [selector];
//   } else {
//     return document.getElementsByTagName(selector);
//   }
// }

  // this.eachDo = function(callback) {
  //   var elements = this.collection;
  //
  //   for (var i = 0; i < elements.length; i++){
  //     callback(elements[i]);
  //   }
  // }
  //

//
//
//
//   this.each = function(callback){
//     var elements = this.collection;
//
//     for (var i = 0; i < elements.length; i++){
//       callback(elements[i]);
//     }
//   }
//
//   this.dance = function(input){return input + 'dance'}
//
//   this.hazClass = this.dance()
//
//
//
//
//   this.hasClass = function(input) {
//     var elements = this.collection;
//
//     for (var i = 0; i < elements.length; i++){
//       var element = elements[i];
//       var classes = element.classList;
//       if (classes.contains(input)) {
//         return true;
//       }
//     }
//     return false;
//   }
//
//   // this.addClass = function(input) {
//   //
//   // }
//
// }//end
//


//alias
var $ = jQuery;


//
var a = jQuery(".header")
console.log(a)

var b = jQuery("#title")
console.log(b)

var c = jQuery("p")
console.log(c)

var d = jQuery("asdf")
console.log(d)

var some = document.getElementById("example");
var e = jQuery(some)
console.log(e)

var all = [a,b,c,d,e]
all.forEach(function(element){console.log(element.collection)})
