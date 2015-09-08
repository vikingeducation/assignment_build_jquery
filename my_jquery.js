var jQuery = function(input) {
  function jQuery() {
    if (typeof input === 'object') {
      this.collection = [input]
    }
    else if (input[0] === '.') {
      // find by class
      this.collection = document.getElementsByClassName(input.substring(1, input.length));
    }
    else if (input[0] === '#') {
      // find by id
      this.collection = [document.getElementById(input.substring(1, input.length))];
    }
    else {
      // find by element
      this.collection = document.getElementsByTagName(input);
    }


    this.length = function() {
      return this.collection.length;
    }

    this.idx = function(index) {
      return this.collection[index];
    }

    this.each = function(myFunc) {
      for(var i = 0; i < this.collection.length; i++) {
        myFunc(this.collection[i], i);
      };
    }

    this.hasClass = function(className) {
      var node = this.collection[0];
      return (node.getElementsByClassName(className).length > 0) ? true : false;
    }

    this.addClass = function(newClass) {
      this.each(function(el) {
        el.className = (el.className + " " + className).trim();
      });
      return this;
    }

    this.removeClass = function(classToRemove) {
      this.each(function(el) {
        var currentClasses = el.className
        el.className = currentClasses.replace(classToRemove, "").trim();
      });
      return this;
    }

    this.toggleClass = function(className) {
      var regex = new RegExp("(^| )" + className + "( |$)")

      // when state not given
      this.each(function(el) {
        if (regex.test(el.className)) {
          var currentClasses = el.className
          el.className = currentClasses.replace(className, "").trim();
        }
        else {
          // add class?
          el.className = (el.className + " " + className).trim();
        }
      })
      return this;
    }

    this.val = function(setValue) {
      if (typeof setValue === 'undefined') {
        var node = this.collection[0];
        return node.getAttribute('value');
      }
      else {
        for(var i = 0; i < this.collection.length; i++) {
          if (typeof setValue === 'function') {
            var value = setValue(i);
          }
          else {
            var value = setValue;
          }
          this.collection[i].setAttribute('value', value);
        }
        return this;
      }
    }

    this.css = function(propertyName, setValue) {
      if (typeof setValue === 'undefined') {
        var node = this.collection[0];
        return getComputedStyle(node)[propertyName];
      }
      else {
        for(var i = 0; i < this.collection.length; i++) {
          if (typeof setValue === 'function') {
            var value = setValue(i);
          }
          else {
            var value = setValue;
          }
          this.collection[i].style[propertyName] = value;
        }
        return this;
      }
    }

    this.height = function(setValue) {
      if (typeof setValue === 'undefined') {
        var node = this.collection[0];
        return getComputedStyle(node).height;
      }
      else {
        for(var i = 0; i < this.collection.length; i++) {
          if (typeof setValue === 'function') {
            var value = setValue(i);
          }
          else {
            var value = setValue;
          }
          this.collection[i].style.height = value;
        }
        return this;
      }
    }

    this.width = function(setValue) {
      if (typeof setValue === 'undefined') {
        var node = this.collection[0];
        return getComputedStyle(node).width;
      }
      else {
        for(var i = 0; i < this.collection.length; i++) {
          if (typeof setValue === 'function') {
            var value = setValue(i);
          }
          else {
            var value = setValue;
          }
          this.collection[i].style.width = value;
        }
        return this;
      }
    }

    this.attr = function(attributeName, setValue) {
      if (typeof setValue === 'undefined') {
        var node = this.collection[0];
        return node.getAttribute(attributeName);
      }
      else {
        for(var i = 0; i < this.collection.length; i++) {
          if (typeof setValue === 'function') {
            var value = setValue(i);
          }
          else {
            var value = setValue;
          }
          this.collection[i].setAttribute(attributeName, value);
        }
        return this;
      }
    }

    this.html = function(setHTML) {
      if (typeof setHTML === 'undefined') {
        var node = this.collection[0];
        return node.innerHTML.trim();
      }
      else {
        for(var i = 0; i < this.collection.length; i++) {
          if (typeof setHTML === 'function') {
            var value = setHTML(i);
          }
          else {
            var value = setHTML;
          }
          this.collection[i].innerHTML = value;
        }
        return this;
      }
    }


  }

  return new jQuery();
};

var $ = jQuery;