function jQuery(selector) {
  if (this instanceof jQuery) {
    if (selector[0] === '.') {
      selector = selector.substring(1);
      this.collection = document.getElementsByClassName(selector);
  } else if (selector[0] === '#') {
      selector = selector.substring(1);
      this.collection = document.getElementById(selector);
  } else {
      this.collection = document.getElementsByTagName(selector);
    }
    // return this.collection 
  } else {
    return new jQuery(selector);
  }
}

var a = jQuery(".header")
console.log(a)

var b = jQuery("#title")
console.log(b)

var c = jQuery("h1")
console.log(c)

var d = jQuery("asdf")
console.log(d)
