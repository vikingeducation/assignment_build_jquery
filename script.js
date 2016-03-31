var jQuery = function(selector){
  if (!(this instanceof jQuery)) {
    return new jQuery(selector);
  }

  // Why must I put this first when before order didn't matter?
  var getCollection = function(selector) {
    if (typeof selector === 'object') {
      return selector
    } else if (selector.charAt(0) === '#') {
      return [window.document.getElementById(selector.slice(1))];
    } else if (selector.charAt(0) === '.') {
      return window.document.getElementsByClassName(selector.slice(1));
    } else {
      return window.document.getElementsByTagName(selector);
    }
  };

  this.selector = selector;
  this.collection = getCollection(this.selector);

  this.length = function(){
    return this.collection.length;
  };

  this.idx = function(index){
    return this.collection[index];
  };

  return this;
};

var $ = function(selector){
  return jQuery.call(this, selector);
};