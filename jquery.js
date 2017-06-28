function jQuery(selector) {
  if (!(this instanceof jQuery)) {
    return new jQuery(selector);
  }

  if (selector instanceof HTMLCollection) {
    // handle multiple DOM nodes
    this.selection = selector;

  } else if (selector instanceof Element) {
    // handle single DOM nodes
    this.selection = [ selector ];

  } else if (selector[0] === '.') {
    // select on class
    this.selection = document.getElementsByClassName(selector.substring(1));

  } else if (selector[0] === '#') {
    // select on id
    this.selection = [ document.getElementById(selector.substring(1)) ];

  } else {
    // select on element
    this.selection = document.getElementsByTagName(selector);
  }

  // replace list with null with empty list
  if (this.selection[0] === null) {
    this.selection = []
  }

  // length property
  this.length = this.selection.length;

  // index method
  this.idx = function(index) {
    return this.selection[index];
  }

  // get method
  this.get = function() {
    return this.selection;
  }

  // each method
  this.each = function(toApply) {
    for (let index = 0; index < this.selection.length; index++) {
      toApply(index, this.selection[index]);
    }
  }

  // do any selected elements have a given class?
  this.hasClass = function(className) {
    let classFound = false
    this.each(function(index, element) {
      if (classFound) {
        return;
      }
      classFound = classFound || element.classList.contains(className);
    })
    return classFound;
  }

  // add a class
  this.addClass = function(selector) {
    for (let className of selector.split(' ')) {
      this.each(function(index, element) {
        element.classList.add(className);
      })
    }
  }

  // remove a class
  this.removeClass = function(selector) {
    for (let className of selector.split(' ')) {
      this.each(function(index, element) {
        element.classList.remove(className);
      })
    }
  }

  // toggle a class
  this.toggleClass = function(selector) {
    for (let className of selector.split(' ')) {
      this.each(function(index, element) {
        element.classList.toggle(className);
      })
    }
  }
}

$ = jQuery;
