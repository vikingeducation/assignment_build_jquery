function $(input) {
  if ( !(this instanceof $) ) {
    return new $(input);
  }

  this.collection = [];
  this.selector = "";
  this.length = undefined;


  // UTILITY

  this.arrayify = function(collection) { // takes any kind of collection and turns it into an array
    return [].slice.call(collection);
  };

  this.stripSelector = function(selector) {
    if (selector[0] === '.' || selector[0] === '#') {
      return selector.substr(1);
    } else {
      return selector;
    }
  };


  // SETTERS

  this.setLength = function() {
    this.length = this.collection.length;
  };

  this.setProperties = function(query) {
    this.collection = this.arrayify(query);
    this.setLength();
  };



  // FINDERS

  this.findById = function() {
    this.setProperties([document.getElementById(this.selector)]);
  };
  this.findByClass = function() {
    this.setProperties(document.getElementsByClassName(this.selector));
  };
  this.findByTag = function() {
    this.setProperties(document.getElementsByTagName(this.selector));
  };


  // PARSERS

  this.parseSelector = function(input) {
    var inputText = this.stripSelector(input);
    if (input[0] === '#') {
      this.selector = inputText;
      this.findById();
    } else if (input[0] === '.') {
      this.selector = inputText;
      this.findByClass();
    } else {
      this.selector = input;
      this.findByTag();
    }
  };

  this.parseInput = function(input) {
    if (input instanceof HTMLCollection) {
      this.setProperties(input);
    } else if (input.nodeType === undefined) {
      this.parseSelector(input);
    } else if (input.nodeType === 1) {
      this.setProperties([input]);
    }
  };
  this.parseInput(input);



  // METHODS

  this.idx = function(number) {
    return this.collection[number];
  };

  this.each = function(func) {
    for (var i = 0; i < this.collection.length; i++) {
      func(this.collection[i], i);
    }
  };

  this.hasClass = function(klassName) {
    // returns true if at least one element has the class
    var hasClass = false;
    this.each(function(element) {
      if (element.classList.contains(klassName)) {
        hasClass = true;
      }
    });
    return hasClass;
  };

  this.addClass = function(klassName) {
    this.each(function(element) {
      if (element.className) {
        element.className += " " + klassName;
      } else {
        element.className = klassName;
      }
    });
    return this;
  };

  this.removeClass = function(klassName) {
    klassName = this.stripSelector(klassName);
    this.each(function(element) {
      if (element.className === klassName) {
        element.className = "";
      } else if ( element.classList.contains(klassName) ){
        var classArray = element.className.split(' ');
        var klassIndex = classArray.indexOf(klassName);
        classArray.splice(klassIndex, 1);
        element.className = classArray.join(' ');
      }
    });
  };

  this.toggleClass = function(klassName) {
    this.each(function(element) {
      if ( $(element).hasClass(klassName) ) {
        $(element).removeClass(klassName);
      } else {
        $(element).addClass(klassName);
      }
    });
  };

  this.val = function(input) {
    if (input) { // setter
      this.each(function(element) {
        element.value = input;
      });
      return this;
    } else { // getter
      return this.collection[0].value;
    }
  };

  this.css = function(propertyName, value) {
    if (value) { // setter
      this.each(function(element) {
        element.style[propertyName] = value;
      });
      return this;
    } else { // getter
      return this.collection[0].style[propertyName];
    }
  };

  this.height = function(input) {
    if (input) { // setter
      this.each(function(element) {
        element.style["height"] = input;
      });
      return this;
    } else { // getter
      return this.collection[0].style["height"];
    }
  };

  this.width = function(input) {
    if (input) { // setter
      this.each(function(element) {
        element.style["width"] = input;
      });
      return this;
    } else { // getter
      return this.collection[0].style["width"];
    }
  };
}
var jQuery = $;

$('#ul');
