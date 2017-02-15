var jQuery = function(selector) {
  // ensures jQuery object returned
  if (!(this instanceof jQuery)) { 
    return new jQuery(selector);
  }

  // queried collection
  this.collection = [];
  if (typeof selector === 'string') {
      if (selector.charAt(0) === '.') {
        this.collection = document.getElementsByClassName(selector.slice(1));
      } else if (selector.charAt(0) === '#') {
        this.collection = document.getElementById(selector.slice(1));
      } else {
        this.collection = document.getElementsByTagName(selector);  
      }

  // when DOM node is input
  } else if (typeof selector === 'object') {
    this.collection.push(selector);
  }

  this.collection = this.collection.length ? this.collection : [this.collection];

  // 'implicit iteration'
  this.each = function(passedFunction) {
    this.collection.forEach( function(item) {
      passedFunction(item);
    }  );
  };

  // array-like methods + properties
  this.length = this.collection.length;
  this.idx = function(i) {
    return this.collection[i];
  };

  // 'full featured functionality'
  this.hasClass = function(className) {
    // this.each( function(item) {
    //   if (item.classList.contains(className)) return true;
    // })
    for(var i = 0; i < this.collection.length; i++) {
      if ( this.collection[i].classList.contains(className) ) {
        return true;
      }       
    }
    return false;
  };
  this.addClass = function(className) {
    this.each( function(item) {
      item.classList.add(className);
    } )
    return this;
  };
  this.removeClass = function(className) {
    this.each( function(item) {
      item.classList.remove(className);
    } )
    return this;
  };
  this.toggleClass = function(className) {
    if ( this.hasClass(className) ) {
      this.removeClass(className);
    } else {
      this.addClass(className);
    }
    return this;
  };
  this.val = function(value) {
    if (this.collection[0]) {
      if (value) {
        for(var i = 0; i < this.collection.length; i++) {
          this.collection[i].value = value;
        };
      } else {
        return this.collection[0].value;
      }
    }
    return this;
  };
  this.css = function( propertyName, value ) {
    if (value) {
      for(var i = 0; i < this.collection.length; i++) {
        this.collection[i].style[propertyName] = value;
      };
    } else {
      // doesn't work w stylesheet...
      return this.collection[0].style[propertyName];
    }
    return this;
  };
  this.height = function( value ) {
    this.css('height', value);
  };
  this.width = function(value) {
    this.css('width', value);
  };
  this.attr = function(attrName, value) {
    if (value) {
      for( var i = 0; i < this.collection.length; i++) {
        this.collection[i].getAttributeNode(attrName).value = value;
      };
    } else {
      return this.collection[0].getAttributeNode(attrName).value;
    }
    return this;
  };
  this.html = function( htmlString ) {
    if (htmlString) {
      //setter
      for(var i = 0; i < this.collection.length; i++) {
        this.collection[i].innerHTML = htmlString;
      };
    } else { 
      // getter
      return this.collection[0].innerHTML;
    }
  };
};

//alias
$ = jQuery;