function FooConstructor() {
  this.prop = "Hello";
  this.method = function() {
    console.log("Hello");
  }
};

function BarConstructor() {
  var BarConstructor = {
    barMethod: function() {},
    barProp: "bar!"
  }
  return BarConstructor;
};

function SimpleObject() {
  this.collection = [];

  this.each = function(method){
    for (var i = 0; i < this.collection.length; i++) {
      method(this.collection[i], i);
    }
  }; 
};

SimpleObject.each = function (collection, func) {
  for (var i = 0; i < collection.length; i++) {
    func(collection[i], i);
  }
};

function jQuery (cssSelector) {

  if (cssSelector[0] === ".") {
    var collection = document.getElementsByClassName(cssSelector.substring(1));
    return new jQueryCollection(collection);

  } else if (cssSelector[0] === "#") {
    var collection = [document.getElementById(cssSelector.substring(1))]; 
    return new jQueryCollection(collection);

  } else if (stringify(cssSelector)[0] === "<") {
    var collection = [stringify(cssSelector)];
    return new jQueryCollection(collection);

  } else {
    var collection = document.getElementsByTagName(cssSelector);
    return new jQueryCollection(collection);
  };
}

function stringify (node) {
  var tmp = document.createElement("div");
  tmp.appendChild(node);
  return tmp.innerHTML;
}

function $ (cssSelector) {
  return jQuery.call(undefined, cssSelector);
}

function jQueryCollection (collection) {
  this.length = collection.length;
  this.idx = function (index) {
    return collection[index];
  };

  this.each = function(method){
    for (var i = 0; i < this.length; i++) {
      method(this.idx(i), i);
    }
  };

  this.hasClass = function() {
    return this.idx(0).className;
  };

  this.addClass = function(newName) {
    this.each(function(node) {
      node.className += newName;
    });
  };

  // this.addClass = function(newName) {
  //   for (var i = 0; i < this.length; i++) {
  //     this.idx(i).className += newName;
  //   };
  // };

};


