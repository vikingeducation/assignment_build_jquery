var jQuery = function(selector) {
  this.collection;

  var each = function(collection, func) {
    for (var i = 0; i < collection.length; i++) {
      func(collection[i]);
    }
  };

  this.idx = function(index) {
    return this.collection[index];
  };

  this.hasClass = function(klass) {  
    var isPresent = false;
    each(this.collection, function(node) {
      if (node.className === klass) { isPresent = true };
    });
    return isPresent;
  };

  this.addClass = function(klass) {
    each(this.collection, function(node) {
      node.classList.add(klass);  
    });
    return this;
  };

  this.removeClass = function(klass) {
    each(this.collection, function(node) {
      node.classList.remove(klass);
    });
    return this;
  };

  this.toggleClass = function(klass) {
    return this.hasClass(klass) ? this.removeClass(klass) : this.addClass(klass)
  };

  this.val = function(value) {
    switch (typeof(value)) {
      case "undefined":
        return this.collection[0].value;
        break;
      case "string":
      case "number":
      case "object":
        each(this.collection, function(node) {
          node.value = value;
        });
        break;
      case "function":
        for (var i = 0; i < this.collection.length; i++) {
          this.collection[i].value = value(i, this.collection[i].value);
        }
        break;
    }
    return this;
  };

  this.css = function(propertyName, value) {
    for (var i = 0; i < this.collection.length; i++) {
      var node = this.collection[i];
      if (!value && node.style.hasOwnProperty(propertyName)) { return node.style[propertyName] }; 
      if ((typeof(value) === "string" || typeof(value) === "number") && node.style.hasOwnProperty(propetyName)) { 
        node.style[propertyName] = value;
      }
      if (typeof(value) === "function" && node.style.hasOwnProperty(propertyName)) {
        node.style[propertyName] = value(i, node.style[propertyName]);
      }
    } 
    return typeof(value) ? this : "";
  };

  this.height = function(value) {
    if (!value) { 
      return this.collection[0].clientHeight;
      } else {
        each(this.collection, function(node) {
          node.style.height = value(node.style.height);
        });
        return this;
      }
  };

  this.width = function(value) {
    if (!value) {
      return this.collection[0].clientWidth;
    } else {
      each(this.collection, function(node) {
        node.style.width = value(node.style.width);
      });
      return this;
    }
  };

  this.attr = function(attributeName, value) {
    if (!value) { return this.collection[0].getAttribute(attributeName) };
    if (typeof(value) === "function") {
      each(this.collection, function(node) {
        node.setAttribute(attributeName, value());
      });
      return this;
    }
  };

  this.html = function(content) {
    if (!value) { return this.collection[0].innerHTML };

  }

  if (!(this instanceof jQuery)) { return new jQuery(selector) };

  if (selector instanceof Object) {
    this.collection = [selector];
  } else if (selector[0] === ".") {
    this.collection = document.getElementsByClassName(selector.slice(1));
  } else if (selector[0] === "#") {
    this.collection = document.getElementById(select.slice(1));
  } else {
    this.collection = document.getElementsByTagName(selector.toLowerCase());
  }

  return this;
}

var $ = jQuery;var jQuery = function(selector) {
  this.collection;

  var each = function(collection, func) {
    for (var i = 0; i < collection.length; i++) {
      func(collection[i]);
    }
  };

  this.idx = function(index) {
    return this.collection[index];
  };

  this.hasClass = function(klass) {  
    var isPresent = false;
    each(this.collection, function(node) {
      if (node.className === klass) { isPresent = true };
    });
    return isPresent;
  };

  this.addClass = function(klass) {
    each(this.collection, function(node) {
      node.classList.add(klass);  
    });
    return this;
  };

  this.removeClass = function(klass) {
    each(this.collection, function(node) {
      node.classList.remove(klass);
    });
    return this;
  };

  this.toggleClass = function(klass) {
    return this.hasClass(klass) ? this.removeClass(klass) : this.addClass(klass)
  };

  this.val = function(value) {
    switch (typeof(value)) {
      case "undefined":
        return this.collection[0].value;
        break;
      case "string":
      case "number":
      case "object":
        each(this.collection, function(node) {
          node.value = value;
        });
        break;
      case "function":
        for (var i = 0; i < this.collection.length; i++) {
          this.collection[i].value = value(i, this.collection[i].value);
        }
        break;
    }
    return this;
  };

  this.css = function(propertyName, value) {
    for (var i = 0; i < this.collection.length; i++) {
      var node = this.collection[i];
      if (!value && node.style.hasOwnProperty(propertyName)) { return node.style[propertyName] }; 
      if ((typeof(value) === "string" || typeof(value) === "number") && node.style.hasOwnProperty(propetyName)) { 
        node.style[propertyName] = value;
      }
      if (typeof(value) === "function" && node.style.hasOwnProperty(propertyName)) {
        node.style[propertyName] = value(i, node.style[propertyName]);
      }
    } 
    return typeof(value) ? this : "";
  };

  this.height = function(value) {
    if (!value) { 
      return this.collection[0].clientHeight;
      } else {
        each(this.collection, function(node) {
          node.style.height = value(node.style.height);
        });
        return this;
      }
  };

  this.width = function(value) {
    if (!value) {
      return this.collection[0].clientWidth;
    } else {
      each(this.collection, function(node) {
        node.style.width = value(node.style.width);
      });
      return this;
    }
  };

  this.attr = function(attributeName, value) {
    if (!value) { return this.collection[0].getAttribute(attributeName) };
    each(this.collection, function(node) {
      if (typeof(value) === "function") {
        node.setAttribute(attributeName, value());
      } else {
        node.setAttribute(attributeName, value);
      }
    });
    return this;
  };

  this.html = function(content) {
    if (!content) { return this.collection[0].innerHTML };
    each(this.collection, function(node) {
      if (typeof(content) === "function") {
        node.innerHTML = content(node.innerHTML);
      } else {
        node.innerHTML = content;
      }
    });
    return this;
  }

  if (!(this instanceof jQuery)) { return new jQuery(selector) };

  if (selector instanceof Object) {
    this.collection = [selector];
  } else if (selector[0] === ".") {
    this.collection = document.getElementsByClassName(selector.slice(1));
  } else if (selector[0] === "#") {
    this.collection = document.getElementById(select.slice(1));
  } else {
    this.collection = document.getElementsByTagName(selector.toLowerCase());
  }

  return this;
}

var $ = jQuery;