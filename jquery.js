function jQuery(selector) {
  if (!(this instanceof jQuery)) {
    return new jQuery(selector);
  }

  if (selector instanceof HTMLCollection || selector instanceof NodeList) {
    // handle multiple DOM nodes
    this.selection = selector;

  } else if (selector instanceof Element) {
    // handle single DOM nodes
    this.selection = [ selector ];

  } else if (selector[0] === '.') {
    // select on class
    this.selection = document.getElementsByClassName(selector.substring(1));

  } else if (selector[0] === '#') {
    // select on id
    this.selection = [ document.getElementById(selector.substring(1)) ];

  } else {
    // select on element
    this.selection = document.getElementsByTagName(selector);
  }

  // replace list with null with empty list
  if (this.selection[0] === null) {
    this.selection = []
  }

  // length property
  this.length = this.selection.length;

  // index method
  this.idx = function(index) {
    return this.selection[index];
  }

  // get method
  this.get = function() {
    return this.selection;
  }

  // each method
  this.each = function(toApply) {
    for (let index = 0; index < this.selection.length; index++) {
      toApply(index, this.selection[index]);
    }
  }

  // do any selected elements have a given class?
  this.hasClass = function(className) {
    let classFound = false
    this.each(function(index, element) {
      if (classFound) {
        // break as soon as we find a matching element
        return;
      }
      classFound = classFound || element.classList.contains(className);
    })
    return classFound;
  }

  // add a class
  this.addClass = function(selector) {
    for (let className of selector.split(' ')) {
      this.each(function(index, element) {
        element.classList.add(className);
      })
    }
    return this;
  }

  // remove a class
  this.removeClass = function(selector) {
    for (let className of selector.split(' ')) {
      this.each(function(index, element) {
        element.classList.remove(className);
      })
    }
    return this;
  }

  // toggle a class
  this.toggleClass = function(selector) {
    for (let className of selector.split(' ')) {
      this.each(function(index, element) {
        element.classList.toggle(className);
      })
    }
    return this;
  }

  // get/set the value of the first/all element(s)
  this.val = function(value) {
    if (value != undefined) {
      // we're a setter
      this.each(function(index, element) {
        element.value = value;
      })
      return this;
    } else {
      // we're a getter
      if (this.selection[0] && this.selection[0].value) {
        return this.selection[0].value;
      } else {
        // match the real jQuery's API
        return '';
      }
    }
  }

  // get/set css properties
  this.css = function(property, value) {
    if (value !== undefined) {
      // we're a setter
      this.each(function(index, element) {
        element.style.setProperty(property, value);
      })
    } else if (typeof property == 'object') {
      // we've got an object, iterate and recurse
      for (let key in property) {
        this.css(key, property[key]);
      }
    } else {
      //we're a getter
      if (this.selection[0]) {
        // we have at least one element to query
        return getComputedStyle(this.selection[0]).getPropertyValue(property);
      } else {
        return undefined;
      }
    }
    return this;
  }

  // get/set element heights
  this.height = function(value) {
    if (value !== undefined) {
      // we're a setter
      if (typeof value === 'number') {
        // default to pixels if we get a number
        value += 'px'
      }
      this.css('height', value);
      return this;
    } else {
      // we're a getter
      unitsHeight = this.css('height');
      if (unitsHeight === undefined) {
        // save us from the NaN monster
        return undefined;
      } else {
        return parseFloat(unitsHeight);
      }
    }
  }

  // get/set element widths
  this.width = function(value) {
    if (value !== undefined) {
      // we're a setter
      if (typeof value === 'number') {
        // default to pixels if we get a number
        value += 'px'
      }
      this.css('width', value);
      return this;
    } else {
      // we're a getter
      unitsHeight = this.css('width');
      if (unitsHeight === undefined) {
        // save us from the NaN monster
        return undefined;
      } else {
        return parseFloat(unitsHeight);
      }
    }
  }

  // get/set attribute properties
  this.attr = function(attribute, value) {
    if ((value === false) || (value === '')) {
      // delete the attribute if value is false or empty string
      this.each(function(index, element) {
        element.removeAttribute(attribute);
      })
    } else if (value !== undefined) {
      // set the attribute if valy is truthy
      this.each(function(index, element) {
        element.setAttribute(attribute, value);
      })
    } else if (typeof attribute == 'object') {
      // we've got an object, iterate and recurse
      for (let key in attribute) {
        this.attr(key, attribute[key]);
      }
    } else {
      // not setting, let's get!
      if (this.selection[0] && this.selection[0].getAttribute(attribute)) {
        return this.selection[0].getAttribute(attribute);
      } else {
        return undefined;
      }
    }
    return this;
  }

  // get/set element html
  this.html = function(htmlString) {
    if (htmlString !== undefined){
      // we're a setter
      this.each(function(index, element) {
        element.innerHTML = htmlString;
      })
      return this;
    } else {
      // we're a getter
      if (this.selection[0] && this.selection[0].innerHTML) {
        return this.selection[0].innerHTML;
      } else {
        // match the real jQuery API
        return '';
      }
    }
  }

}

$ = jQuery;
