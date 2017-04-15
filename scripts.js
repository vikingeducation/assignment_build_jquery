/**
 * Warmup: Constructors
 */
function Foo() {
  this.sampleProp = "Hello";
  this.sampleMethod = function() { return "from the other side"; }
}
var foo = new Foo();
console.log(foo);
console.log(foo instanceof Object);
console.log(foo instanceof Foo);

function Bar() {
  return {
    sampleProp: "I must",
    sampleMethod: function() { return "have called a thousand times"; }
  }
};
var bar = Bar();
console.log(bar);
console.log(bar instanceof Object);
console.log(bar instanceof Bar);

function Baz() {
  if (!(this instanceof Baz)) return new Baz();
  Foo.call(this);
}
var baz = new Baz();
console.log(baz);
console.log(baz instanceof Baz);
baz = Baz();
console.log(baz instanceof Baz);

/**
 * Warmup: Anonymous Functions
 */
 function SimpleObject() {
   SimpleObject.each = (collection, func) => {
     collection.forEach(func);
   };

   this.collection = [];
   this.each = (func) => {
     this.collection.forEach(func);
   }
 }

var myObj = new SimpleObject();
myObj.collection = [1, "foo", 3];
myObj.each(function(el, index) {
  console.log(`Item ${index} is ${el}.`);
});

var collection = ['foo', 'bar', 'fiz', 'baz'];
SimpleObject.each(collection, function(el, index) {
  console.log(`Item ${index} is ${el}.`);
})

/**
 * Main Challenege: Build jQuery
 */
function jQuery(selector) {
  if (!(this instanceof jQuery)) return new jQuery(selector);
  const CLASS_REGEX = /^\./,
        ID_REGEX = /^#/g;

  var performSearch;
  this.collection = [];
  this.length = 0;

  var determineSearchLogic = (selectorString) => {
    if (!selectorString) return;
    if (CLASS_REGEX.test(selectorString)) {
      performSearch = searchByClass;
      selector = selector.slice(1);
    } else if (ID_REGEX.test(selectorString)) {
      performSearch = searchById;
      selector = selector.slice(1);
    } else {
      performSearch = searchByElement;
    }
  }

  var searchByClass = () => {
    this.collection = (function() {
      var col = [];
      var elements = document.getElementsByClassName(selector);
      for (var i = 0; i < elements.length; i++) {
        col.push(elements[i]);
      }
      return col;
    })();
    console.log(this.collection);
    this.length = this.collection.length;
  }

  var searchById = () => {
    this.collection = (function() {
      var el = document.getElementById(selector);
      return el == null ? []:[el];
    })();
    console.log(this.collection);
    this.length = this.collection.length;
  }

  var searchByElement = () => {
    this.collection = (function() {
      var col = [];
      var elements = document.getElementsByTagName(selector);
      for (var i = 0; i < elements.length; i++) {
        col.push(elements[i]);
      }
      return col;
    })();
    console.log(this.collection);
    this.length = this.collection.length;
  }

  // Determine the search type and perform the search.
  determineSearchLogic(selector);
  if (performSearch) {
    performSearch();
  } else {
    console.error("You must enter a selector to search by!");
  }

  // Helper methods

}

function $(selector) {
  return jQuery(selector);
}
