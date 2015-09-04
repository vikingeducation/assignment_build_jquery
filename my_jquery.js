var jQuery = function(input) {
  function jQuery() {
    if (typeof input === 'object') {
      this.collection = [input]
    }
    else if (input[0] === '.') {
      // find by class
      this.collection = document.getElementsByClassName(input.substring(1, input.length));
    }
    else if (input[0] === '#') {
      // find by id
      this.collection = [document.getElementById(input.substring(1, input.length))];
    }
    else {
      // find by element
      this.collection = document.getElementsByTagName(input);
    }

    this.length = function() {
      return this.collection.length;
    }

    this.idx = function(index) {
      return this.collection[index];
    }
  }

  return new jQuery();
};

var $ = jQuery;