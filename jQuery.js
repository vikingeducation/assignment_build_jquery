function JQ(collection){
  this.length = collection.length;

  this.idx = function(num){
    return collection[num]
  };

  this.hasClass = function(str) {
    for (var i = 0; i < this.length; i++) {
      var classes = this[i].className;
      var class_arr = classes.split(" ");
      for (var j = 0; j < class_arr.length; j++) {
        if (class_arr[j] === str) {
          return true;
        }
      };
    };
    return false;
  }

  this.addClass = function(str) {
    for (var i = 0; i < this.length; i++) {
      if (!$(this[i]).hasClass(str)) {
        this[i].className += " " + str;
      };
    }
  }

  this.removeClass = function(str) {
    for (var i = 0; i < this.length; i++){
      // if this[i].hasClass(str) == true, then remove class, else no nothing
      if ($(this[i]).hasClass(str)) {
        this[i].className = this[i].className.replace(str,"")
      }
    }
  }

  this.toggleClass = function(str) {
    for (var i = 0; i < this.length; i++) {
      if ($(this[i]).hasClass(str)) {
        this[i].className = this[i].className.replace(str,"")
      } else {
        this[i].className += " " + str;
      }
    };
  }

  this.val = function(str) {
    if (str) {
      for (var i = 0; i < this.length; i++) {
        this[i].value = str;
      };
    } else {
      for (var i = 0; i < this.length; i++) {
        if (this[i].value) return this[i].value;
      };
    };
  }

  this.css = function(propName, setter) {
    if (setter) {
      for (var i = 0; i < this.length; i++) {
        this[i].style[propName] = setter;
      };
    } else {
      for (var i = 0; i < this.length; i++) {
        if (this[i].style[propName]) return this[i].style[propName];
      };
    };
  }

  this.height = function(setter) {
    if (setter) {
      for (var i = 0; i < this.length; i++) {
        this[i].style["height"] = setter;
      };
    } else {
      for (var i = 0; i < this.length; i++) {
        if (this[i].style["height"]) return parseInt(this[i].style["height"]);
      };
    };
  }

  this.width = function(setter) {
    if (setter) {
      for (var i = 0; i < this.length; i++) {
        this[i].style["width"] = setter;
      };
    } else {
      for (var i = 0; i < this.length; i++) {
        if (this[i].style["width"]) return parseInt(this[i].style["width"]);
      };
    };
  }

  this.attr = function(propName, setter) {
    if (setter) {
      for (var i = 0; i < this.length; i++) {
        this[i].setAttribute(propName, setter);
      };
    } else {
      for (var i = 0; i < this.length; i++) {
        if (this[i].getAttribute(propName)) return this[i].getAttribute(propName);
      };
    };
  }

  this.html = function(htmlString) {
    if (htmlString) {
      for (var i = 0; i < this.length; i++) {
        this[i].innerHTML = htmlString;
      };
    } else {
        return this[0].innerHTML;
      };
  }


}

var $ = jQuery;

function jQuery(selector) {

  if (!selector) return new Object([]);

  if (typeof(selector) === "object") {
    var jq = new JQ(selector)
    if (jq.length == undefined) {
      jq.length = 1;
      jq[0] = selector;
    } else {
      for (var i = 0; i < jq.length; i++){
        jq[i] = selector[i];
      }
    }
    return jq;
  }

  var queries = selector.split(" ");
  if (queries.length > 1) {
    var arr = document.querySelector(selector);
    var jq = new JQ(arr);
    for (var i = 0; i < jq.length; i++){
      jq[i] = arr[i];
    }
    return jq;
  } else{
    var search_type = selector[0];
    switch (search_type) {
      case ".":
        var arr = document.getElementsByClassName(selector.slice(1,selector.length));
        var jq = new JQ(arr);
        for (var i = 0; i < jq.length; i++){
          jq[i] = arr[i];
        }
        return jq;
      case "#":
        var elem = document.getElementById(selector.slice(1,selector.length));
        if (elem === null) {
          return new JQ();
        } else {
          var jq =  new JQ(elem);
          jq.length = 1;
          jq[0] = elem;
          return jq;
          // this.length = 1;
          // this[0] = elem;
          // return this;
        }
      default:
        var arr = document.getElementsByTagName(selector);
        var jq = new JQ(arr);
        for (var i = 0; i < jq.length; i++){
          jq[i] = arr[i];
        }
        return jq
    }
  };
}


