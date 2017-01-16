function Foo(){
  this.message = "Welcome to the jungle";
  this.yell = function(){
    return this.message.toUpperCase();
  };
  // return this;
}

function Bar(){
  var anonObj = {};
  Foo.call(anonObj);
  return anonObj;
  // return Foo.call({}};
}

function Baz(){
  return (this instanceof Baz) ? this : new Baz();
}

function SimpleObject(){
  this.collection = [];

  this.each = function(callback){
    var elements = this.collection;

    for (var i = 0; i < elements.length; i++){
      callback(elements[i], i);
    }
  }
}

SimpleObject.each = function(collection, callback){
  for (var i = 0; i < collection.length; i++){
    callback(collection[i], i);
  }
};
