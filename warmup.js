function FooConstructor(name) {
  this.name = name;
  this.age = function(){
    return Math.random();
  }
}


var BarConstructor = function() {
  return {
    name:  'bill',
    age: function() {
      return Math.random();
    }
  };
}


function SimpleObject() {
  this.collection = [];
  this.each = function(myFunc) {
    for(var i = 0; i < this.collection.length; i++) {
      myFunc(this.collection[i], i);
    };
  };
}