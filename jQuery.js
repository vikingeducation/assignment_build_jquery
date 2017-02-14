var jQuery = function(selector) {
  if (!(this instanceof jQuery)) { 
    return new jQuery(selector);
  }

  this.collection = [];
  if (typeof selector === 'string') {
      if (selector.charAt(0) === '.') {
        this.collection = document.getElementsByClassName(selector.slice(1));
      } else if (selector.charAt(0) === '#') {
        this.collection = document.getElementById(selector.slice(1));
      } else {
        this.collection = document.getElementsByTagName(selector);   
      }
  } else if (typeof selector === 'object') {
    this.collection.push(selector);
  }

  this.length = this.collection.length;
  this.idx = function(i) {
    return this.collection[i];
  };

};

$ = jQuery;