var jQuery = function(selector) {
  var domQuery = document.querySelectorAll(selector);
  return new jQueryObject(domQuery);
};

function jQueryObject(nodeList) {
  this.collection = nodeList;
  this.length = this.collection.length;

  this.idx = function(index) {
    return this.collection[index];
  };

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
        el.style[cssProperty] = cssValue;
      })
    } else {
      return this.idx(0).style[cssProperty] || getComputedStyle(this.idx(0), null)[cssProperty];
    }
  };

  this.height = function(pxHeight) {
    if (pxHeight) {
      this.each(function(el) {
        el.style.height = pxHeight + 'px';
      })
    } else {
      return this.idx(0).style.height || getComputedStyle(this.idx(0), null).height;
    }
  };

  this.width = function(pxWidth) {
    if (pxWidth) {
      this.each(function(el) {
        el.style.width = pxWidth + 'px';
      })
    } else {
      return this.idx(0).style.width || getComputedStyle(this.idx(0), null).width;
    }
  };

  this.attr = function(attributeName, value) {
    if (value) {
      this.each(function(el) {
        el.setAttribute(attributeName, value);
      })
    } else {
      return this.idx(0).getAttribute(attributeName);
    }
  };

  this.html = function(htmlString) {
    if (htmlString) {
      this.each(function(el) {
        el.innerHTML = htmlString;
      })
    } else {
      return this.idx(0).innerHTML;
    }
  };
};

//alias
var $ = jQuery;



// var a = jQuery(".header")
// console.log(a)

// var b = jQuery("#title")
// console.log(b)

// var c = jQuery("p")
// console.log(c)

// var d = jQuery("asdf")
// console.log(d)

// var some = document.getElementById("example");
// var e = jQuery(some)
// console.log(e)

// var all = [a,b,c,d,e]
// all.forEach(function(element){console.log(element.collection)})
