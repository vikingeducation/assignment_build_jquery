
function jqueryObject(selection) {
    
  this.jselection = selection;

  this.length = this.jselection.length;

  this.idx = function (i) {
    return this.jselection[i];
  }

  this.hasClass = function(name) {
    for (var i = 0; i < this.jselection.length; i++) {
      if (this.jselection[i].className.includes(name)) {
        return true;
      }
    }
    return false;
  }

  this.each = function(func) {
    for (var i = 0; i < this.jselection.length; i++) {
      func(this.jselection[i], i);
    }
  }

  this.addClass = function(name) {
    this.each(function(el, idx) {
      el.className = el.className + " " + name;  
    })
  }

  this.removeClass = function(name) {
    this.each(function(el, idx) {
      var classList = el.className.split(' ');
      el.className = classList.filter(function(el, idx) { 
        return el !== name
      }).join(' ');
    })
  }
  
  this.toggleClass = function(name) {
    this.each(function(el, idx) {
      if (el.className.includes(name)) {
        jquery(el).removeClass(name);
      } else {
        jquery(el).addClass(name);
      }
    })
  }

  this.val = function(value) {
    if (value === undefined) {
      return this.jselection[0].value;
    } else {
      this.each(function(el, idx) {
        el.value = value;
      })
    }
  }

  // following functions do not support numerical pixel values, to save time

  this.css = function(property, value) {
    if (value === undefined) {
      return getComputedStyle(this.jselection[0])[property];
    } else {
      this.each(function(el, idx) {
        el.style.setProperty(property, value);
      })
    }
  } 

  this.height = function(value) {
    if (value === undefined) {
      return getComputedStyle(this.jselection[0])["height"];
    } else {
      this.css("height", value);
    }
  } 

  this.width = function(value) {
    if (value === undefined) {
      return getComputedStyle(this.jselection[0])["width"];
    } else {
      this.css("width", value);
    }
  }

  this.attr = function(name, value) {
    if (value === undefined) {
      return this.jselection[0].getAttribute(name);
    } else {
      this.each(function(el, idx) {
        el.setAttribute(name, value);
      })
    }
  }

  this.html = function(value) {
    if (value === undefined) {
      return this.jselection[0].innerHTML;
    } else {
      this.each(function(el, idx) {
        el.innerHTML = value;
      })
    }
  }
 
}

function jquery(selector) {

  var jselection = [];  

  function singleSelector(selector) {
    var firstChar = selector.split('')[0];
    switch(firstChar) {
      case "#":
        return [document.getElementById(selector.slice(1))];
      case ".":
        return document.getElementsByClassName(selector.slice(1));
      default: 
        return document.getElementsByTagName(selector);
    }
  }
  
  function transformDOM(domElement) {
    return [domElement];
  }

  if (typeof selector === "string") {
    jselection = singleSelector(selector);
  } else {
    jselection = transformDOM(selector);
  }

  return new jqueryObject(jselection);

}


// for testing

$(document).ready(function() {
  for (var i = 0; i < 4; i++) {
    $('<p class = "paragraph">More text</p>').insertAfter($('#random'));
    $('<p> I dont have class paragraph </p>').insertAfter($('#random'));
  }
  $('<p class = "one two"> I have two classes </p>').insertAfter($('#random'));
})

// saved regex attempt for later
// var reg = "/(?:^|\\b)(" + className + ")(?=\\b|$)/";

