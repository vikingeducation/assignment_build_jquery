
var jquery = function(selector) {

  var jqueryObject ={};
  var jselection =[];

  if (selector[0] === ".") {jselection = document.getElementsByClassName(selector.substring(1))}

  else if (selector[0] === "#") {jselection[0] = document.getElementById(selector.substring(1))}

  else {jselection = document.getElementsByTagName(selector)}

  jqueryObject = {

  selection: jselection,

  idx: function(index) {
    return this.selection[index];
  },

  length: function() {
    return this.selection.length;
  },

  hasClass: function(className) {
    var cls;
    var clsA = [];
    for (i=0;i<this.selection.length;i++) {
      cls = this.selection[i].classList;
      for (k=0;k<cls.length;k++) {
      if (cls[k] === className) {
        clsA.push(i);
      }
      }
    }
    if (clsA.length >= 1) {
      return true;
    }
    else return false;
  },

  addClass: function(className) {
    for (i=0;i<this.selection.length;i++) {
      this.selection[i].className += " " + className;
    }
    return jqueryObject;
  },

  removeClass: function(className) {
    var cls;
    if (typeof className === "string") {
      for (i=0;i<this.selection.length;i++) {
        cls = this.selection[i].classList.value.toString();
        this.selection[i].setAttribute("class", cls.replace(className, ""));
      }
    } else {
      for (i=0;i<this.selection.length;i++) {
        this.selection[i].setAttribute("class", "");
      }
    }
    return jqueryObject;
  },

  toggleClass: function(className, state) {
    if (state !== undefined && state === true) {
      var cls;
      for (i=0;i<this.selection.length;i++) {
        cls = this.selection[i].classList.value.toString();
        this.selection[i].setAttribute("class", cls.concat(" ", className));
      }
    }
    else if (state !== undefined && state === false) {
      var cls;
      for (i=0;i<this.selection.length;i++) {
        cls = this.selection[i].classList.value.toString();
        this.selection[i].setAttribute("class", cls.replace(className, ""));
      }
    }
    else {
      var cls;
      for (i=0;i<this.selection.length;i++) {
        cls = this.selection[i].classList.value.toString();
        if (cls.match(className)) {
          this.selection[i].setAttribute("class", cls.replace(className, ""));
        }
        else {
          this.selection[i].setAttribute("class", cls.concat(" ", className));
        }
      }
    }
    return jqueryObject;
  },

  val: function(value) {
    if (value !== undefined) {
      for (i=0;i<this.selection.length;i++) {
        this.selection[i].value = value;
        return jqueryObject;
      }
    }
    else return this.selection[0].value;
  },

  css: function(propertyName, value) {
    if (typeof value === "string") {
      this.selection[0].style.setProperty(propertyName, value);
      return jqueryObject;
    }
    else if (typeof value === "number") {
      var valueN = value + "px";
      this.selection[0].style.setProperty(propertyName, valueN);
      return jqueryObject;
    }
    else {
      var sty = getComputedStyle(this.selection[0]);
      return sty[propertyName];
         /////getting key but not value!!!! >:(
    }
  },

  height: function(value) {
    if (value !== undefined) {
      if (typeof value === "number") {
        var valueN = value + "px";
      }
      else {
        var valueN = value;
      }
      for (i=0;i<this.selection.length;i++) {
        this.selection[i].style.setProperty("height", valueN)
      }
    }
    else {
      var sty = getComputedStyle(this.selection[0]);
      return sty.height;
    }
  },

  width: function(value) {
    if (value !== undefined) {
      if (typeof value === "number") {
        var valueN = value + "px";
      }
      else {
        var valueN = value;
      }
      for (i=0;i<this.selection.length;i++) {
        this.selection[i].style.setProperty("width", valueN)
      }
    }
    else {
      var sty = getComputedStyle(this.selection[0]);
      return sty.width;
    }
  },

  attr: function(attributeName, value) {
    if (value !== undefined) {
      if (value === null) {
        this.selection[0].removeAttribute(attributeName);
        return jqueryObject;
      }
      else if (typeof value === "number") {
        var valueN = value + "px";
      }
      else {
        var valueN = value;
      }
      for (i=0;i<this.selection.length;i++) {
        this.selection[i].setAttribute(attributeName, value);
      }
    }
    else {
      return this.selection[0].getAttribute(attributeName);
    }
  },

  html: function(htmlString) {
    if (htmlString !== undefined) {
      this.selection[0].innerHTML = htmlString;
      return jqueryObject;
    }
    else {
      return this.selection[0].innerHTML;
    }
  }

} //end of jqueryObject

  return jqueryObject;

} //end of jquery function

$ = jquery;


document.addEventListener("DOMContentLoaded", function(event) {
  console.log(jquery(".hello").html("This heading was changed with javascript!"));
});
