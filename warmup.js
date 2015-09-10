function FooConstructor() {
  this.name = 'bill';
  this.guess = function(){
    return Math.random();
  }
}


var BarConstructor = function() {
  function BarConstructor() {
    this.name = 'bill';
    this.guess = function() {
      return Math.random();
    }
  }
  return new BarConstructor();
}



function SimpleObject() {
  this.collection = [];
  this.each = function(myFunc) {
    for(var i = 0; i < this.collection.length; i++) {
      myFunc(this.collection[i], i);
    };
  };
}