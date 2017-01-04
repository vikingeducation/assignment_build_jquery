
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
      this.collection.forEach( iterate_func );
    };
    this.length = this.collection.length;
    this.idx = function(index) { return this.collection[index]; };
    
    this.hasClass = function(classQuery) {
      return this.collection[0].classList.contains(classQuery);
    }
  }
