var jQuery = function(input) {
  if (!(this instanceof jQuery)) return new jQuery(input);
  this.input = input;
  this.collection = function() {
    // chained selectors
    if (this.input.split(' ').length > 1 || this.input.match(/\[|\]|\=|\:/g)) {
      return [document.querySelector(this.input)];
    }
    // single selectors
    var term = this.input.slice(1, this.input.length);
    switch (this.input[0]) {
      case '.':
        return document.getElementsByClassName(term);
      case '#':
        return document.getElementById(term);
      case '<':
        return [this.input];
      default:
        return document.getElementsByTagName(this.input);
    }
  };
  this.idx = function(i) {
    return this.collection()[i];
  };
  this.length = this.collection().length;
  this.hasClass = function(name) {
    for (var i = 0; i < this.length; i++) {
      if (this.idx(i).className.split(' ').indexOf(name) > 0) {
        return true;
      }
    }
    return false;
  };
  this.addClass = function(name) {
    for (var i = 0; i < this.length; i++) {
      this.idx(i).className += ' ' + name;
    }
  }
  this.removeClass = function(name) {
    for (var i = 0; i < this.length; i++) {
      var classes = this.idx(i).className.split(' ');
      if (classes.indexOf(name) > 0) {
        classes.splice(classes.indexOf(name), 1);
      }
      this.idx(i).className = classes.join(' ');
    }
  }
  this.toggleClass = function(name) {
    for (var i = 0; i < this.length; i++) {
      var classes = this.idx(i).className.split(' ');
      if (classes.indexOf(name) > 0) {
        classes.splice(classes.indexOf(name), 1);
      } else {
        classes.push(name);
      }
      this.idx(i).className = classes.join(' ');
    }
  }
  this.val = function(name) {
    if (this.length === 0) {
      return undefined;
    }
    // GET
    if (name === undefined) {
      return this.idx(0).value;
    }
    // SET
    else {
      for (var i = 0; i < this.length; i++) {
        var el = this.idx(i);
        switch (el.tagName.toLowerCase()) {
          case 'input':
            switch (el.type) {
              case 'checkbox':
              case 'radio':
                el.checked = el.value === name ? true : false;
                break;
              case 'text':
                el.value = name;
                break;
            }
            break;
          case 'option':
            el.selected = el.value === name ? true : false;
            break;
          default:
            this.idx(i).value = name;
            break;
        }
      }
    }
  }
  this.css = function(props, vals) {
    // just return undefined if props missing
    if (props === undefined) {
      return undefined;
    }
    if (vals === undefined) {
      // GETTER : .css('height')
      if (typeof props === 'string') {
        return getPropValue(this.idx(0), props);
      }
      // GETTER : .css(['height', 'width'])
      else if (props instanceof Array) {
        var values = {};
        for (var i = 0; i < props.length; i++) {
          values[props[i]] = getPropValue(this.idx(0), props[i]);
        };
        return values;
      }
      // SETTER : .css({height: x, width: y})
      if (typeof props === 'object') {
        for (var i = 0; i < this.length; i++) {
          for (var key in props) {
            this.idx(i).style.setProperty(key, props[key])
          }
        }
      }
    } else {
      // SETTER : .css('height', '45px')
      if (typeof props === 'string' && typeof vals !== 'function') {
        // relative values
        if (vals.match(/(\-\=|\+\=)/)) {
          for (var i = 0; i < this.length; i++) {
            var curr = parseInt(getPropValue(this.idx(0), props));
            var num = parseInt(vals.match(/[\d]+/)[0]);
            vals[0] === '-' ? this.idx(i).style.setProperty(props, curr - num + 'px') : this.idx(i).style.setProperty(props, curr + num + 'px');
          }
        }
        // definite values
        else {
          for (var i = 0; i < this.length; i++) {
            this.idx(i).style.setProperty(props, vals);
          }
        }
      }
      // SETTER : .css('height', function(i){...})
      else if (typeof props === 'string' && typeof vals === 'function') {
        for (var i = 0; i < this.length; i++) {
          vals(i, this.idx(i));
        }
      }
    }
  }
  this.height = function(height) {
    return width === undefined ? this.css('height') : this.css('height', height);
  }
  this.width = function(width) {
    return width === undefined ? this.css('width') : this.css('width', width);
  }
  this.attr = function(attr, val) {
    if (attr === undefined) {
      return;
    }
    if (val === undefined) {
      // GETTER : .attr('class')
      if (typeof attr === 'string') {
        return this.idx(0).getAttribute(attr);
      }
      // SETTER : .attr({class: 'x', data-v: 'y'})
      if (typeof attr === object && !attr instanceof Array) {
        for (var i = 0; i < this.length; i++) {
          for (var key in attr) {
            this.idx(i).setAttribute(key, attr[key]);
          }
        }
      }
    } else {
      // SETTER: .attr('something', null)
      if (val === null) {
        for (var i = 0; i < this.length; i++) {
          this.idx(i).removeAttribute(attr);
        }
        // SETTER: .attr('something', function(x, y){...})
      } else if (typeof val === 'function') {
        for (var i = 0; i < this.length; i++) {
          vals(i, this, idx(i));
        }
        // SETTER : .attr('attr', 'val')
      } else {
        for (var i = 0; i < this.length; i++) {
          this.idx(i).setAttribute(attr, val);
        }
      }
    }
  }
  this.html = function(html) {
    if (html === undefined) {
      return this.idx(0).innerHTML;
    } else {
      for (var i = 0; i < this.length; i++) {
        this.idx(0).innerHTML = html;
      }
    }
  }
  this.getPropValue = function(element, prop) {
    return window.getComputedStyle(element, null).getPropertyValue(prop);
  }
}
var $ = jQuery;