(function(window) {

  // --------------------------------------------
  // My jQuery
  // --------------------------------------------

  // --------------------------------------------
  // Initialize
  // --------------------------------------------
  window.$ = function(options) {
    // ----------------------------------------
    // Properties
    // ----------------------------------------
    this.options = options || null;
    this.collection = [];
    this.length = 0;

    if (this.options && typeof this.options === 'string') {
      results = _getElementsBySelector(this.options);
      results = _toArray(results);
      this.collection = results;
    } else if (this.options && this.options instanceof HTMLElement) {
      this.collection.push(this.options);
    } else {
      console.log('Options are null');
    }

    this.length = this.collection.length;

    if (!(this instanceof $)) {
      return new $(this.options);
    }
  };

  // --------------------------------------------
  // Instance Methods
  // --------------------------------------------
  $.prototype.idx = function(index) {
    return this.collection[index];
  };

  $.prototype.hasClass = function(className) {
    return this.collection[0] && (this.collection[0].className.split(' ').indexOf(className) > -1);
  };

  $.prototype.each = function(func) {
    for (var i = 0; i < this.collection.length; i++) {
      func(this.collection[i], i, this.collection);
    }

    return $(this.options);
  };

  $.prototype.addClass = function(className) {
    this.each(function(element) {
      if (element) {
        var classNames = element.className.split(' ');
        classNames.push(className);
        element.className = classNames.join(' ');
      }
    });

    return $(this.options);
  };

  $.prototype.removeClass = function(className) {
    this.each(function(element) {
      if (element) {
        var classNames = element.className.split(' ');
        var regex = new RegExp(className);
        if (classNames.length > 1) {
          if (classNames.indexOf(className) === 0) {
            regex = new RegExp(className + ' ');
          } else {
            regex = new RegExp(' ' + className);
          }
        }
        element.className = element.className.replace(regex, '');
      }
    });

    return $(this.options);
  };

  $.prototype.first = function() {
    return this.collection.length ? this.collection[0] : null;
  };
  
  $.prototype.last = function() {
    return this.collection.length ? this.collection[this.collection.length - 1] : null;
  };

  $.prototype.toggleClass = function(className) {
    if (this.hasClass(className)) {
      this.removeClass(className);
    } else {
      this.addClass(className);
    }

    return $(this.options);
  };

  $.prototype.val = function(value) {
    this.first() && !value || (this.first().setAttribute('value', value));
    return this.first().getAttribute('value');
  };

  $.prototype.css = function(property, value) {
    this.each(function(element, index) {
      value = (value instanceof Function) ? value(index, element.style[property]) : value;

      if (typeof property === 'string') {
        property = _selectorize(property);
        element.style[property] = value;
      } else if (property instanceof Object) {
        var properties = property;
        for (var i in properties) {
          i = _selectorize(i);
          element.style[i] = properties[i];
        }
      }
    });

    if (property.constructor === Array) {
      var styles = {},
          properties = property;
      for (var i = 0; i < properties.length; i++) {
        property = _selectorize(properties[i]);
        styles[property] = getComputedStyle(this.first())
          .getPropertyValue(property);
      }
      return styles;
    }

    return this.first().style;
  };

  $.prototype.height = function(value) {
    if (value) {
      this.first().style.height = value;
    }

    return this.first().clientHeight;
  };

  $.prototype.width = function(value) {
    if (value) {
      this.first().style.width = value;
    }

    return this.first().clientWidth;
  };

  $.prototype.attr = function(attributeName, value) {
    this.each(function(element) {
      element.setAttribute(attributeName, value);
    });

    return this.first().getAttribute(attributeName, value);
  };

  $.prototype.html = function(value) {
    this.each(function(element) {
      element.innerHTML = value;
    });

    return this.first().innerHTML;
  };

  // --------------------------------------------
  // Class Methods
  // --------------------------------------------
  $.ready = function(func) {
    window.document.addEventListener('DOMContentLoaded', func);
  };

  // --------------------------------------------
  // Private Methods
  // --------------------------------------------
  var _getElementsBySelector = function(selector) {
    var firstChar = selector[0];
    if (firstChar === '#') {
      selector = selector.replace('#', '');
      return document.getElementById(selector);
    } else if (firstChar === '.') {
      selector = selector.replace('.', '');
      return document.getElementsByClassName(selector);
    } else {
      return document.getElementsByTagName(selector);
    }
  };

  var _toArray = function(nodeList) {
    var array = [];
    if (!(nodeList instanceof NodeList)) {
      array.push(nodeList);
    } else {
      for (var i = 0; i < nodeList.length; i++) {
        array.push(nodeList[i]);
      }
    }
    return array;
  };

  var _selectorize = function(str) {
    return str.replace(/[A-Z]/g, function(s) {
      return '-' + s.toLowerCase();
    });
  };

  // --------------------------------------------
  // Alternative Namespace
  // --------------------------------------------
  window.jQuery = $;


  // --------------------------------------------


  // --------------------------------------------
  // #puts
  // --------------------------------------------
  $.ready(function() {
    var output = document.getElementById('output');
    window.puts = function() {
      for (var i in arguments) {
        arg = arguments[i];
        output.innerHTML += arg + "\n";
        console.log(arg);
      }
    };
  });

})(window);


