function FooConstructor() {
  this.name = "foo";
  this.shot = function() {
    console.log(this.name);
  };
}

function BooConstructor(){
  if (!(this instanceof BooConstructor)){
  return new BooConstructor();
  }
  //the constructor properties and methods here
  this.name = "boo";
  this.shot = function() {
    console.log(this.name);
  };
}

function SimpleObject() {
  this.collection = [];
  this.each = function( callback ) {
    for(var i = 0; i < this.collection.length; i++) {
      callback( this.collection[i], i );
    }
  };
}

function jQuery(selector) {
  if (!(this instanceof jQuery)){
    var object =  new jQuery();
    object.setElements(selector);
    return object;
  }

  this.elements = [];

  this.setElements = function(selector) {
    if (selector instanceof Element) {
      this.elements = [selector];
      return this;
    }

    var prefix = selector[0];
    var results;
    switch (prefix) {
      case ".":
        console.log(selector + " is a class");
        selector = selector.slice(1);
        results = document.getElementsByClassName(selector);
        break;
      case "#":
        console.log(selector + " is an id");
        selector = selector.slice(1);
        results = document.getElementById(selector);
        break;
      default:
        console.log(selector + " is a tag");
        results = document.getElementsByTagName(selector);
        break;
    }
    this.elements = results;
  }

  this.length = function() {
    return this.elements.length;
  }

  this.idx = function(index) {
    return this.elements[index];
  }

  this.hasClass = function(className) {
    return this.elements[0].classList.contains(className);
  }

  this.each = function(callback) {
    for (var i = 0; i < this.length(); ++i) {
      callback(i, this.elements[i]);
    }
  }

  this.addClass = function(className) {
    this.each(function(index, element) {
      element.classList.add(className);
    });
    return this;
  }
}

var $ = jQuery;
