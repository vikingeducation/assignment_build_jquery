

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

    switch(str[0]) {
      case "<" :
         collection = [str];
         break;
      case "." :
        collection =  document.getElementsByClassName(str.slice(1));
        break;
      case "#" :
        collection = [document.getElementById(str.slice(1))];
        break;
      default :
        collection = document.getElementsByTagName(str);
    }
    return collection;
  }

  this.get_collection = search(str);

  if(!(this instanceof jQuery)){
    return new jQuery(str);
  }
  else{
    this.idx = function(num){
      return this.get_collection[num];
    }
  }
}

//x = jQuery("p");
//gives you jQuery Object and to get to the collcetion you have to do
//x.get_collection --> specifially call this method
// How do you get collection without calling get_collection and also have x.idx(0)

var $ = jQuery;


