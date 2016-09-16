// function Foo() {
//   this.prop = "sample"
// };
//
// function Bar() {
//   this.prop = "sample";
//   if (!(this instanceof Bar)) {
//     return new Bar();
//   }
//   else {
//   return this;
//   };
// };
//
//
// function SimpleObject() {
//   this.collection = [1,"foo",3];
//
//   this.each = function(func) {this.collection.forEach(func)};
//
//   // this.each = function(func) {
//   //   for (i = 0; i < this.collection.length; i++) {
//   //     func(this.collection[i], i, this.collection);
//   //   };
//   // };
//   this.each2 = function(arr, func) {
//     arr.forEach(func);
//   };
// };

function jQuery(string) {
  var a;

  if (string instanceof Node) {
    a = [string];
  }
  else if (string[0] === ".") {
    a = document.getElementsByClassName(string.substring(1));
  }
  else if (string[0] === "#") {
    a = [document.getElementById(string.substring(1))];
  }
  else {
    a = document.getElementsByTagName(string);
  };
  this.query = string;
  this.collection = a;
  this.length =  a.length;
  this.idx = function(index) {return a[index]};

  this.hasClass = function(string) {
    var bool = false;
    for (i = 0; i < a.length; i++) {
      for (j = 0; j < a[i].classList.length; j++) {
        if (a[i].classList[j] === string) {bool = true};
      };
    };
    return bool;
  };

  this.addClass = function(string){
    for (i = 0; i < a.length; i++) {
      if (a[i].attributes.class !== undefined) {
      a[i].attributes.class.value += " " + string.trim();
    }
    else {
      var typ = document.createAttribute("class")
      typ.value = string.trim();
      a[i].attributes.setNamedItem(typ);
    };
    };
  };

  this.removeClass = function(string) {
    var arr = string.trim().split(" ");
    for (i = 0; i < a.length; i++) {
      if (a[i].attributes.class !== undefined) {
        for (k = 0; k < arr.length; k++) {
          a[i].attributes.class.value = a[i].attributes.class.value.replace(arr[k], "");
        };
        a[i].attributes.class.value = a[i].attributes.class.value.trim().replace("  ", "");
        if (a[i].attributes.class.value === "") {a[i].attributes.removeNamedItem("class")};
      };
    };
  };

  this.toggleClass = function(string) {
    var arr = string.trim().split(" ");
    for (i = 0; i < a.length; i++) {
      if (a[i].attributes.class !== undefined) {
        for (k = 0; k < arr.length; k++) {
          if (a[i].attributes.class.value.includes(arr[k])) {
            a[i].attributes.class.value = a[i].attributes.class.value.replace(arr[k], "");
          }
          else {
            a[i].attributes.class.value += " " + arr[k];
          };
        };
      }
      else {
        var typ = document.createAttribute("class");
        typ.value = string;
        a[i].attributes.setNamedItem(typ);
      };
      a[i].attributes.class.value = a[i].attributes.class.value.trim().replace("  ", " ");
      if (a[i].attributes.class.value === "") {a[i].attributes.removeNamedItem("class")};
    };
  }

  this.css = function(input, istyle ) {
    if (typeof input === "string" && typeof istyle === "undefined") {
      return window.getComputedStyle(a[0])[input];
    } else if (input instanceof Array && typeof istyle === "undefined"){
      var ans = [];
      for (i = 0; i < input.length; i++) {
        ans.push(window.getComputedStyle(a[0])[input[i]]);
      };
      return ans;
    } else if (typeof istyle === "string") {
        if (a[0].attributes.style !== undefined) {
          a[i].attributes.class.value += " " + string.trim();
        } else {
          var typ = document.createAttribute("class")
          typ.value = string.trim();
          a[i].attributes.setNamedItem(typ);
        };
    } else if (input instanceof Object) {

    };

  };



  if (!(this instanceof jQuery)) {
    return new jQuery(string);
  }
  else {
    return this;
  };
}

function $(string) {
  return jQuery(string);
}
