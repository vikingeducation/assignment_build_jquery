

function FooConstructor() {
  this.fooProp = "foo!";
  this.fooMethod = function() {
    return "Hello"
  };
}

var foo = new FooConstructor();
foo;

function BarConstructor() {
  if (!(this instanceof BarConstructor)){
      return new BarConstructor();
  }
  else{
    return {
      someProp: "xyz",
      someMethod: function() {
        return "Hello";
      }
    };
  }
}

var bar = BarConstructor();



function SimpleObject() {
  this.collection = [1,2,3,"string"];
  this.each = function(func) {
    for (var i = 0; i < this.collection.length; i++) {
      func(this.collection[i],i);
    }
  };
}


function jQuery(str) {
  var collection; 

  var search = function(str){
    console.log(str);
    switch(str[0]) {
      case "." :
        collection =  document.getElementsByClassName(str.slice(1));
        break;
      case "#" :
        collection = document.getElementById(str.slice(1));
        break;
      default :
        collection = document.getElementsByTagName(str);
    }
    console.log(collection);
    return collection;
  }

  this.get_collection = search(str);

  if(!(this instanceof jQuery)){
    return new jQuery(str);
  }
  else{
    this.idx = function(num){
      this[num];
    }
  }
}
