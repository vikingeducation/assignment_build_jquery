//Warmup

function Foo(){
  this.someProp = "value!";
  this.someMethod = function(){return "I'm a method!";};
}

var Bar = function() {
  return {
    someProp: "value",
    someMethod: function(){return "I'm a methdd!";}
  };
};

function Baz() {
  if (!(this instanceof Baz)) return new Baz();
  this.someProp = "value!";
  this.someMethod = function(){return "I'm a method!";};
}

function SimpleObject() {
  this.collection = [];
  this.each = function(someFunc){
    this.collection.forEach(function(element, index){
      someFunc(element, index);
    });
  };
}
SimpleObject.each = function(collection, someFunc){
  collection.forEach(function(element, index){
    someFunc(element, index);
  });
};

//Build jQuery


function jQuery(myInput) {
  if (!(this instanceof jQuery)) return new jQuery(myInput);
  if (typeof myInput == 'string') {
    if (myInput[0] === '.') {
      this.collection = document.getElementsByClassName(myInput.substring(1));
    } else if (myInput[0] === "#") {
      this.collection = document.getElementById(myInput.substring(1));
    } else {
      this.collection = document.getElementsByTagName(myInput);
    }
  } else if (myInput instanceof HTMLElement){
    this.collection = [myInput];
  }
  this.length = this.collection.length;
  this.idx = function(index) {
    return this.collection[index];
  };
  this.hasClass = function(string) {
    var found = false;
    jQuery.each(this.collection, function(el) {
      if (el.classList.contains(string)) {
        found = true;
      }
    });
    return found;
  };
  this.addClass = function(string) {
    var classes = string.split(" ");
    for (var i = 0; i < classes.length; i++) {
      jQuery.each(this.collection, function(el) {
        if (!el.classList.contains(classes[i])) {
          el.classList.add(classes[i]);
        }
      });
    }
    return this;
  };
  this.removeClass = function(string) {
    var classes = string.split(" ");
    for (var i = 0; i < classes.length; i++) {
      jQuery.each(this.collection, function(el) {
        el.classList.remove(classes[i]);
      });
    }
    return this;
  };
  this.toggleClass = function(string) {
    var classes = string.split(" ");
    for (var i = 0; i < classes.length; i++) {
      jQuery.each(this.collection, function(el) {
        el.classList.toggle(classes[i]);
      })
    }
    return this;
  };
  this.val = function(value) {
    if (value === undefined) {
      return this.idx(0).innerHTML;
    } else {
      jQuery.each(this.collection, function(el) {
        el.innerHTML = value;
      });
    }
    return this;
  };
  this.css = function(propertyName, value) {
    if (value === undefined) {
      var style = window.getComputedStyle(this.idx(0));
      return style.getPropertyValue(propertyName);
    } else {
      jQuery.each(this.collection, function(el) {
        el.style[propertyName] = value;
      });
    }
    return this;
  };
  this.height = function(value) {
    if (value === undefined) {
      var style = window.getComputedStyle(this.idx(0));
      return parseInt(style.getPropertyValue('height'), 10);
    } else {
      jQuery.each(this.collection, function(el) {
        if (!isNaN(value)) {
          el.style.height = value.toString() + "px";
        } else {
          el.style.height = value;
        }
      });
    }
    return this;
  };
  this.width = function(value) {
    if (value === undefined) {
      var style = window.getComputedStyle(this.idx(0));
      return parseInt(style.getPropertyValue('width'), 10);
    } else {
      jQuery.each(this.collection, function(el) {
        if (!isNaN(value)) {
          el.style.width = value.toString() + "px";
        } else {
          el.style.width = value;
        }
      });
      return this;
    }
  };
  this.attr = function(attributeName, value) {
    if (value === undefined && typeof attributeName !== 'object') {
      return this.idx(0).getAttribute(attributeName);
    } else if (value === undefined && typeof attributeName === 'object') {
      jQuery.each(this.collection, function(el) {
        for (var attribute in attributeName) {
          el.setAttribute(attribute, attributeName[attribute]);
        }
      });
      return this;
    } else {
      jQuery.each(this.collection, function(el) {
        el.setAttribute(attributeName, value);
      });
      return this;
    }
  };
}
jQuery.each = function(collection, someFunc) {
  for (var i = 0; i < collection.length; i++) {
    someFunc(collection[i], i);
  }
};

var $ = jQuery.bind();
var jCol = jQuery('.some');
console.log(jCol);






