//Build jQuery
var jQuery;
jQuery = function jQuery(selector) {

  var jQ = new jQueryObject();

  if (typeof(selector) === "string") {
    if (selector[0] === ".") {
      jQ.insert(document.getElementsByClassName(selector.slice(1)));
    }
    else if (selector[0] === "#") {
      jQ.insert([document.getElementById(selector.slice(1))]);
    }
    else {
      jQ.insert(document.getElementsByTagName(selector));
    }
  } else {
      jQ.insert([selector]);
  }
  return jQ;
 }

function jQueryObject() {

  this.collection = [];
  this.length = 0;

  this.idx = function(idx) {
    return this.collection[idx]
  };

  this.insert = function(arr) {
    for(var i = 0; i < arr.length; i++ ){
      this.collection.push(arr[i]);
      this.length += 1;
    }
  };

  this.hasClass = function(classQ) {
    for(var i = 0; i < this.collection.length; i++ ){
      if (this.collection[i].className.split(" ").indexOf(classQ) !== -1)
        return true;
    }
    return false;
  }

  this.addClass = function(classQ) {
    for(var i = 0; i < this.collection.length; i++ ){
      this.collection[i].className += " " + classQ;
      return this;
    }
  }

  this.removeClass = function(classQ) {
    for(var i = 0; i < this.collection.length; i++ ){
      this.collection[i].className = this.collection[i].className.replace(classQ, "") ;
      return this;
    }
  }

  this.toggleClass = function(classQ) {
    for(var i = 0; i < this.collection.length; i++ ){
      if (this.collection[i].className.split(" ").indexOf(classQ) === -1) {
        jQuery(this.collection[i]).addClass(classQ);
      } else {
        jQuery(this.collection[i]).removeClass(classQ);
      }
    }
    return this;
  }

  this.val = function(setVal) {
    if (setVal === undefined) {
      return this.collection[0].value;
    }  else {
      for(var i = 0; i < this.collection.length; i++ ){
        this.collection[i].value = setVal;
      }
      return true;
    }
  }

  this.css = function(propertyName, setVal) {
    if (setVal === undefined) {
      return this.collection[0].style[propertyName];
    }  else {
      for(var i = 0; i < this.collection.length; i++ ){
        this.collection[i].style[propertyName] = setVal;
      }
      return true;
    }
  }

  this.height = function(setVal) {
    if (setVal === undefined) {
      return this.collection[0].clientHeight;
    }  else {
      for(var i = 0; i < this.collection.length; i++ ){
        this.collection[i].style['height'] = setVal;
      }
      return true;
    }
  }

  this.width = function(setVal) {
    if (setVal === undefined) {
      return this.collection[0].clientWidth;
    }  else {
      for(var i = 0; i < this.collection.length; i++ ){
        this.collection[i].style['width'] = setVal;
      }
      return true;
    }
  }

  this.attr = function(attrName, setVal) {
    if (setVal === undefined) {
      return this.collection[0][attrName];
    }  else {
      for(var i = 0; i < this.collection.length; i++ ){
        this.collection[i][attrName] = setVal;
      }
      return true;
    }
  }

  this.html = function(htmlString) {
    if (htmlString === undefined) {
      return this.collection[0].innerHTML;
    }  else {
      for(var i = 0; i < this.collection.length; i++ ){
        this.collection[i].innerHTML = htmlString;
      }
      return true;
    }
  }
}
