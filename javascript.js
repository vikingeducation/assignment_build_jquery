var jQuery = function(input) {

  if (!(this instanceof jQuery)) return new jQuery(input);

  this.input = input;

  this.each = function(func) {
    for (var i = 0; i < this.length; i++) {
      func(this.idx(i), i);
    }
  }

  this.collection = function() {
    // single selectors
    var term = this.input.slice(1, this.input.length);
    switch (this.input[0]) {
      case '.':
        return document.getElementsByClassName(term);
      case '#':
        return document.getElementById(term);
      case '<':
        return [this.input];
    }
    // chained selectors
    if (this.input.split(/\ |\.|\#|\[\:|\=/g).length > 1) {
      return [document.querySelector(this.input)];
    }
    // plain old tag name
    return document.getElementsByTagName(this.input);
  }

  this.idx = function(i) {
    return this.collection()[i];
  };

  this.length = this.collection().length;

  this.hasClass = function(name) {
    for (var i = 0; i < this.length; i++) {
      if (this.idx(i).classList.contains(name)) {
        return true;
      }
    }
    return false;
  }

  this.addClass = function(name) {
    this.each(function(el) {
      el.classList.add(name);
    });
  }

  this.removeClass = function(name) {
    this.each(function(el) {
      el.classList.remove(name);
    });
  }

  this.toggleClass = function(name) {
    this.each(function(el) {
      el.classList.toggle(name);
    });
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
      this.each(function(el) {
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
            el.value = name;
            break;
        }
      });
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
        return window.getComputedStyle(this.idx(0), null).getPropertyValue(props);
      }
      // GETTER : .css(['height', 'width'])
      else if (props instanceof Array) {
        var values = {};
        this.each(function(el, i) {
          values[props[i]] = window.getComputedStyle(el, null).getPropertyValue(props[i]);
        })
        return values;
      }
      // SETTER : .css({height: x, width: y})
      if (typeof props === 'object') {
        this.each(function(el) {
          for (var key in props) {
            el.style.setProperty(key, props[key])
          }
        });
      }
    } else {
      // SETTER : .css('height', '45px')
      if (typeof props === 'string' && typeof vals === 'string') {
        // relative values
        if (vals.match(/(\-\=|\+\=)/)) {
          this.each(function(el, i) {
            var curr = parseInt(window.getComputedStyle(el, null).getPropertyValue(props));
            var num = parseInt(vals.match(/[\d]+/)[0]);
            vals[0] === '-' ? el.style.setProperty(props, curr - num + 'px') : el.style.setProperty(props, curr + num + 'px');
          });
        }
        // definite values
        else {
          this.each(function(el) {
            el.style.setProperty(props, vals);
          });
        }
      }
      // SETTER : .css('height', function(i){...})
      else if (typeof props === 'string' && typeof vals === 'function') {
        this.each(function(el, i) {
          vals(i, this.idx(i));
        });

      }
    }
  }

  this.height = function(height) {
    return this.css('height', height);
  }

  this.width = function(width) {
    return this.css('width', width);
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
        this.each(function(el) {
          for (var key in attr) {
            el.setAttribute(key, attr[key]);
          }
        });
      }
    } else {
      // SETTER: .attr('something', null)
      if (val === null) {
        this.each(function(el) {
            this.idx(i).removeAttribute(attr);
          })
          // SETTER: .attr('something', function(x, y){...})
      } else if (typeof val === 'function') {
        this.each(function(el, i) {
          vals(i, el);
        })

        // SETTER : .attr('attr', 'val')
      } else {
        this.each(function(el) {
          el.setAttribute(attr, val);
        })
      }
    }
  }

  this.html = function(html) {
    if (html === undefined) {
      return this.idx(0).innerHTML;
    }
    this.each(function(el) {
      el.innerHTML = html;
    });
  }

}
var $ = jQuery;