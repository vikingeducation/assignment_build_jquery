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
    a = document.getElementById(string.substring(1));
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
