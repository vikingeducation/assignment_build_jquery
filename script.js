

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
  var collection = []; 

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

  var jQueryObj = {
    collection: collection,
    length: collection.length, 
    idx: function(num){
      return collection[num];
    },

    hasClass: function(str){
      if (document.getElementsByClassName(str).length > 0){
        return true;
      }
      return false;
    },

    addClass: function(str){
      for (i = 0; i < this.collection.length; i++){
        this.collection[i].className += " " + str;
      }
    },

    removeClass: function(str){
      for (i = 0; i < this.collection.length; i++){
        var x = this.collection[i].className.replace(new RegExp(str), "");
        this.collection[i].className = x;
        //why are you able to change the string in line 74 but you have to assign again here?
      }
    },

    toggleClass: function(str){
      if(this.hasClass(str)){
        this.removeClass(str);
      }
      else{
        this.addClass(str);
      }  
    },

    val: function(input){
      if(input){
        //This does not reflect in the document object but
        //changes are seen on the form
        this.collection[0].value = input;
      }
      else {
        return this.collection[0].value;
      }
    },

    css: function(css_selector,input){
      if(input){
        collection[0].style[css_selector] = input;
      }
      else {
        return collection[0].style[css_selector];
      }
    },

    height: function(input){
      if(input){
        this.collection[0].s = input;
      }
      else {
        return this.collection[0].clientHeight;
      }
    }, //getter works but not setter?

    width: function(input){
      if(input){
        this.collection[0].style[width] = input;
      }
      else{
        return this.collection[0].clientWidth;
      }
    },//again getter works but not setter

    attr: function(attrName){
      if(attrName){
        this.collection[0].attributes = attrName;
      }
      else{
        return this.collection[0].attributes[attrName];
      }
    }

  }

  return jQueryObj;
}

  var $ = jQuery;


//Full Featured Functionality

