function FooConstructor() {
  this.meth = function() {
    console.log("Hello world!")
  };

  this.prop = "Faker";
};

function BarConstructor() {
  this.meth = function() {
    console.log("Bye world!")
  };

  this.prop = "Baker";

  return this;
};

function SimpleObject() {

  // var each = function(collect, call) {
  //   for (var i = 0; i < collect.length; i++) {
  //     call(collect[i], i);
  //   }
  // };

  this.collection = [];

  this.each = function(func) {
    for (var i = 0; i < this.collection.length; i++) {
      func(this.collection[i], i);
    }
  }
};

test = new FooConstructor;
test.meth();
console.log(test.prop);

best = new BarConstructor;
best.meth();
console.log(best.prop);
console.log(typeof best);
proto = Object.getPrototypeOf(best);
console.log(proto);

myObj = new SimpleObject();
myObj.collection = [1,"foo",3];
myObj.each( function( el, index ) {
  console.log( "Item " + index + " is " + el);
});

SimpleObject.each = function(collect, call) {
  for (var i = 0; i < collect.length; i++) {
    call(collect[i], i);
  };
};

var collection = ['foo', 'bar', 'fiz', 'baz'];



SimpleObject.each(collection, function(el, index) {
  console.log( "Item " + index + " is " + el);
});
