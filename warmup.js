function FooConstructor(){
  this.fooProp = "foo!";
  this.fooMethod = function() {};
}

function BarConstructor(){
  if(!(this instanceof BarConstructor)){
    return new BarConstructor();
  }
  this.barProp = "bar!";
  this.barMethod = function(){};
}

function SimpleObject(){
  this.collection = [1, "foo", 3];
  this.each = function(callback){
    for(var i = 0; i < this.collection.length; i++){
      callback(this.collection[i], i);
    }
  }
}

SimpleObject.each = function(collection, callback){
  for(var i = 0; i < collection.length; i++){
      callback(collection[i], i);
    }
}