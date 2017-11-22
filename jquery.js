/*jshint esversion: 6 */

window.onload = function() {
  let $ = jQuery;

  function jQuery(selector) {
    return new jQueryObj(selector);
  }

  function jQueryObj(selector) {
    //selection method to access the Dom
    this.selection = function() {
      if (typeof selector === "string") {
        let x = selector.slice(1);
        //jQuery("#some-id")
        if (selector.charAt(0) === "#") {
          if (document.getElementById(x) == null) {
            return [];
          } else {
            let y = [];
            y.push(document.getElementById(x));
            return y;
          }
          //jQuery(".some-class")
        } else if (selector.charAt(0) === ".") {
          return document.getElementsByClassName(x);
        } else {
          //Elements, e.g. jQuery("div")
          return document.getElementsByTagName(selector);
        }
      } else {
        //return single element from Node Selector
        return [selector];
      }
    };

    //SHORTHAND FOR this.selection
    var z = this.selection();

    //length property
    this.length = z.length;

    this.each = callback => {
      for (var i = 0; i < z.length; ++i) {
        callback(z[i], i);
      }
    };

    //idx method
    this.idx = num => z[num];

    //hasClass method, evaluates to true if any of the elements contain the class
    this.hasClass = str => {
      var check = false;
      this.each(function(el) {
        if (el.classList.contains(str)) {
          check = true;
        }
      });
      return check;
    };

    //addClass method, first check if element already contains class
    this.addClass = str => {
      this.each(function(el) {
        if (!el.classList.contains(str)) {
          el.className += ` ${str}`;
        }
      });
      //return this for chaining
      return this;
    };

    //removeClass method.
    //Used i-- b/c in instance that str = selector, z[i] is removed from z array
    //so if going i++, after first iteration z[0] has been removed from z, z[1] is now z[0] and is skipped
    this.removeClass = str => {
      for (var i = z.length - 1; i >= 0; i--) {
        z[i].classList.remove(str);
      }
      //return this for chaining
      return this;
    };

    this.toggleClass = str => {
      for (var i = z.length - 1; i >= 0; i--) {
        z[i].classList.toggle(str);
      }
      //return for chaining
      return this;
    };

    //get or change a forms selected value
    this.val = input => {
      if (input) {
        //setter for each
        this.each(function(el) {
          return (el.value = input);
        });
      } else {
        //getter for first element
        return z[0].value;
      }
      return this;
    };

    this.css = (propertyName, value) => {
      this.each(function(el) {
        //setter
        if (value) {
          el.style[propertyName] = value;
        } else {
          //getter
          console.log(el.style[propertyName]);
        }
      });
      return this;
    };

    this.height = input => {
      this.each(function(el) {
        //setter
        if (input) {
          //assuming px for simplicity
          el.style.height = `${input}px`;
        } else {
          //getter
          console.log(parseInt(el.style.height));
        }
      });
      return this;
    };

    this.width = input => {
      this.each(function(el) {
        //setter
        if (input) {
          //assuming px for simplicity
          el.style.width = `${input}px`;
        } else {
          //getter
          console.log(parseInt(el.style.width));
        }
      });
      return this;
    };

    this.attr = (attrName, value) => {
      if (value) {
        //setter for all elements matched
        this.each(function(el) {
          el.setAttribute(attrName, value);
        });
      } else {
        //getter for only the first element matched
        console.log(z[0].getAttribute(attrName));
      }
      return this;
    };

    this.html = txt => {
      if (txt) {
        //setter for all elements matched
        this.each(function(el) {
          el.innerHTML = txt;
        });
      } else {
        //getter for only the first element matched
        console.log(z[0].innerHTML);
      }
      return this;
    };

    //end of function jQueryObj
  }
};
