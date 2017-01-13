function jQuery(selector) {
  if (this instanceof jQuery) {
    if (selector[0] === '.') {
      selector = selector.substring(1);
      this.collection = document.getElementsByClassName(selector);
  } else if (selector[0] === '#') {
      selector = selector.substring(1);
      this.collection = [document.getElementById(selector)];
  } else if (selector instanceof Element) {
      this.collection = [selector];
  } else {
      this.collection = document.getElementsByTagName(selector);
    }
  } else {
    return new jQuery(selector);
  }

  this.length = this.collection.length;
  this.idx = function(index) {
    return this.collection[index];
  }
}

//alias
var $ = jQuery;


//
var a = jQuery(".header")
console.log(a)

var b = jQuery("#title")
console.log(b)

var c = jQuery("h1")
console.log(c)

var d = jQuery("asdf")
console.log(d)

var some = document.getElementById("example");
var e = jQuery(some)

var all = [a,b,c,d,e]
all.forEach(function(element){console.log(element.collection)})
