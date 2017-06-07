function Foo(test){
  this.test = test
  this.print = (content) => {
    console.log(content);
  }
}

Bar = function(test){
  var obj = {
    test: test,
    print: (content) => {
      console.log(content)
    }
  }
  return obj
}

function Baz(test) {
  if (!(this instanceof Baz)) return new Baz();
  this.test = test;
  this.print = (content) => {
    console.log(content)
  }
}

function SimpleObject(collection){
  this.collection = collection;
  this.each = function(callback){
    for (var i=0; i<this.collection.length; i++){
      element = this.collection[i]
      callback(element, i)
    }
  }
}

SimpleObject.each = function(collection, callback){
  for (let i=0; i<collection.length; i++){
    callback(collection[i], i);
  }
}
