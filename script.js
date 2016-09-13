function Foo(){
  this.property = "sample";
  this.method = function(){console.log("I'm a method")};
};


function Bar(){
  if (this instanceof Bar){
    this.propery = "Without new"
  }
  return new Foo();
};



function Baz(){
  if(this instanceof Baz){
    this.property = "this is baz";
  }
  else return new Baz();
};


function SimpleObject(){
  this.collection = [];
  this.each = function(collection, callback){
    for(var i = 0; i < collection.length; i ++){
      callback(collection[i], i)
    };
  };

};


function Practice(){
  this.collection = [1,2,4,5,6];

  this.length = this.collection.length;
};