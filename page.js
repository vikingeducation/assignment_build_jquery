window.onload = function() {

  jQuery = new jQ();

};


var jQ = function() {

  this.id = function(str) {
    document.getElementById(str);
  };

  this.tag = function(str) {
    document.getElementsByTagName("");
  };

  this.className = function(str) {
    document.getElementsByClassName("");
  };

  this.selector = function(str) {
    switch (str[0]) {
      case '.':
        this.result = className(str.slice(1, -1));
        break;
      case '#':
        this.result = id(str.slice(1, -1));
        break;
      default:
        this.result = tag(str);
    }
    return result;
  };

  this.result = "";

};