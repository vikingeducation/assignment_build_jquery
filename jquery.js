function jQuery(selector) {
  if (!(this instanceof jQuery)) return new jQuery(selector);

  this.selector = selector;
  this.collection = parseSelector(this.selector);

  function parseSelector(selector) {
    if (selector[0] === "#") {
      return document.getElementById(selector.substring(1))
    } else if (selector[0] === ".") {
      return document.getElementsByClassName(selector.substring(1))
    } else if (typeof(selector) === 'object') {
      return [selector];
    } else {
      return document.getElementsByTagName(selector)
    };
  };

  this.length = this.collection.length;

  this.idx = function(index) {
    return this.collection[index];
  }

  this.hasClass = function(klass) {
    var boolean = false;
    iterate(function(ele) {
      if (ele.className.split(' ').indexOf(klass) > -1) {
        boolean = true;
      }
    }, this.collection)
    return boolean;
  }

  this.addClass = function(klass) {
    iterate(function(ele) {
      ele.classList.add(klass)
    }, this.collection)
    return this;
  };

  this.removeClass = function(klass) {
    iterate(function(ele) {
      ele.classList.remove(klass)
    }, this.collection)
    return this;
  }

  this.toggleClass = function(klass) {
    iterate(function(ele) {
      ele.classList.toggle(klass);
    }, this.collection);
    return this;
  }

  this.val = function(content) {
    if (content) {
      iterate(function(ele) {
        ele.setAttribute('value', content);
      }, this.collection)
      return this;
    } else {
      return this.collection[0].value();
    }
  }

  this.css = function(property, newValue) {
    if (typeof(property) === 'object') {
      iterate(function(ele) {
        for (var attr in property) {
          ele.style[attr] = property[attr];
        }
      }, this.collection);
      return this;
    } else if (newValue) {
      iterate(function(ele) {
        ele.style[property] = newValue;
      }, this.collection)
      return this;
    } else {
      return this.collection[0].style[property];
    }
  }

  this.height = function(num) {
    str_num = num + "px"
    if (num) {
      iterate(function(ele) {
        ele.style.height = str_num;
      }, this.collection)
      return this;
    } else {
      return this.collection[0].style.height;
    }
  }

  this.width = function(num) {
    str_num = num + "px"
    if (num) {
      iterate(function(ele) {
        ele.style.width = str_num;
      }, this.collection)
      return this;
    } else {
      return this.collection[0].style.width;
    }
  }


  function iterate(func, collection) {
    for (var i = 0; i < collection.length; i++) {
      func(collection[i], i);
    };
  };


};



// alias $
var $ = function(selector) {
  return jQuery(selector);
}
