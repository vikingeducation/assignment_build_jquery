function Foo(){
  console.log("foo");
}

var foo = new Foo();
console.log(foo instanceof Object);

function Bar(){
  if (!(this instanceof Bar)){
    return new Bar();
  }
}

var bar = new Bar();
console.log(bar instanceof Bar);

function SimpleObject(){
  this.collection = [1,"foo",3];

}

SimpleObject.prototype.each = function(block){
  var tempCollection = this.collection;
  for (var i = 0; i < tempCollection.length; i++) {
    block(tempCollection[i], i, tempCollection);
  }
};

// what is the difference between 17 through 27 and:
function SimpleObject2(){
  this.collection = [1,"bar",3];
  this .each = function(block){
    var tempCollection = this.collection;
    for (var i = 0; i < tempCollection.length; i++) {
      block(tempCollection[i], i, tempCollection);
    }
  };
}

var putser = function(num){
  console.log(num);
};

var so = new SimpleObject2();
console.log(so.each(putser));
