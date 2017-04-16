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
    ERROR_CLASSNAME_NOT_STRING: "className must be a non-empty string!",
    ERROR_CLASSNAME_NOT_VALID: "className must be a string or function!",
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

  // Check single element for class.
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

    // Check for any occurence in the collection that contains this class.
    return [].some.call(this.collection, (el) => {
      return el.hasAttribute('class') && el.classList.contains(className);
    });
  };

  // Add Class
  this.addClass = (classNameOrFunc) => {
    // Make sure we only have a string or function as per the docs.
    if (validateStringArg(classNameOrFunc) || validateFunctionArg(classNameOrFunc)) {
      var classNameToAdd;

      // Iterate through our collection of elements and add the class
      // name either by string or supplied function.
      [].forEach.call(this.collection, (el) => {
        if (validateStringArg(classNameOrFunc)) // Supplied string.
          classNameToAdd = classNameOrFunc;
        else // Supplied function.
          classNameToAdd = classNameOrFunc.call(el);

        // Make sure the result is a valid string to add.
        if (validateStringArg(classNameToAdd)) {
          if (hasWhiteSpaces(classNameToAdd)) {
            // Multiple names were passed, split it and iterate again.
            classNameToAdd.split(' ').forEach((className) => {
                if (!jQuery.hasClass(className, el))
                  el.classList.add(className);
            });
          } else {
            if (!jQuery.hasClass(classNameToAdd, el))
              el.classList.add(classNameToAdd);
          }
        }
      });
    } else // Invalid argument.
      return console.error("addClass: " + CONSTANTS.ERROR_CLASSNAME_NOT_VALID);

    // Return for chaining.
    return this;
  };

  // Remove Class
  this.removeClass = (classNameOrFunc) => {
    // Make sure we only have a string or function as per the docs.
    if (validateStringArg(classNameOrFunc) || validateFunctionArg(classNameOrFunc)) {
      var classNameToRemove;

      // Iterate through our collection of elements and remove the class
      // name either by string or supplied function.
      [].forEach.call(this.collection, (el) => {
        if (validateStringArg(classNameOrFunc)) // Supplied string.
          classNameToRemove = classNameOrFunc;
        else // Supplied function.
          classNameToRemove = classNameOrFunc.call(el);

          // Make sure the result is a valid string to remove.
          if (validateStringArg(classNameToRemove)) {
            if (hasWhiteSpaces(classNameToRemove)) {
              // Multiple names were passed, split it and iterate again.
              classNameToRemove.split(' ').forEach((className) => {
                  if (jQuery.hasClass(className, el))
                    el.classList.remove(className);
              });
            } else {
              if (jQuery.hasClass(classNameToRemove, el))
                el.classList.remove(classNameToRemove);
            }
          }
      });
    } else // Invalid argument.
      return console.error("removeClass: " + CONSTANTS.ERROR_CLASSNAME_NOT_VALID);
    return this;
  }

  // Toggle Class
  this.toggleClass = (className) => {

  }

  // Other helpers
  var validateStringArg = (str) => {
    return str && typeof(str) === 'string' && str.length > 0;
  }

  var hasWhiteSpaces = (str) => {
    return str.indexOf(' ') >= 0;
  }

  var validateElementArg = (ele) => {
    return ele && (ele instanceof HTMLElement);
  }

  var validateFunctionArg = (obj) => {
    return obj && typeof(obj) === 'function';
  }
}

function $(selector) {
  return jQuery(selector);
}
