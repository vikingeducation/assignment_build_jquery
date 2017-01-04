
var jQuery = function(input) {
  if (typeof input === 'string') {
    var search = jQuery.searchTypes[input[0]];
    if ( search ) {
      return jQuery.object( search(input.substr(1)) );
    }
    else {
      return jQuery.object( document.getElementsByTagName(input) );
    }
  } else if ('nodeType' in input) {
    return jQuery.object( input );
  }
  // TODO Add functionality for array of nodes
}

var $ = function(input) {
  return jQuery(input);
}

jQuery.searchTypes = {
  '#': function(id) { return document.getElementById(id); },
  '.': function(klazz) { return document.getElementsByClassName(klazz); }
}

// Scrum ?: How is this organized in real jQuery?
jQuery.object = function JQueryObject(collection) {
  if (!(this instanceof JQueryObject)) return new JQueryObject(collection);

  this.collection = collection.length ? collection : [collection];
  this.each = function( iterate_func ) {
    for (i = 0; i < this.collection.length; i++) {
      iterate_func( this.collection[i] );
    }
  };
  this.length = this.collection.length;
  this.idx = function(index) { return this.collection[index]; };

  this.hasClass = function(classQuery) {
    return this.collection[0].classList.contains(classQuery);
  }

  this.addClass = function(klazz) {
    if (klazz) {
      this.each( function(element) { element.className += " " + klazz; } );
    }
    return this;
  }

  this.removeClass = function(klazz) {
    if (klazz) {
      klazzes = klazz.split(" ")

      this.each( function(element) {
        for (index in klazzes) {
          element.classList.remove(klazzes[index]);
        }
      });
    }
    return this;
  }

  this.toggleClass = function(klazz) {
    if (klazz) {
      klazzes = klazz.split(" ");

      this.each( function(element) {
        for (index in klazzes) {
          element.classList.toggle(klazzes[index]);
        }
      });
    }
    return this;
  }

  // Value passed in can be string, number, or array
  this.val = function (value) {
    if (value) {
      this.collection[0].value = value;
      return this;
    } else {
      return this.collection[0].value;
    }
  }

  this.css = function(property, value) {
    // TODO cases for array and obj params
    if (property && !value) {
      return getComputedStyle(this.collection[0]).getPropertyValue(property);
    } else if (property && value) {
      this.each( function(el) {
        el.style[property] = value;
      })
    return this;
    }
  }
 
  this.height = function(value) {
    if (!value) {
      return parseInt(this.css('height').slice(0,-2));
    } else {
      if (typeof value !== 'string') {
        value += 'px';
        console.log(value);
      }
      return this.css('height', value);
    }
  }

  this.width = function(value) {
    if (!value) {
      return parseInt(this.css('width').slice(0,-2));
    } else {
      if (typeof value !== 'string') {
        value += 'px';
        console.log(value);
      }
      return this.css('width', value);
    }
  }
}
