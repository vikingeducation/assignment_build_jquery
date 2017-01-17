//leaf node
//nodeList v.s. Node

// var jQuery = function(selectors) {
//
// };


function jQuery(selector) {
  if (this instanceof jQuery) {
    this.collection = (function() {
      if (selector[0] === '.') {
        return document.getElementsByClassName(selector.substring(1));
      } else if (selector[0] === '#') {
          return [document.getElementById(selector.substring(1))];
      } else if (selector instanceof Element) {
        return [selector];
      } else {
        return document.getElementsByTagName(selector);
      }
    })();
    this.length = this.collection.length;
    this.idx = function(index) {
      return this.collection[index];
    }

    this.each = function(callback){
      var len = this.length

      for (var i = 0; i < len; i++) {
        callback(this.collection[i]);
      }
    };

    this.hasClass = function(input) {
      var match = false;
      this.each(function(el) {
        var classes = el.classList;
        if (classes.contains(input)) {
          match = true;
        }
      })
      return match;
    };

    this.addClass = function(input) {
      this.each(function(el) {
        el.classList.add(input);
      })
      return this;
    };

    this.removeClass = function(input) {
      this.each(function(el) {
        el.classList.remove(input);
      })
      return this;
    };

    this.toggleClass = function(input) {
      this.each(function(el) {
        el.classList.toggle(input);
      })
      return this;
    };

    this.val = function(input) {
      if (input) {
        this.each(function(el) {
          el.value = input;
        })
      } else {
        return this.idx(0);
      }
    };

    this.css = function(cssProperty, cssValue) {
      if (cssValue) {
        this.each(function(el) {
          el[cssProperty] = cssValue;
        })
      } else {
        return this.idx(0).getAttribute(cssProperty)
      }
    };





    // return this.collection
  } else {
    return new jQuery(selector);
  }
}

// jQuery.prototype.length = function(){return this.collection.length;}


//
// jQuery.prototype.domQuery = function(selector) {
//   if (selector[0] === '.') {
//     return document.getElementsByClassName(selector.substring(1));
//   } else if (selector[0] === '#') {
//       return document.getElementById(selector.substring(1));
//   } else if (selector instanceof Element) {
//       return [selector];
//   } else {
//     return document.getElementsByTagName(selector);
//   }
// }

  // this.eachDo = function(callback) {
  //   var elements = this.collection;
  //
  //   for (var i = 0; i < elements.length; i++){
  //     callback(elements[i]);
  //   }
  // }
  //

//
//
//
//   this.each = function(callback){
//     var elements = this.collection;
//
//     for (var i = 0; i < elements.length; i++){
//       callback(elements[i]);
//     }
//   }
//
//   this.dance = function(input){return input + 'dance'}
//
//   this.hazClass = this.dance()
//
//
//
//
//   this.hasClass = function(input) {
//     var elements = this.collection;
//
//     for (var i = 0; i < elements.length; i++){
//       var element = elements[i];
//       var classes = element.classList;
//       if (classes.contains(input)) {
//         return true;
//       }
//     }
//     return false;
//   }
//
//   // this.addClass = function(input) {
//   //
//   // }
//
// }//end
//


//alias
var $ = jQuery;


//
var a = jQuery(".header")
console.log(a)

var b = jQuery("#title")
console.log(b)

var c = jQuery("p")
console.log(c)

var d = jQuery("asdf")
console.log(d)

var some = document.getElementById("example");
var e = jQuery(some)
console.log(e)

var all = [a,b,c,d,e]
all.forEach(function(element){console.log(element.collection)})
