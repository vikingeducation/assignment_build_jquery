//Warmup: Constructors


function Foo(){
  this.message = "Welcome to the jungle";
  this.yell = function(){
    return this.message.toUpperCase();
  };
}

function Bar(){
  var anonObj = { message: "Welcome to the jungle",
  yell: function(){
    return this.message.toUpperCase();
    }
  }
  return anonObj;
}

function Baz(){
  if (this instanceof Baz) {
    this.message = "Welcome to the jungle";
    this.yell = function(){
      return this.message.toUpperCase();
    };
  } else {
  return new Baz();
    }
}


//Warmup: Anonymous Functions


function SimpleObject(){
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
