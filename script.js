$(document).ready(function(){

  // WARMUPS

  // Create a normal constructor called Foo which returns a simple Foo instance containing a sample property and method when you call it with the new keyword.

  function Foo() {
    this.someProp = "value!";
    this.someMethod = function(){ return "I'm a method!"; } ;
  }

  // var foo = new Foo();
  // console.log(foo instanceof Object);
  // console.log(foo instanceof Foo);


// Create your own "constructor" called Bar which returns a simple anonymous object which is otherwise the same as the one you created using Foo above but doesn't need to be called using new.

  function Bar() {
    this.someProp = "value!";
    this.someMethod = function(){ return "I'm a method!"; } ;
    return this;
  }

  // var bar = Bar();
  // console.log(bar instanceof Object);
  // console.log(bar instanceof Bar);


  // Create a constructor function Baz that returns an instance of Baz when invoked with and without the new keyword.

  function Baz() {
    this.someProp = "value!";
    this.someMethod = function(){ return "I'm a method!"; } ;
    return this;
  }

  // var cat = new Baz();
  // console.log(cat instanceof Object);
  // console.log(cat instanceof Baz);

  // var dog = Baz.call({});
  // console.log(dog instanceof Object);
  // console.log(dog instanceof Baz);

  // I really could use more discussion on this point.


  // Build a SimpleObject constructor which:
      // makes an object that contains a collection inside of it
      // a method called 'each' which allows you to iterate over that collection using a passed-in function

  function SimpleObject(){
    this.collection = [];
    this.each = function(inputFunction){
      this.collection.forEach(function(item, index){
        inputFunction(item, index);
      });
    };
  }

  myObj = new SimpleObject();
  myObj.collection = [1,"foo",3];
  console.log(myObj.collection);
  myObj.each( function( el, index ) {
    console.log( "Item " + index + " is " + el);
  })



})