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