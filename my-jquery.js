// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Let o be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of o with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = o.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = fromIndex | 0;

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of o with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of o with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in o && o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}

var jQuery = function(selectorOrNode) {
  // Make sure an instance of the jQuery function is returned
  if (!(this instanceof jQuery)) {
    return new jQuery(selectorOrNode);
  }

  // Prepare object properties
  this.collection = [];
  if (typeof selectorOrNode === "string" && selectorOrNode.length > 0) {
    if (selectorOrNode.indexOf(" ") !== -1 || selectorOrNode.indexOf(".") > 0 || selectorOrNode.indexOf("#") > 0) {
      this.collection = [document.querySelector(selectorOrNode)];
    } else {
      switch (selectorOrNode[0]) {
        case "#":
          this.collection = document.getElementById(selectorOrNode.slice(1));
          break;
        case ".":
          this.collection =  document.getElementsByClassName(selectorOrNode.slice(1));
          break;
        default:
          this.collection =  document.getElementsByTagName(selectorOrNode);
          break;
      }
    }
  } else if (selectorOrNode) {
    this.collection.push(selectorOrNode);
  }
  this.length = this.collection.length;

  // Prepare API functions
  this.idx = function(index) {
    return this.collection[index];
  }
  this.hasClass = function(className) {
    for (let i = 0; i < this.length; i++) {
      if (this.collection[i].className.indexOf(className) !== -1) {
        return true;
      }
    }
    return false;
  };
  this.addClass = function(className) {
    let newClassName = " " + className.trim();
    for (let i = 0; i < this.length; i++) {
      this.collection[i].className += (this.collection[i].className.indexOf(className) !== -1) ? "" : newClassName;
    }
    return this;
  };
  this.removeClass = function(classList) {
    let classes = classList.split(" ");
    for (let i = 0; i < classes.length; i++) {
      for (let j = 0; j < this.length; j++) {
        this.collection[j].className = this.collection[j].className.replace(classes[i], "").trim();
      }
    }
    return this;
  };
  this.toggleClass = function(classList) {
    let classes = classList.split(" ");
    for (let i = 0; i < classes.length; i++) {
      for (let j = 0; j < this.length; j++) {
        this.collection[j].className = (this.collection[j].className.indexOf(classes[i]) !== -1) ? this.collection[j].className.replace(classes[i], "") : this.collection[j].className + " " + classes[i];
      }
    }
    return this;
  };
  this.val = function(value) {
    if (typeof value !== "undefined") {
      if (Array.isArray(value)) {
        for (let i = 0; i < this.length; i++) {
          if (this.collection[i].hasAttribute("type") && this.collection[i].getAttribute("type") === "checkbox") {
            // Go through each child setting checkeed attribute if the value of the input is equal to the current value
            this.collection[i].checked = (value.indexOf(this.collection[i].value) !== -1) ? true : false;
          } else if (this.collection[i].tagName.toUpperCase() === "SELECT") {
            // Go through each child setting selected attribute if the value of the option is equal to the current value
            for (let j = 0; j < this.collection[i].options.length; j++) {
              this.collection[i].options[j].selected = (value.indexOf(this.collection[i].options[j].value) !== -1) ? true : false;
            }
          } else {
            this.collection[i].value = value;
          }
        }
        return this;
      } else {
        for (let i = 0; i < this.length; i++) {
          this.collection[i].value = value;
        }
        return value;
      }
    } else {
      if ("selectedOptions" in this.collection[0] && this.collection[0].hasAttribute("multiple")) {
        let values = [];
        for (let i = 0; i < this.collection[0].selectedOptions.length; i++) {
          values.push(this.collection[0].selectedOptions[i].value);
        }
        return values;
      } else if ("value" in this.collection[0]) {
        return this.collection[0].value;
      } else {
        return undefined;
      }
    }
  };
  this.css = function(propertyName, value) {
    if (typeof value !== "undefined") {
      for (let i = 0; i < this.length; i++) {
        this.collection[i].style[propertyName] = value;
      }
      return this;
    } else {
      if (this.collection[0].style.hasOwnProperty(propertyName)) {
        return this.collection[0].style[propertyName];
      } else {
        return "";
      }
    }
  };
  this.height = function(value) {
    if (typeof value !== "undefined") {
      for (let i = 0; i < this.length; i++) {
        this.collection[i].style.height = value;
      }
      return this;
    } else {
      return this.collection[0].offsetHeight;
    }
  };
  this.width = function(value) {
    if (typeof value !== "undefined") {
      for (let i = 0; i < this.length; i++) {
        this.collection[i].style.width = value;
      }
      return this;
    } else {
      return this.collection[0].offsetWidth;
    }
  };
  this.attr = function(attribute, value) {
    if (typeof value !== "undefined") {
      for (let i = 0; i < this.length; i++) {
        this.collection[i].setAttribute(attribute, value);
      }
      return this;
    } else {
      return this.collection[0].getAttribute(attribute);
    }
  };
  this.html = function(htmlStr) {
    if (typeof htmlStr !== "undefined") {
      for (let i = 0; i < this.length; i++) {
        this.collection[i].innerHTML = htmlStr;
      }
      return this;
    } else {
      return this.collection[0].innerHTML;
    }
  };
};
function $(selectorOrNode) {
  return jQuery(selectorOrNode);
}

// Tests
console.log("jQuery() instanceof jQuery:", jQuery() instanceof jQuery);
console.log("$ instanceof jQuery:", $() instanceof jQuery);
console.log("Return a jQuery object selecting all divs:", $("div"));
console.log("Add class to all divs then test for \"test-has-class\":", $("div").addClass("test-add-class").hasClass("test-has-class"));
console.log("Check length and verify addClass worked:", $(".test-add-class").length);
$("div").removeClass("test-add-class");
console.log("Verify removeClass worked:", $("div").hasClass("test-add-class"));
$("div").toggleClass("my-test-class");
console.log("Verify toggleClass works:", $(".my-test-class").length === 1);
console.log("Get multiple select value:", $(".multiple").val());
console.log("Set single select value:", $(".single").val());
console.log("Set multiple select value:", $(".multiple").val(["0", "2"]));
console.log("Set single select value:", $(".single").val(1));
console.log("Get div value:", $("div").val());
console.log("Set div value:", $("div").val());
console.log("Get div value again:", $("div").val());
console.log("Get css bg color of div:", $("div").css("background-color"));
console.log("Set css bg color of div:", $("div").css("background-color", "#000EEE"));
console.log("Get css bg color of div again:", $("div").css("background-color"));
console.log("Get height of div:", $("div").height());
console.log("Set height of div:", $("div").height(100));
console.log("Get height of div again:", $("div").height());
console.log("Get width of div:", $("div").width());
console.log("Set width of div:", $("div").width(600));
console.log("Get width of div again:", $("div").width());
console.log("Get attr of div:", $("div").attr("my-attr"));
console.log("Set attr of div:", $("div").attr("my-attr", "My attribute value"));
console.log("Get attr of div again:", $("div").attr("my-attr"));
console.log("Get html of div:", $("div").html());
console.log("Set html of div:", $("div").html("<span>I am new HTML!</span>"));
console.log("Get html of div again:", $("div").html());
