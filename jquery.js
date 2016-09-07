function jQuery(selector) {
  if (!(this instanceof jQuery)) return new jQuery();


  this.parseSelector = function() {
    if(selector[0] === "#") {

    } else if(selector[0] === ".") {
      document.getElementsByClassName()

    } else {

    };
  };
};