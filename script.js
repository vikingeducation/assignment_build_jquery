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
    each: function(inputFunction, inputCol) {
      // option to each through input collection or main
      var col = inputCol || this.collection
      for ( i=0; i<col.length; i++ ) {
        inputFunction( col[i] );
      };
    },

    hasClass: function(className) {
      var result = false
      this.each( function(el){
        if ( el.classList.contains(className) ) {
          result = true
        }
      });
      return result;
    },

    addClass: function(className) {
      this.each( function(el){
        el.classList.add(className)
      });
      return this;
    },

    removeClass: function(className) {
      this.each( function(el){
        el.classList.remove(className)
      });
      return this;
    },

    toggleClass: function(className) {
      this.each( function(el){
        el.classList.toggle(className)
      });
      return this;
    },

    val: function(value) {
      var elem = this.idx(0);
    
      if ( ["select", "select-multiple"].includes(elem.type) ) {

        if (value === undefined) {          
          var selected = [];
          this.each( function(el) {
            if (el.selected) {selected.push(el.value)};
          }, elem.options)
          return selected;

        } else {

          this.each( function(el) {
            if ( value.includes(el.value) ) {
              el.selected = true;
            } else {
              el.selected = false;
            }
          }, elem.options);
          return this;
        }

      } else if ( ["radio", "checkbox"].includes(elem.type) ) {

        if ( value === undefined ) {
          var checked = [];
          this.each( function(el) {
            if (el.checked) {checked.push(el.value)};
          })
          return checked;

        } else {
          this.each( function(el) {
            if ( value.includes(el.value) ) {
              el.checked = true;
            } else {
              el.checked = false;
            }
          });
          return this;            
        }

      } else if ( elem instanceof HTMLInputElement ) {

        if ( value === undefined ) {
          return elem.value;
        } else {
          elem.value = value;
          return this;
        }

      };
    },

    css: function(propertyName) {
      var elem = this.idx(0)
      
      if (propertyName instanceof Array) {
        var values = [];
        this.each( function(prop) {
          values.push( 
            window.getComputedStyle(elem).getPropertyValue(prop) 
          );
        }, propertyName);
        return values;
      } else {
        return window.getComputedStyle(elem).getPropertyValue(propertyName);
      };
    }

  };

  return jQueryObj;
};

var $ = function(query) {
  return jQuery(query);
}