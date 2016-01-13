FooConstuctor = function() {
  this.fooMethod = function() { return; }
  this.fooProp = "foo!";
};

function BarConstructor() {
  return {
    barProp: "bar!",
    barMethod: function() { return; }
  };
};

SimpleObject = function() {
  this.each = function(func) {
    // short way
    //return this.collection.forEach(func);

    // long way
    for ( i=0; i<this.collection.length; i++ ) {
      func( this.collection[i], i);
    };
  };
};

function jQuery(query) {

  var results = function(query) {
    if ( query[0] === "<" ) {
      return query;
    } else if ( query[0] === "#" ) {
      return document.getElementById(query.slice(1, query.length));
    } else if ( query[0] === "." ) {
      return document.getElementsByClassName(query.slice(1, query.length));
    } else if ( /[a-z]/i.test(query[0]) ) { 
      return document.getElementsByTagName(query);
    } else {  
      return null;
    }
  };

  var resultsToArray = function(query) {
    var r = results(query);
    if ( r.constructor === HTMLCollection ) {
      return Array.prototype.slice.call(r);
    } else {
      return new Array(r);
    };
  };

  var collection = resultsToArray(query);

  // collection set above so we can call length on it, otherwise "undefined"
  var jQueryObj = {

    collection: collection,

    length: function() {
      return this.collection.length;
    },

    idx: function(index) {
      return collection[index];
    },

    // adv collection functions
    each: function(func) {
      return this.collection.forEach(func);
    },

    hasClass: function(className) {
      var result = false
      this.each( function(el){
        if ( el instanceof HTMLElement && el.classList.contains(className) ) {
          result = true
        }
      });
      return result;
    },

    addClass: function(className) {
      this.each( function(el){
        if ( el instanceof HTMLElement ) {
          el.classList.add(className)
        }
      });
      return this;
    },

    removeClass: function(className) {
      this.each( function(el){
        if ( el instanceof HTMLElement ) {
          el.classList.remove(className)
        }
      });
      return this;
    },

    toggleClass: function(className) {
      this.each( function(el){
        if ( el instanceof HTMLElement ) {
          el.classList.toggle(className)
        }
      });
      return this;
    },

    val: function(value) {
      var result;

    }

  };

  return jQueryObj;
};

var $ = function(query) {
  return jQuery(query);
}