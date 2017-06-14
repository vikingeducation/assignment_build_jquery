(function(window){

  window.jQuery = function(input){
    this.input = input
    this.collection = [];

    // takes string and locates all dom elements with that string
    // returns collection of elements
    if (typeof this.input === 'string') {
        var results = _getElements(this.input)
        this.collection = results
      } else {
        this.collection.push(input);
      };

    if (!(this instanceof jQuery)) {
      return new jQuery(this.input);
    };
  };

  jQuery.prototype.idx = function(index){
    console.log(index)
    return this.collection[index]
  }

  jQuery.prototype.each = function(callback){
    for (var i=0; i<this.collection.length; i++){
      element = this.collection[i]
      callback(element, i)
    }
  };

  jQuery.prototype.hasClass = function(className){
    for (var i=0; i<this[0].classList.length; i++){
      if (this[0].classList[i] === className){
        return true
      }
    }
    return false
  };

  jQuery.prototype.addClass = function(className){
    this[0].classList.add(className);
    return this
  };

  jQuery.prototype.removeClass = function(className){
    this[0].classList.remove(className);
    return this
  };

  jQuery.prototype.toggleClass = function(className){
    this[0].classList.toggle(className);
    return this
  };

  jQuery.prototype.val = function(){
    return this[0].value
  };

  jQuery.prototype.css = function(prop, val){
    if (val === undefined){
      return this[0].style[prop];
    } else {
      this[0].style[prop] = val;
      return this;
    }
  };

  jQuery.prototype.height = function(prop){
    if (prop === undefined){
      return this[0].clientHeight
    } else {
      this[0].style.height = prop;
      return this
    }
  };

  jQuery.prototype.width = function(prop){
    if (prop === undefined){
      return this[0].clientWidth
    } else {
      this[0].style.width = prop;
      return this
    }
  };

  jQuery.prototype.attr = function(prop, val){
    if (val === undefined){
      return this[0].attributes[prop];
    } else {
      this[0].attributes[prop] = val;
      return this;
    }
  };

  jQuery.prototype.html = function(prop){
    if (prop === undefined){
      return this[0].innerHTML;
    } else {
      this[0].innerHTML = prop;
      return this;
    }
  };

  var _getElements = function(input){
    if (input[0] === '#'){
      input = input.slice(1);
      return document.getElementById(input);
    } else if (input[0] === '.'){
      input = input.slice(1);
      return document.getElementsByClassName(input);
    } else {
      return document.getElementsByTagName(input);
    }
  };

window.$ = jQuery

})(window);
