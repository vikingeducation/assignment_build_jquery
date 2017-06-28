function jQuery(selector) {
  if (!(this instanceof jQuery)) {
    return new jQuery(selector);
  }

  if (selector[0] === '.') {
    // select on class
    this.selection = document.getElementsByClassName(selector.substring(1));

  } else if (selector[0] === '#') {
    // select on id
    this.selection = [ document.getElementById(selector.substring(1)) ];

  } else {
    // select on element
    this.selection = document.getElementsByTagName(selector);
  }

  // ensure we return something
  if (!this.selection) {
    this.selection = []
  }
}
