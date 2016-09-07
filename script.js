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

function jQueryCollection (collection) {
  this.length = collection.length;
  this.idx = function (index) {
    return collection[index];
  };
};

function jQuery (cssSelector) {
  console.log(typeof cssSelector);

  if (cssSelector[0] === ".") {
    var collection = document.getElementsByClassName(cssSelector.substring(1));
    return new jQueryCollection(collection);

  } else if (cssSelector[0] === "#") {
    var collection = [document.getElementById(cssSelector.substring(1))]; 
    return new jQueryCollection(collection);

  } else if (cssSelector[0] === "<") {
    var collection = [cssSelector];
    console.log(collection);
    return new jQueryCollection(collection);

  } else {
    var collection = document.getElementsByTagName(cssSelector);
    return new jQueryCollection(collection);
  };
}

