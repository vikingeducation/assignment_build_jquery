function jQuery(selector){
  if(!(this instanceof jQuery)){
    return new jQuery(selector);
  }
  this.results = [];
    if(selector[0] === "."){
      //look for class
      this.results = document.getElementsByClassName(selector.slice(1));
    }
    else if (selector[0] === "#"){
      //look for id 
      this.results.push(document.getElementById(selector.slice(1)));
    }
    else if (selector[0] === "<"){
      this.results.push(selector);
    }
    else{
      //look for element
      this.results = document.getElementsByTagName(selector);
    }
  
  this.length = this.results.length;

  this.idx = function(index){
    return this.results[index];
  };

  this.hasClass = function(klass){
    for (var i = 0; i < this.results.length; i++){
      if (this.results[i].className.includes(klass)) {
        return true;
      }
    }
    return false
  };

  this.addClass = function(klass){
    for (var i = 0; i < this.results.length; i++){
      this.results[i].className += " " + klass;
    }
  };

  this.removeClass = function(klass){
    var klassToRemove = new RegExp(klass);
    for (var i = 0; i < this.results.length; i++){
      this.results[i].className = this.results[i].className.replace(klassToRemove,"");
    }
  };

  this.toggleClass = function(klass){
    if (this.hasClass(klass)){
      this.removeClass(klass);
    }
    else{
      this.addClass(klass);
    }
  };

  this.val = function(arguments){
    //checks if can hold value
    if (this.results[0].value != undefined){
      // setter
      if (arguments){
        for (var i = 0; i < this.results.length; i++){
          this.results[i].value = arguments
        }
      } 
      // getter
      else {
        return this.idx(0).value;
      }
    }
  };

  this.css = function(property, value){
    // putting in both property and value replaces the value of the property
      if(value){
        for(var i = 0; i < this.results.length; i++){
          this.results[i].style[property] = value;
        }
      }
      else{
        return this.results[0].style[property];
      }
  };

  this.height = function(value){
    return this.css("height",value);
  };

  this.width = function(value){
    return this.css("width", value);
  };

  this.attr = function(attrName, value){
    if(value){
      for(var i = 0; i < this.results.length; i++){
        this.results[i].setAttribute(attrName, value);
      }
    }
    else{
      return this.results[0].getAttribute(attrName);
    }
  };

  this.html = function(htmlString){
    if(htmlString){
      for(var i = 0; i < this.results.length; i++){
        this.results[i].innerHTML = htmlString;
      }
    }
    else{
      return this.results[0].innerHTML;
    }
  };
}

function $(selector){ return jQuery(selector);}
