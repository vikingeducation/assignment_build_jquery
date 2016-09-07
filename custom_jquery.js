// var jQuery = function(input) {
//   var jquery_object;
//   switch(input[0]) {
//     case ".":
//       jquery_object = document.getElementsByClassName(input.slice(1));
//       break;
//     case "#":
//       jquery_object = document.getElementById(input.slice(1));
//       break;
//     default:
//       jquery_object = document.getElementsByTagName(input);
//       break;
//   }
//   return jquery_object;
// }

function jQuery(input) {
  if (!(this instanceof jQuery)) return new jQuery(input);

  var jquery_object;

  if (typeof input === "object") {
    jquery_object = [input];
  } else {
    switch(input[0]) {
      case ".":
        jquery_object = document.getElementsByClassName(input.slice(1));
        break;
      case "#":
        jquery_object = document.getElementById(input.slice(1));
        break;
      default:
        jquery_object = document.getElementsByTagName(input);
        break;
    }
  };

  this.collection = jquery_object;

  this.length = function() {
    return this.collection.length;
  };

  this.idx = function(num) {
    return this.collection[num];
  };

  this.hasClass = function(input) {
    for(var i = 0; i < this.collection.length; i++) {
      for(var j = 0; j < this.collection[i].classList.length; j++) {
        if(this.collection[i].classList[j] === input) {
          return true;
        }
      }
    }
    return false;
  };

  this.addClass = function(input) {
    for(var i = 0; i < this.collection.length; i++) {
      this.collection[i].className += " " + input;
    };
  };

  this.removeClass = function(input) {
    input = input.split(" ");
    for(var i = 0; i < this.collection.length; i++) {
      for(var j = 0; j < input.length; j++) {
        this.collection[i].className = this.collection[i].className.replace(input[j], "");
      }
    };
  }

  this.toggleclass = function(input) {
    input = input.split(" ");
    for(var i = 0; i < this.collection.length; i++) {
      for(var j = 0; j < input.length; j++) {
        if (this.collection[i].className.includes(input[j])) {
          this.collection[i].className = this.collection[i].className.replace(input[j], "");
        } else {
          this.collection[i].className += " " + input;
        }
      }
    };
  };

  this.val = function(input) {
    if (input) {
      return this.collection[0].attributes.value = input;
    } else {
      return this.collection[0].attributes.value;
    }
  }

  this.css = function(style, value) {
    if (value) {
      return this.collection[0].style[style] = value;
    } else {
      return this.collection[0].style[style];
    }
  }
}

var $ = jQuery;
