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
  }

  this.css = function(property, value){
    // putting property parameter returns the value of the property
    // putting in both property and value replaces the value of the property
  }
}

function $(selector){ return jQuery(selector);}
