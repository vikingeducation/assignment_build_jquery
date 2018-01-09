
/* Create a normal constructor called Foo which returns a simple Foo instance
containing a sample property and method when you call it with the new
keyword. */
function Foo() {
  this.prop = "sample property";
  this.meth = function() {
    "sample method";
  }
}

var foo = new Foo();
console.log(foo);
console.log(foo instanceof Object);
console.log(foo instanceof Foo);

/* Create your own "constructor" called Bar which returns a simple anonymous
object which is otherwise the same as the one you created using Foo above but
doesn't need to be called using new. */
function Bar() {
  return {
    prop: "sample property",
    meth: function() {
      "sample method";
    }
  };
}

var bar = Bar();
console.log(bar);
console.log(bar instanceof Object);
console.log(bar instanceof Bar);

/* Create a constructor function Baz that returns an instance of Baz when
invoked with and without the new keyword. */
function Baz(name) {
  if (!(this instanceof Baz)) return new Baz(name);
  this.name = name;
}

var baz = new Baz("Jim");
console.log(baz);
console.log(baz instanceof Baz);
baz = Baz("Hal");
console.log(baz);
console.log(baz instanceof Baz);
