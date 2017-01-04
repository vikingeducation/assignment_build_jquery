function $(input) {
  this.collection = [];
  this.selector = "";
  this.length = undefined;



  // SETTERS

  this.setLength = function() {
    this.length = this.collection.length;
  };

  this.setProperties = function(query) {
    this.collection = query;
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
    var inputText = input.slice(1);
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

  this.$object = function() {
    if ( !(this instanceof $) ) {
      return new $(input);
    }
  };

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
    console.log("this.addclass " + this);
    this.each(function(element) {
      console.log("this.each " + this);
      if (element.className) {
        element.className += " " + klassName;
      } else {
        element.className = klassName;
      }
    });
    return $object();
  };



  // RETURN OBJECT

  return this.$object();
}
var jQuery = $;

$('#ul');
