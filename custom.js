var jQuery = function(input) {
  this.collections = []

  if (!(this instanceof jQuery)) {
    return new jQuery(input)
  }

  if (typeof input === "string") {
    if (input.charAt(0).match(/\w/)) {
      this.collections = document.getElementsByTagName(input)
    } else if (input.startsWith("#")) {
      let idName = input.slice(1);
      this.collections.push(document.getElementById(idName))
    } else if (input.startsWith(".")) {
      let className = input.slice(1);
      this.collections = document.getElementsByClassName(className)
    } else {
      let elementName = input.slice(1).slice(0, -1);
      this.collections.push(document.createElement(elementName))
    }
  }
  else if (input instanceof Object) {
    if (input.length) {
      this.collections = input
    }
    this.collections.push(input)
  }

  // Length
  this.length = this.collections.length 

  // Index Methods
  this.idx = function(index) {
    if (index < this.collections.length)
      return this.collections[index]
  }

  // Each Methods  
  this.each = function(callback) {
    for (var i = 0; i < this.length; i++) 
      callback(this.collections[i]);    
  }

  this.first = function(callback) {
    return this.collections[0]
  }

  // Has Class
  this.hasClass = function(classname) {
    if (this.collections.length) 
      return this.first().className.includes(classname);
  }

  // Add Class
  this.addClass = function(classname) {
    this.each(function(element) {
      element.classList.add(classname);
    });

    return this;
  }

  // Remove Class
  this.removeClass = function(classname) {
    this.each(function(element) {
      element.classList.remove(classname);
    });

    return this;
  }

  // Toggle Class
  this.toggleClass = function(classname) {
    this.each(function(element) {
      element.classList.toggle(classname);
    });

    return this;
  }

  // Value
  this.val = function(input) {
    console.log(this.collections.length)
    if (this.collections.length)
      if (input) {
        this.first().setAttribute("value", input);
        return this;
      } else {
        return this.first().getAttribute("value");
      }
  }

    // CSS
  this.css = function(styleName, value) {
    styleName = styleName.split("-");
    for (var i = 1; i < styleName.length; i++) {
      styleName[i] = 
        styleName[i].charAt(0).toUpperCase() + styleName[i].slice(1);
    }
    styleName = styleName.join("");
    if (this.collections.length)  {
      if(value) {
        this.first().style[styleName] = value;
        return this;
      } else {
        return this.first().style[styleName];
      }

    }
  }



  return this
}

$ = jQuery;



// if (input == null) {
//     return this
//   }

//   if (input.charAt(0).match(/\w/)) {
//     elements = document.getElementsByTagName(input)
//   }
//   if (input.startsWith("#")) {
//     let idName = input.slice(1)
//     elements.push(document.getElementById(idName))
//   }
//   if (input.startsWith(".")) {
//     let className = input.slice(1)
//     elements = document.getElementsByClassName(className)
//   } 
//   return this