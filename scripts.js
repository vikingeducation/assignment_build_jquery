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
    ERROR_CLASSNAME_NOT_STRING: "Must be a string!",
    ERROR_CLASSNAME_NOT_VALID: "Must be a string or function!",
    ERROR_VALUE_NOT_VALID: "Must be a string, number, array, or function!",
    ERROR_NEED_STRING_OR_NUMBER: "Must be a string or number!",
    ERROR_ELEMENT_NOT_VALID: "Element must be an HTMLElement node!"
  }

  // Check single element for class.
  jQuery.hasClass = (className, element) => {
    if (!validateStringArg(className))
      return console.error(CONSTANTS.ERROR_CLASSNAME_NOT_STRING);
    if (!validateElementArg(element))
      return console.error(CONSTANTS.ERROR_ELEMENT_NOT_VALID);

    return element.classList.contains(className);
  };

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
    if (validateStringArg(classNameOrFunc)
      || validateFunctionArg(classNameOrFunc)) {
      // Iterate through our collection of elements and add the class
      // name either by string or supplied function.
      [].forEach.call(this.collection, (el, index) => {
        // Check if we got passed a function.
        if (validateFunctionArg(classNameOrFunc))
          classNameOrFunc = classNameOrFunc.call(el, index, el.className);

        // Make sure the result is a valid string to add.
        if (validateStringArg(classNameOrFunc)) {
          if (hasWhiteSpaces(classNameOrFunc)) {
            // Multiple names were passed, split it and iterate again.
            classNameOrFunc.split(' ').forEach((className) => {
                if (!jQuery.hasClass(className, el))
                  el.classList.add(className);
            });
          } else {
            if (!jQuery.hasClass(classNameOrFunc, el))
              el.classList.add(classNameOrFunc);
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
      // Iterate through our collection of elements and remove the class
      // name either by string or supplied function.
      [].forEach.call(this.collection, (el, index) => {
        // Check if we got passed a function.
        if (validateFunctionArg(classNameOrFunc))
          classNameOrFunc = classNameOrFunc.call(el, index, el.className);

          // Make sure the result is a valid string to remove.
          if (validateStringArg(classNameOrFunc)) {
            if (hasWhiteSpaces(classNameOrFunc)) {
              // Multiple names were passed, split it and iterate again.
              classNameOrFunc.split(' ').forEach((className) => {
                  if (jQuery.hasClass(className, el))
                    el.classList.remove(className);
              });
            } else {
              if (jQuery.hasClass(classNameOrFunc, el))
                el.classList.remove(classNameOrFunc);
            }
          }
      });
    } else // Invalid argument.
      return console.error("removeClass: " + CONSTANTS.ERROR_CLASSNAME_NOT_VALID);

    // Return for chaining.
    return this;
  }

  // Toggle Class
  this.toggleClass = (classNameOrFunc, state) => {
    // Make sure we only have a string or function as per the docs.
    if (validateStringArg(classNameOrFunc) || validateFunctionArg(classNameOrFunc)) {
      // Iterate through our collection of elements and toggle the class
      // name either by string or supplied function.  Adding or Removing
      // is determined by state flag, if present.
      [].forEach.call(this.collection, (el, index) => {
        // Check if we got passed a function.
        if (validateFunctionArg(classNameOrFunc))
          classNameOrFunc = classNameOrFunc.call(el, index, el.className, state);

        // Make sure the result is a valid string to toggle.
        if (validateStringArg(classNameOrFunc)) {
          if (hasWhiteSpaces(classNameOrFunc)) {
            // Multiple names were pased, split it and iterate again.
            classNameOrFunc.split(' ').forEach((className) => {
              if ((state == undefined ^ true === state) && !jQuery.hasClass(className, el))
                el.classList.add(className);
              else if ((state == undefined ^ false === state) && jQuery.hasClass(className, el))
                el.classList.remove(className);
            });
          } else {
            if ((state == undefined ^ true === state) && !jQuery.hasClass(classNameOrFunc, el))
              el.classList.add(classNameOrFunc);
            else if ((state == undefined ^ false === state) && jQuery.hasClass(classNameOrFunc, el))
              el.classList.remove(classNameOrFunc);
          }
        }
      });
    } else // Invalid argument. // Technically according to the docs, this is valid with no arguments. TODO: FIX LATER
      return console.error("toggleClass: " + CONSTANTS.ERROR_CLASSNAME_NOT_VALID);

    // Return for chaining.
    return this;
  }

  // val
  this.val = (valueOrFunc) => {
    // Return undefined if collection is empty.
    if (this.collection.length == 0) return undefined;

    // We only work on input, select, and textareas.
    const VALID_TYPES = ['input', 'select', 'textarea'];
    var firstElement = this.idx(0);
    var firstElementTag = firstElement.tagName.toLowerCase();

    // Check for valid element and input types.
    if (VALID_TYPES.indexOf(firstElementTag) >= 0) {
      // If our argument is undefined, we're getting.
      if (valueOrFunc == undefined) {
        switch (firstElementTag) {
          case "select":
            // Determine if we're single or multiple.
            if (!firstElement.hasAttribute('multiple')) {
              return firstElement.options[firstElement.selectedIndex].getAttribute('value');
            } else { // Multiple?
              if (firstElement.getAttribute('multiple') == 'multiple') {
                var selectedItems = [];
                [].forEach.call(firstElement.selectedOptions, (opt) => {
                  selectedItems.push(opt.getAttribute('value'));
                });
                return selectedItems;
              }
            }
            break;
          case "textarea":
            return firstElement.textContent;
            break
          default: // input.
            // First get the type of the input.
            var elementType = firstElement.getAttribute('type');
            switch (elementType) {
              case 'checkbox':
              case 'radio':
                return firstElement.hasAttribute('checked');
                break;
              default: // Any other type.
                  return firstElement.getAttribute('value');
            }
        }
      } else { // Setting
        if (validateStringArg(valueOrFunc)
          || validateNumberArg(valueOrFunc)
          || validateArrayArg(valueOrFunc)
          || validateFunctionArg(valueOrFunc)) {
          // Iterate through collection and set values based on supplied
          // string or function.
          [].forEach.call(this.collection, (el, index) => {
            // Check if we got passed a function.
            if (validateFunctionArg(valueOrFunc))
              valueOrFunc = valueOrFunc.call(el, index, $(el).val());

              // Make sure we got a good value back since we might be
              // using the return value of a function.
              if (validateStringArg(valueOrFunc)
                || validateNumberArg(valueOrFunc)
                || validateArrayArg(valueOrFunc)) {
                switch (firstElementTag) {
                  case "select":
                    // Determine if we're single or multiple.
                    if (!el.hasAttribute('multiple')) {
                      // If we passed an array, for whatever reason, just use the
                      // value of the first element.
                      if (validateArrayArg(valueOrFunc) && valueOrFunc.length > 0)
                        valueOrFunc = valueOrFunc[0];

                      // Iterate through options and set values appropriately.
                      [].forEach.call(el.options, (opt) => {
                        if (valueOrFunc == opt.getAttribute('value'))
                          opt.setAttribute('selected', true);
                        else
                          opt.removeAttribute('selected');
                      });
                    } else { // Multiple?
                      if (el.getAttribute('multiple') == 'multiple') {
                        // Multiple selects can take arrays to set multiple values.
                        // Items in the array get selected, items not in, get unselected.
                        // Convert our "value" into an array of "whatevers"
                        if (!validateArrayArg(valueOrFunc))
                          valueOrFunc = [valueOrFunc];
                        [].forEach.call(el.options, (opt) => {
                          if (valueOrFunc.indexOf(opt.getAttribute('value')) >= 0)
                            opt.setAttribute('selected', true);
                          else
                            opt.removeAttribute('selected');
                        });
                      }
                    }
                    break;
                  case "textarea":
                    // If we passed an array, just join it.
                    if (validateArrayArg(valueOrFunc))
                      valueOrFunc = valueOrFunc.join(" ");
                    el.textContent = valueOrFunc;
                    break
                  default: // input.
                    // First get the type of the input.
                    var elementType = el.getAttribute('type');
                    switch (elementType) {
                      case 'checkbox':
                      case 'radio':
                        // Checkboxes and radios can be referenced from passing
                        // an array, so we double loop and check if the value
                        // of the input is present.
                        // First convert single value to array.
                        if (!validateArrayArg(valueOrFunc))
                          valueOrFunc = [valueOrFunc];

                        // Iterate through and check if the element's value is present
                        if (valueOrFunc.indexOf(el.getAttribute('value')) >= 0)
                          el.setAttribute('checked', true);
                        else
                          el.removeAttribute('checked');
                        break;
                      default: // Any other type.
                        // Just use first value if array is passed.
                        if (validateArrayArg(valueOrFunc) && valueOrFunc.length > 0)
                          valueOrFunc = valueOrFunc[0];
                        el.setAttribute('value', valueOrFunc);
                    }
                }
              }
          });
        } else
          return console.log("val: " + CONSTANTS.ERROR_VALUE_NOT_VALID);

        // Return for chaining.
        return this;
      }
    }

     // Invalid elemnt type.
    return undefined;
  }

  // css
  this.css = (nameOrArrayOrObject, valueOrFunc) => {
    // Check if we're getting or setting.
    if ((validateStringArg(nameOrArrayOrObject)
      ^ validateArrayArg(nameOrArrayOrObject)
      && valueOrFunc === undefined)) { // Getting.
        var firstElement = this.idx(0);
        // Was a single property or an array passed?
        if (validateStringArg(nameOrArrayOrObject)) {
          // Return the property.
          return firstElement.style[nameOrArrayOrObject];
        } else { // Array of properties.
          var returnObject = {};
          nameOrArrayOrObject.forEach((pro) => {
            var propValue = firstElement.style[pro];
            if (propValue)
              returnObject[pro] = propValue;
          });
          return returnObject;
        }
      } else { // Setting.
        // Determine whether we're setting one value or multiple
        // values from an object set.
        if (validateStringArg(nameOrArrayOrObject)) { // String
          // Iterate through the collection and apply the css values.
          [].forEach.call(this.collection, (el) => {
            // Check if we got passed a function.
            if (validateFunctionArg(valueOrFunc))
              valueOrFunc = valueOrFunc.call(el, index, $(el).css(nameOrArrayOrObject));

            // Check if we still have something valid.
            if (validateStringArg(valueOrFunc) || validateNumberArg(valueOrFunc)) {
              // Set the value.
              el.style[nameOrArrayOrObject] = valueOrFunc;
            } else
              return console.log("css: " + CONSTANTS.ERROR_NEED_STRING_OR_NUMBER);
          });
        } else { // Object.
          // Iterate through the collection and apply the
          // properties supplied in the object.
          [].forEach.call(this.collection, (el) => {
            // Iterate through the object.
            for (var key in nameOrArrayOrObject) {
              if (!nameOrArrayOrObject.hasOwnProperty(key)) continue;
              el.style[key] = nameOrArrayOrObject[key];
            }
          });
        }

        // Return for chaining.
        return this;
      }

      // Invalid argument.
      return undefined;
  }

  // Other helpers
  var validateStringArg = (str) => {
    return str && typeof(str) === 'string';
  }

  var validateNumberArg = (num) => {
    return num && typeof(num) === 'number';
  }

  var validateArrayArg = (arr) => {
    return arr && arr.constructor === Array;
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
