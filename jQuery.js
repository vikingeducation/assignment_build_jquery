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

  this.css = function(str) {
    
  }

}

var $ = jQuery;

function jQuery(str) {

  if (str == null) return new Object([]);

  if (typeof(str) === "object") {
    var jq = new JQ(str)
    if (jq.length == undefined) {
      jq.length = 1;
      jq[0] = str;
    } else {
      for (var i = 0; i < jq.length; i++){
        jq[i] = str[i];
      }
    }
    return jq;
  }
  var search_type = str[0];
  switch (search_type) {
    case ".":
      var arr = document.getElementsByClassName(str.slice(1,str.length));
      var jq = new JQ(arr);
      for (var i = 0; i < jq.length; i++){
        jq[i] = arr[i];
      }
      return jq;
    case "#":
      var elem = document.getElementById(str.slice(1,str.length));
      if (elem === null) {
        return new JQ();
      } else {
        var jq =  new JQ(elem);
        jq.length = 1;
        jq[0] = elem;
        return jq;
      }
    default:
      var arr = document.getElementsByTagName(str);
      var jq = new JQ(arr);
      for (var i = 0; i < jq.length; i++){
        jq[i] = arr[i];
      }
      return jq
  }
}


