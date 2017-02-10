var jQuery = function(selector) {
  if (!(this instanceof jQuery)) return new jQuery(selector);
  
  this.selector = selector;

  if (selector instanceof Object) {
    this.collection = [selector];
  } else {
    this.collection = document.querySelectorAll(selector);
  };

  this.length = this.collection.length;

  this.idx = function(index) {
    return this.collection[index];
  };

  this.each = function(func) {
    this.collection.forEach(function(element) {
      func(element);
    });
  };

  this.hasClass = function(name) {
    var collection = this.collection;
    for (var i = 0; i < collection.length; i++) {
      var classes = collection[i].className
                                 .split(/\s+/);
      for (var j = 0; j < classes.length; j++) {
        if (name === classes[j]) return true;
      };
    };
    return false;
  };

  this.addClass = function(name) {
    this.each(function(element) {
      element.classList.add(name);
    });
    return jQuery(this.selector);
  };

  this.removeClass = function(name) {
    this.each(function(element) {
      element.classList.remove(name);
    });
    return jQuery(this.selector);
  };

  this.toggleClass = function(name) {
    this.each(function(element) {
      element.classList.toggle(name);
    });
    return jQuery(this.selector);
  };

  this.val = function(value) {
    if (value !== undefined) {
      this.each(function(element) {
        element.value = value;
      });
      return jQuery(this.selector);
    } else {
      return this.collection[0].value;
    };
  };

  this.css = function(name, value) {
    if (value !== undefined) {
      this.each(function(element) {
        element.style[name] = value;
      });
      return jQuery(this.selector);
    } else {
      var properties = getComputedStyle(this.collection[0]);
      return properties.getPropertyValue(name);
    };
  };

  this.height = function(value) {
    if (value !== undefined) {
      this.css("height", value);
      return jQuery(this.selector);
    } else {
      var properties = getComputedStyle(this.collection[0]);
      return properties.getPropertyValue("height");
    };
  };

  this.width = function(value) {
    if (value !== undefined) {
      this.css("width", value);
      return jQuery(this.selector);
    } else {
      var properties = getComputedStyle(this.collection[0]);
      return properties.getPropertyValue("width");
    };
  };

  this.attr = function(name, value) {
    if (value !== undefined) {
      this.each(function(element) {
        element.setAttribute(name, value);
      });
      return jQuery(this.selector);
    } else {
      return this.collection[0].getAttribute(name);
    };
  };

  this.html = function(value) {
    if (value !== undefined) {
      this.each(function(element) {
        element.innerHTML = value;
      });
      return jQuery(this.selector);
    } else {
      return this.collection[0].innerHTML;
    };
  };

};

$ = jQuery;
