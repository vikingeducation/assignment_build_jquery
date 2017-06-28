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

  // ensure we store something
  if (!this.selection) {
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

}
