function Foo() {
  this.myprop = "myprop";
  this.mymethod = function() {
    return "hello world";
  }
}

function Bar() {
  return {
    myprop: "myprop",
    mymethod: function() {
      return "hello world"
    }
  };
}


function Baz() {
  if (!(this instanceof Baz)) return new Baz();
  this.myprop = "myprop";
  this.mymethod = function() {
    return "hello world";
  }
}
