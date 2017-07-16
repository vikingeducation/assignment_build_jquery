$(document).on('ready',function() {

  const log = console.log;
  const look_at = function( x ) {
    //log( x.toString() )
    log( Object.getPrototypeOf( x ) );
  }

  debugger;
  //stuffz
  console.log("DANK MEMEZ")

  /*  WARMUPS */
  //Contructors

  class Foo {
    constructor(){
      this.prop = "Handlebar mustache"
      this.m = function( message ){
        console.log(`hello, I've got a ${this.prop} and a message for you! -> ${message}`);
      }
    }
  }

  function Bar(){
    var bar = {};
    bar.prop = "Handlebar mustache"
    bar.m = function( message ){
      console.log(`hello, I've got a ${bar.prop} and a message for you! -> ${message}`);
    }
    return bar;
  }

  function Baz(){
    if (!(this instanceof Baz)) return new Baz();
  }

  //test

  var foo = new Foo();
  log(foo instanceof Object);
  //=> true
  log(foo instanceof Foo);
  //=> true


  var bar = Bar();
  log(bar instanceof Object)
  //=> true
  log(bar instanceof Bar)
  //=> false

  var baz = new Baz();
  log(baz instanceof Baz)
  //=> true

  baz = Baz();
  log(baz instanceof Baz)
  //=> true




  //Anon Functions
  class SimpleObject{
    constructor(){
      this.collection = [];
      this.each = function( passed_function ){
        return this.collection.forEach( passed_function );
      }
    }
  }
  SimpleObject.each = function( collection, passed_function ){
    return collection.forEach( passed_function );
  }

  //test
  myObj = new SimpleObject();
  myObj.collection = [1,"foo",3];
  myObj.each( function( el, index ) {
    console.log( "Item " + index + " is " + el);
  })
  // Item 0 is 1
  // Item 1 is foo
  // Item 2 is 3

  var collection = ['foo', 'bar', 'fiz', 'baz'];

  SimpleObject.each(collection, function(el, index) {
    console.log( "Item " + index + " is " + el);
  });
  //Item 0 is foo
  //Item 1 is bar
  //Item 2 is fiz
  //Item 3 is baz


  // ***  BUILDING JQUERY ***** //

  //Basics
/*
  function JQuery(){
    if (!(this instanceof Baz)) return new Baz();





  }*/
  class JQuery{
    contructor() {
      this.hello = function(){
        console.log( 'hello' )
      }
    }
  }
  this.jQuery = new JQuery;
  this.$ = this.jQuery;




})
