function Foo(){
  this.message = "Welcome to the jungle";
  this.yell = function(){
    return this.message.toUpperCase();
  };
}

function Bar(){
  var anonObj = { message: "Welcome to the jungle",
  yell: function(){
    return this.message.toUpperCase();
    }
  }
  return anonObj;
}

function Baz(){
  if (this instanceof Baz) {
    this.message = "Welcome to the jungle";
    this.yell = function(){
      return this.message.toUpperCase();
    };
  } else {
  return new Baz();
    }
}
