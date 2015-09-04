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
    }

    this.removeClass = function(classToRemove) {
      this.each(function(el) {
        currentClasses = el.className
        el.className = currentClasses.replace(classToRemove, "").trim();
      });
    }

    this.toggleClass = function(className, state) {
      var regex = new RegExp("(^| )" + className + "( |$)")

      // when state not given
      this.each(function(el) {
        if (regex.test(el.className)) {
          currentClasses = el.className
          el.className = currentClasses.replace(className, "").trim();
        }
        else {
          el.className = (el.className + " " + className).trim();
        }
      })
    }


  }

  return new jQuery();
};

var $ = jQuery;