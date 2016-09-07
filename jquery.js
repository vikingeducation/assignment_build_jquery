function jQuery(selector) {
  if (!(this instanceof jQuery)) return new jQuery(selector);

  this.selector = selector;
  this.collection = parseSelector(this.selector);

  function parseSelector(selector) {
    if (selector[0] === "#") {
      return document.getElementById(selector.substring(1))
    } else if (selector[0] === ".") {
      return document.getElementsByClassName(selector.substring(1))
    } else if (typeof(selector) === 'object') {
      return [selector];
    } else {
      return document.getElementsByTagName(selector)
    };
  };

  this.length = this.collection.length;

  this.idx = function(index) {
    return this.collection[index];
  }

  this.hasClass = function(klass) {
    var boolean = false;
    iterate(function(ele){
      if (ele.className.split(' ').indexOf(klass) > -1 ) {
        boolean = true;
      }
    }, this.collection)
    return boolean;
  }


  function iterate(func, collection) {
    for (var i = 0; i < collection.length; i++) {
      func(collection[i], i);
    };
  };


};



// alias $
var $ = function(selector) {
  return jQuery(selector);
}
