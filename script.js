
  function Foo() {
    this.someProperty = "Hi";
    this.someMethod = function() { console.log("this is the function") };
  };

  function Bar() {
    return new Foo();
  };

  function Baz() {
    if (!(this instanceof Baz)) return new Baz();
    this.someProperty = "Hi";
    this.someMethod = function() { console.log("this is the function")};
  };

  function SimpleObject() {
    if (!(this instanceof SimpleObject)) return new SimpleObject();
    this.collection = [1,2,3,4];
    this.each = function( iterate_func ) {
      this.collection.forEach( iterate_func );
    };
  }

  SimpleObject.each = function( collection, iterate_func ) {
    collection.forEach( iterate_func );
  };

  var jQuery = function(input) {
    if (typeof input === 'string') {
      var search = jQuery.searchTypes[input[0]];
      if ( search ) {
        return JQueryObject( search(input.substr(1)) );
      }
      else {
        return JQueryObject( document.getElementsByTagName(input) );
      }
    } else if ('nodeType' in input) {
      return JQueryObject( input );
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
  function JQueryObject(collection) {
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
  }
