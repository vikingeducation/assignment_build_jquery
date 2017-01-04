function $(input) {
  this.collection = [];
  this.selector = "";

  this.findById = function() {
    this.collection = document.getElementById(this.selector);
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
  };
  this.parseSelector(input);

  return this.collection;
}

$('#ul');
