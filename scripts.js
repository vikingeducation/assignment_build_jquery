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
  const CONSTANTS = {
    CLASS_REGEX: /^\./,
    ID_REGEX: /^#/g,

    // Errors
    ERROR_SELECTOR_NOT_PRESENT: "You must enter a selector to search by!",
    ERROR_CLASSNAME_NOT_STRING: "Class name must be a string!",
    ERROR_ELEMENT_NOT_VALID: "Element must be an HTMLElement node!"
  }

  var collection = [];
  var performSearch;

  var determineSearchLogic = (selectorString) => {
    if (!selectorString) return;
    if (typeof(selectorString) == 'object' && selectorString instanceof HTMLElement) {
        performSearch = searchByNode;
    } else {
      if (CONSTANTS.CLASS_REGEX.test(selectorString)) {
        performSearch = searchByClass;
      } else if (CONSTANTS.ID_REGEX.test(selectorString)) {
        performSearch = searchById;
      } else {
        performSearch = searchByElement;
      }
    }
  }

  var searchByNode = () => {
    collection = [selector];
  }

  var searchByClass = () => {
    collection = document.getElementsByClassName(selector.slice(1));
  }

  var searchById = () => {
    var el;
    collection = ((el = document.getElementById(selector.slice(1))) == null ? []:[el]);
  }

  var searchByElement = () => {
    collection = document.getElementsByTagName(selector);
  }

  // Determine the search type and perform the search.
  determineSearchLogic(selector);
  if (performSearch) {
    performSearch();
  } else {
    console.error(CONSTANTS.ERROR_SELECTOR_NOT_PRESENT);
  }

  // Search complete
  this.collection = collection;
  this.length = collection.length;

  // Helper methods
  this.idx = (index) => {
    if (index < 0 || index > this.length) return undefined;
    return this.collection[index];
  };

  jQuery.hasClass = (className, element) => {
    if (!validateStringArg(className))
      return console.error(CONSTANTS.ERROR_CLASSNAME_NOT_STRING);
    if (!validateElementArg(element))
      return console.error(CONSTANTS.ERROR_ELEMENT_NOT_VALID);

    return element.classList.contains(className);
  };

  // Has Class
  this.hasClass = (className) => {
    if (!validateStringArg(className))
      return console.error(CONSTANTS.ERROR_CLASSNAME_NOT_STRING);

    return [].some.call(this.collection, (el) => {
      return el.hasAttribute('class') && el.classList.contains(className);
    });
    return this;
  };

  // Add Class
  this.addClass = (className) => {
    if (!validateStringArg(className))
      return console.error(CONSTANTS.ERROR_CLASSNAME_NOT_STRING);

    [].forEach.call(this.collection, (el) => {
      if (jQuery.hasClass(className, el)) return;
      el.classList.add(className);
    });
    return this;
  };

  // Remove Class
  this.removeClass = (className) => {
    if (!validateStringArg(className))
      return console.error(CONSTANTS.ERROR_CLASSNAME_NOT_STRING);

    [].forEach.call(this.collection, (el) => {
      if (!jQuery.hasClass(className, el)) return;
      el.classList.remove(className);
    });
    return this;
  }

  // Other helpers
  var validateStringArg = (str) => {
    return str && typeof(str) == 'string' && str.length > 0;
  }

  var validateElementArg = (ele) => {
    return ele && (ele instanceof HTMLElement);
  }
}

function $(selector) {
  return jQuery(selector);
}
