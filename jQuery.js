function $(input) {
  this.collection = [1];
  this.selector = "";
  this.length = undefined;

  this.setLength = function() {
    this.length = this.collection.length;
  }

  this.setProperties = function(query) {
    this.collection = query;
    this.setLength();
  }

  this.findById = function() {
    this.setProperties(document.getElementById(this.selector));
  };
  this.findByClass = function() {
    this.collection = document.getElementsByClassName(this.selector);
  };
  this.findByTag = function() {
    this.collection = document.getElementsByTagName(this.selector);
  };

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
  }

  this.parseInput = function(input) {
    if (input.nodeType === undefined) {
      this.parseSelector(input);
    } else if (input.nodeType === 1) {
      this.collection = [input];
    }
  };
  this.parseInput(input);

  this.idx = function(number) {
    return this.collection[number];
  }

  if ( !(this instanceof $) ) {
    return new $(input);
  }
}

$('#ul');
