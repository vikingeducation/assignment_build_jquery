function Foo() {
  this._samp = "sample foo property";
  this._sampMethod = function () {
    return "sample foo method";
  }
}

function Bar() {
  return {
    "_samp": "sample Bar property",
    "_sampMethod": "sample Bar method"
  }
}

function Baz() {
  if (!(this instanceof Baz)) { return new Baz() };
  this._samp = "sample Baz property";
  this._sampMethod = function () {
    return "sample Baz method";
  }
}


function Boo() {
   return "Happy Halloween!"
}

function SimpleObject () {
  this.collection = [1, "foo", 3];
  this.each = function(func) {
    for (var i=0; i<this.collection.length; i++) {
      func(this.collection[i], i);
    }
  };
  SimpleObject.each = function(collection, func) {
    for (var i = 0; i < collection.length; i++) {
      func(collection[i], i);
    }
  };
}


