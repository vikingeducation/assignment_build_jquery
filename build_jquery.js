// create jQuery obj
// constructor function

function jQuery(input){
  var result = {}; // initialize with empty jQuery object
  var arr;

  if (typeof input === "object") {
    result.obj = [input];
  }
  else if (input[0] === "."){
    arr = window.document.getElementsByClassName(input.substring(1));
    result.obj = arr;
  }
  else if (input[0]=== '#'){
    arr = window.document.getElementById(input.substring(1));
    // if no result, replace null with []
    if (arr === null){
      result.obj = [];
    }
    else {
      result.obj = [arr];
    }
  }
  else {
    arr = window.document.getElementsByTagName(input);
    result.obj = arr;
  }

  result.length = function() {
    return result.obj.length; // returns a number
  };

  // result.foo = function(pos) {
  //   return "foo method";
  // },

  result.idx = function(pos) {
    // return this.result[pos]; //currently returns DOM obj
    return jQuery(result.obj[pos]);
  };

  result.hasClass = function(str) {
    // result.obj.forEach(
    //   function(ele) {
    //     if (ele.className === str) {return true;};
    //   }
    // );
    var bool;
    for (var i=0; i<result.obj.length; i++) {
      // if (result.obj[i].className === str) {return true;};
      var classnames = result.obj[i].className.split(" ");
      classnames.forEach(
        function(ele) {
          if (ele === str) {
            bool = true;
          }
        } // end fn
        ); // end forEach
      if (bool === true){return true;}
    } // end for loop

      return false;
  }; // end of hasClass method

  result.addClass = function(input){
    for (var i=0; i<result.obj.length; i++) {
      if (typeof input === "string"){
      result.obj[i].className += " " + input;
      } else if (typeof input === "function") {
        //input is a fn
        var c = result.obj[i].className;
        result.obj[i].className += " " + input(i, c);

      }
    }
    return result;
  };

  result.removeClass = function(input){
    if (typeof input === "string" && result.hasClass(input)){
      // while (result.hasClass(input)){
      for (var i=result.obj.length-1; i >=0; i--) {
        if (result.idx(i).hasClass(input)) {
          result.obj[i].className = result.obj[i].className.replace(input, "");
        }
      }
    } else if (typeof input === "function") {
      for (var i=result.obj.length-1; i >=0; i--)  {
        var c = result.obj[i].className;
        if (result.idx(i).hasClass(input(i, c))) {
          result.obj[i].className = result.obj[i].className.replace(input(i, c), "");
        }
      }
    };

    return result;
  };

  result.toggleClass = function(input) {
    for (var i=result.obj.length-1; i>=0; i--) {
      if (result.idx(i).hasClass(input)) {
        result.idx(i).removeClass(input);
      } else {
        result.idx(i).addClass(input);
      }
    };
    return result;
  };

  //come back to later for multiple select
  result.val = function(input) {
    if (result.obj[0] && input === undefined) {
      return result.obj[0].value;
    } else if (input) {
      for (var i=0; i<result.length(); i++) {
        result.obj[i].value = input;
      };
      return result;
    }
  };

  result.css = function(propName, val){
    if (val === undefined){
      return window.getComputedStyle(result.obj[0])[propName];
    } else {
      for (var i=0; i<result.length(); i++) {
        result.obj[i].style[propName] = val;
      }
    }
  };

  result.height = function(val) {
    result.css('height', val);
  };

  result.width = function(val) {
    result.css('width', val);
  };

  result.attr = function(attrName) {

  }

  return result;
};

// Alias function
var $ = function(input) {
  return jQuery(input);
};













