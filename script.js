$(document).ready(function(){

  // WARMUPS

  // Create a normal constructor called Foo which returns a simple Foo instance containing a sample property and method when you call it with the new keyword.

  function Foo(first,last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = function(){
      return this.firstName + " " + this.lastName;
    };
  }

  var foo = new Foo("Jane", "Smith");
  console.log(foo instanceof Object);
  console.log(foo instanceof Foo);






})