function jQuery(input) {
  if (!(this instanceof jQuery)) return new jQuery(input);
  this.input = input;
  this.collection = function() {
    var term = this.input.slice(1, this.input.length);
    switch (this.input[0]) {
      case '.':
        return document.getElementsByClassName(term);
      case '#':
        return document.getElementById(term);
      case '<':
        return [this.input];
      default:
        return document.getElementsByTagName(this.input);
    }
  };
  this.idx = function(i) {
    return this.collection()[i];
  };
  this.length = this.collection().length;
}

var divs = jQuery('div');