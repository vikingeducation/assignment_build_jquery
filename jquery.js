var jQuery = function(ele) {

  if (!(this instanceof jQuery)) {
    return new jQuery(ele);
  }

  this.matches = [];

  var populateCollection = function(obj, elements){
    if ( elements instanceof HTMLCollection ){
      for(var i =0; i < elements.length; i++){
        obj.matches.push(elements.item(i));
      }
    }
    else {
      obj.matches.push(elements)
    }
  };

  if( typeof ele !== 'string' ){
    if (ele instanceof HTMLCollection){
      this.matches = (ele);
    }
    else {
      this.matches.push(ele)
    }
  }
  else if ( ele[0] == "#"){
    var search = ele.slice(1);
    var matchedElements = document.getElementById(search);
    populateCollection(this, matchedElements);
  }
  else if ( ele[0] == "."){
    var search = ele.slice(1);
    var matchedElements = document.getElementsByClassName(search);
    populateCollection(this, matchedElements);
  }
  else {
    var matchedElements = document.getElementsByTagName(ele);
    populateCollection(this, matchedElements);
  };

  this.length = function() {
    return this.matches.length;
  };

  this.idx = function(index){
    return this.matches[index];
  };

  this.hasClass = function(klass) {
    for (var i = 0; i < this.matches.length; i++) {
      if (this.matches[i].classList.contains(klass)){
        return true;
      }
    };
    return false;
  };

  this.addClass = function(klass) {
    for (var i = 0; i < this.matches.length; i++) {
      this.matches[i].classList.add(klass);
    }
  };

  this.removeClass = function(klass) {
    for (var i = 0; i < this.matches.length; i++) {
      this.matches[i].classList.remove(klass);
    }
  };

  this.toggleClass = function(klass) {
    for (var i = 0; i < this.matches.length; i++) {
      this.matches[i].classList.toggle(klass);
    }
  };

  this.val = function(input) {
    if (input) {
      for (var i = 0; i < this.matches.length; i++) {
        this.matches[i].value = input;
      }
    }
    else {
      return this.matches[0].value;
    }
  };

  this.css = function(property, value) {
    if (value) {
      for (var i = 0; i < this.matches.length; i++) {
        this.matches[i].style[property] = value;
      }

    }
    else {
      return this.matches[0].style[property];
    }
  };

  this.height = function(value){
    if(value){
      for (var i = 0; i < this.matches.length; i++) {
        this.matches[i].style.height = value;
      }
    }
    else{
      return this.matches[0].style.height;
    }
  }

  this.width = function(value){
    if(value){
      for (var i = 0; i < this.matches.length; i++) {
        this.matches[i].style.width = value;
      }
    }
    else{
      return this.matches[0].style.width;
    }
  }

  this.attr = function(attrName, value){
    if (value){
      for (var i = 0; i < this.matches.length; i++) {
        this.matches[i].attributes[attrName] = value;
      }
    }
    else {
      return this.matches[0].attributes[attrName];
    }
  }

  this.html = function(value){
    if(value){
      for (var i = 0; i < this.matches.length; i++) {
        this.matches[i].innerHTML = value;
      }
    }
    else{
      return this.matches[0].innerHTML;
    }
  }
}

var $ = jQuery;
